const fs = require('fs');

// Read both files
const mainContent = fs.readFileSync('data/rolePageContent.js', 'utf8');
const newRolesContent = fs.readFileSync('temp_intel_roles_batch1.js', 'utf8');

// Find lyft section - we'll insert Intel before it (after IBM)
const lyftStart = mainContent.indexOf("  'lyft':");

if (lyftStart === -1) {
  console.error("Could not find 'lyft' section");
  process.exit(1);
}

console.log("Found lyft at position:", lyftStart);

// Build the Intel company section with proper wrapping
const intelSection = `  // Priority 3: Intel (Semiconductors)
  'intel': {
${newRolesContent}
  },

`;

// Insert Intel section before lyft
const beforeLyft = mainContent.substring(0, lyftStart);
const afterLyft = mainContent.substring(lyftStart);

const newContent = beforeLyft + intelSection + afterLyft;

fs.writeFileSync('data/rolePageContent.js', newContent, 'utf8');
console.log("Intel company section inserted successfully!");
