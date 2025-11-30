const fs = require('fs');

// Read both files
const mainContent = fs.readFileSync('data/rolePageContent.js', 'utf8');
const newRolesContent = fs.readFileSync('temp_ibm_roles_batch1.js', 'utf8');

// Find lyft section - we'll insert IBM before it (after Stripe)
const lyftStart = mainContent.indexOf("  'lyft':");

if (lyftStart === -1) {
  console.error("Could not find 'lyft' section");
  process.exit(1);
}

console.log("Found lyft at position:", lyftStart);

// Build the IBM company section with proper wrapping
const ibmSection = `  // Priority 3: IBM (Enterprise Technology)
  'ibm': {
${newRolesContent}
  },

`;

// Insert IBM section before lyft
const beforeLyft = mainContent.substring(0, lyftStart);
const afterLyft = mainContent.substring(lyftStart);

const newContent = beforeLyft + ibmSection + afterLyft;

fs.writeFileSync('data/rolePageContent.js', newContent, 'utf8');
console.log("IBM company section inserted successfully!");
