const fs = require('fs');

// Read both files
const mainContent = fs.readFileSync('data/rolePageContent.js', 'utf8');
const newRolesContent = fs.readFileSync('temp_spotify_roles_batch1.js', 'utf8');

// Find spotify section
const spotifyStart = mainContent.indexOf("  'spotify':");
const oracleStart = mainContent.indexOf("  // Priority 3B: Oracle");

if (spotifyStart === -1) {
  console.error("Could not find 'spotify' section");
  process.exit(1);
}
if (oracleStart === -1) {
  console.error("Could not find '// Priority 3B: Oracle' section");
  process.exit(1);
}

console.log("Found spotify at position:", spotifyStart);
console.log("Found oracle priority at position:", oracleStart);

// Build new spotify section
const spotifySection = `  'spotify': {\n${newRolesContent}\n  },\n\n`;

// Replace spotify section
const beforeSpotify = mainContent.substring(0, spotifyStart);
const afterSpotify = mainContent.substring(oracleStart);

const newContent = beforeSpotify + spotifySection + afterSpotify;

fs.writeFileSync('data/rolePageContent.js', newContent, 'utf8');
console.log("Spotify roles replaced successfully!");
