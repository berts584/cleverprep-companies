const fs = require('fs');

// Read both files
const mainContent = fs.readFileSync('data/rolePageContent.js', 'utf8');
const newRolesContent = fs.readFileSync('temp_cisco_roles_batch1.js', 'utf8');

// Find lyft section - we'll insert Cisco before it (after Intel)
const lyftStart = mainContent.indexOf("  'lyft':");

if (lyftStart === -1) {
  console.error("Could not find 'lyft' section");
  process.exit(1);
}

console.log("Found lyft at position:", lyftStart);

// Build the Cisco company section with proper wrapping
const ciscoSection = `  // Priority 3: Cisco (Networking)
  'cisco': {
${newRolesContent}
  },

`;

// Insert Cisco section before lyft
const beforeLyft = mainContent.substring(0, lyftStart);
const afterLyft = mainContent.substring(lyftStart);

const newContent = beforeLyft + ciscoSection + afterLyft;

fs.writeFileSync('data/rolePageContent.js', newContent, 'utf8');
console.log("Cisco company section inserted successfully!");
