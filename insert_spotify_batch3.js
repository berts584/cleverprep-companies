const fs = require('fs');

// Read both files
const mainContent = fs.readFileSync('data/rolePageContent.js', 'utf8');
const newRolesContent = fs.readFileSync('temp_spotify_roles_batch3.js', 'utf8');

// Find oracle section to locate end of spotify
const oracleStart = mainContent.indexOf("  // Priority 3B: Oracle");

if (oracleStart === -1) {
  console.error("Could not find '// Priority 3B: Oracle' section");
  process.exit(1);
}

// Find the last closing brace of spotify section before oracle
const beforeOracle = mainContent.substring(0, oracleStart);
const lastRoleEnd = beforeOracle.lastIndexOf("    }");

if (lastRoleEnd === -1) {
  console.error("Could not find last role end in spotify section");
  process.exit(1);
}

console.log("Found last role end at position:", lastRoleEnd);

// Insert new roles after the last role
const beforeInsert = mainContent.substring(0, lastRoleEnd + 5);
const afterInsert = mainContent.substring(lastRoleEnd + 5);

const newContent = beforeInsert + ",\n\n" + newRolesContent + afterInsert;

fs.writeFileSync('data/rolePageContent.js', newContent, 'utf8');
console.log("Spotify batch 3 roles inserted successfully!");
