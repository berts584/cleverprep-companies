const fs = require('fs');

// Read both files
const mainContent = fs.readFileSync('data/rolePageContent.js', 'utf8');
const newRolesContent = fs.readFileSync('temp_lyft_roles_batch3.js', 'utf8');

// Find spotify section to locate end of lyft
const spotifyStart = mainContent.indexOf("  // Priority 3A: Spotify");

if (spotifyStart === -1) {
  console.error("Could not find '// Priority 3A: Spotify' section");
  process.exit(1);
}

// Find the last closing brace of lyft section before spotify
const beforeSpotify = mainContent.substring(0, spotifyStart);
const lastRoleEnd = beforeSpotify.lastIndexOf("    }");

if (lastRoleEnd === -1) {
  console.error("Could not find last role end in lyft section");
  process.exit(1);
}

console.log("Found last role end at position:", lastRoleEnd);

// Insert new roles after the last role
const beforeInsert = mainContent.substring(0, lastRoleEnd + 5);
const afterInsert = mainContent.substring(lastRoleEnd + 5);

const newContent = beforeInsert + ",\n\n" + newRolesContent + afterInsert;

fs.writeFileSync('data/rolePageContent.js', newContent, 'utf8');
console.log("Lyft batch 3 roles inserted successfully!");
