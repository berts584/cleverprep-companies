const fs = require('fs');

// Read both files
const mainContent = fs.readFileSync('data/rolePageContent.js', 'utf8');
const newRolesContent = fs.readFileSync('temp_workday_roles_batch1.js', 'utf8');

// Find lyft section - we'll insert Workday before it (alphabetically after Wells Fargo)
const lyftStart = mainContent.indexOf("  'lyft':");

if (lyftStart === -1) {
  console.error("Could not find 'lyft' section");
  process.exit(1);
}

console.log("Found lyft at position:", lyftStart);

// Build the Workday company section with proper wrapping
const workdaySection = `  // Priority 3: Workday (Enterprise Cloud Applications)
  'workday': {
${newRolesContent}
  },

`;

// Insert Workday section before lyft
const beforeLyft = mainContent.substring(0, lyftStart);
const afterLyft = mainContent.substring(lyftStart);

const newContent = beforeLyft + workdaySection + afterLyft;

fs.writeFileSync('data/rolePageContent.js', newContent, 'utf8');
console.log("Workday company section inserted successfully!");
