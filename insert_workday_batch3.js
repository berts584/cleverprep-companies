const fs = require('fs');

// Read both files
const mainContent = fs.readFileSync('data/rolePageContent.js', 'utf8');
const newRolesContent = fs.readFileSync('temp_workday_roles_batch3.js', 'utf8');

// Find lyft section to locate end of Workday
const lyftStart = mainContent.indexOf("  'lyft':");

if (lyftStart === -1) {
  console.error("Could not find 'lyft' section");
  process.exit(1);
}

// Find the last closing brace of Workday section before lyft
const beforeLyft = mainContent.substring(0, lyftStart);
const lastRoleEnd = beforeLyft.lastIndexOf("    }");

if (lastRoleEnd === -1) {
  console.error("Could not find last role end in Workday section");
  process.exit(1);
}

console.log("Found last role end at position:", lastRoleEnd);

// Insert new roles after the last role
const beforeInsert = mainContent.substring(0, lastRoleEnd + 5);
const afterInsert = mainContent.substring(lastRoleEnd + 5);

const newContent = beforeInsert + ",\n\n" + newRolesContent + afterInsert;

fs.writeFileSync('data/rolePageContent.js', newContent, 'utf8');
console.log("Workday batch 3 roles inserted successfully!");
