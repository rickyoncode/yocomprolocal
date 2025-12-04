const fs = require('fs');
const path = require('path');
const https = require('https');

// Import business data
const dataPath = path.join(__dirname, '../data/businesses.ts');
const dataContent = fs.readFileSync(dataPath, 'utf8');

// Parse the TypeScript data (simple extraction)
const dataMatch = dataContent.match(/export const data: Town\[\] = (\[[\s\S]*\]);/);
if (!dataMatch) {
  console.error('Could not parse business data');
  process.exit(1);
}

// Use eval to parse the array (safe here since we control the source)
const data = eval(dataMatch[1]);

const RADAR_PUBLIC_KEY = process.env.RADAR_PUBLIC_KEY;

if (!RADAR_PUBLIC_KEY) {
  console.error('Error: RADAR_PUBLIC_KEY environment variable is required');
  console.error('Usage: RADAR_PUBLIC_KEY=your_key node scripts/generate-maps.js');
  process.exit(1);
}
const OUTPUT_DIR = path.join(__dirname, '../public/img/maps');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function generateMaps() {
  const businesses = data.flatMap(town => town.businesses);

  console.log(`Generating ${businesses.length} static map images...`);

  for (const business of businesses) {
    const { id, coords } = business;
    const { lat, lng } = coords;

    // Radar Static Maps API URL
    const url = `https://api.radar.io/maps/static?width=480&height=250&center=${lat},${lng}&zoom=15&scale=2&markers=color:0x2d7a4d|${lat},${lng}&publishableKey=${RADAR_PUBLIC_KEY}`;

    const filepath = path.join(OUTPUT_DIR, `${id}.png`);

    try {
      console.log(`Downloading map for ${id}...`);
      await downloadImage(url, filepath);
      console.log(`  ✓ Saved ${id}.png`);
    } catch (err) {
      console.error(`  ✗ Error downloading map for ${id}:`, err.message);
    }
  }

  console.log('\nDone!');
}

generateMaps();
