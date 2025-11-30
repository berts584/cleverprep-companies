const fs = require('fs');

// Read both files
const mainContent = fs.readFileSync('data/rolePageContent.js', 'utf8');
const newRolesContent = fs.readFileSync('temp_lyft_roles_batch1.js', 'utf8');

// Find lyft section - it comes after airbnb
const lyftStart = mainContent.indexOf("  'lyft':");
const spotifyStart = mainContent.indexOf("  'spotify':", lyftStart);

if (lyftStart === -1) {
  console.error("Could not find 'lyft' section");
  process.exit(1);
}
if (spotifyStart === -1) {
  console.error("Could not find 'spotify' section after lyft");
  process.exit(1);
}

console.log("Found lyft at position:", lyftStart);
console.log("Found spotify at position:", spotifyStart);

// Build new lyft section
const lyftSection = `  'lyft': {\n${newRolesContent}\n  },\n\n  // Priority 3A: Spotify\n`;

// Replace lyft section
const beforeLyft = mainContent.substring(0, lyftStart);
const afterLyft = mainContent.substring(spotifyStart);

const newContent = beforeLyft + lyftSection + afterLyft;

fs.writeFileSync('data/rolePageContent.js', newContent, 'utf8');
console.log("Lyft roles replaced successfully!");
