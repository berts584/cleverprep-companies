const fs = require('fs');

// Read both files
const mainContent = fs.readFileSync('data/rolePageContent.js', 'utf8');
const newRolesContent = fs.readFileSync('temp_servicenow_roles_batch1.js', 'utf8');

// Find lyft section - we'll insert ServiceNow before it (alphabetically after Salesforce)
const lyftStart = mainContent.indexOf("  'lyft':");

if (lyftStart === -1) {
  console.error("Could not find 'lyft' section");
  process.exit(1);
}

console.log("Found lyft at position:", lyftStart);

// Build the ServiceNow company section with proper wrapping
const servicenowSection = `  // Priority 3: ServiceNow (Enterprise Workflow Automation)
  'servicenow': {
${newRolesContent}
  },

`;

// Insert ServiceNow section before lyft
const beforeLyft = mainContent.substring(0, lyftStart);
const afterLyft = mainContent.substring(lyftStart);

const newContent = beforeLyft + servicenowSection + afterLyft;

fs.writeFileSync('data/rolePageContent.js', newContent, 'utf8');
console.log("ServiceNow company section inserted successfully!");
