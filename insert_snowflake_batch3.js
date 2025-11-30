const fs = require('fs');

// Read both files
const mainContent = fs.readFileSync('data/rolePageContent.js', 'utf8');
const newRolesContent = fs.readFileSync('temp_snowflake_roles_batch3.js', 'utf8');

// Find databricks section to locate end of Snowflake
const databricksStart = mainContent.indexOf("  'databricks':");

if (databricksStart === -1) {
  console.error("Could not find 'databricks' section");
  process.exit(1);
}

// Find the last closing brace of Snowflake section before databricks
const beforeDatabricks = mainContent.substring(0, databricksStart);
const lastRoleEnd = beforeDatabricks.lastIndexOf("    }");

if (lastRoleEnd === -1) {
  console.error("Could not find last role end in Snowflake section");
  process.exit(1);
}

console.log("Found last role end at position:", lastRoleEnd);

// Insert new roles after the last role
const beforeInsert = mainContent.substring(0, lastRoleEnd + 5);
const afterInsert = mainContent.substring(lastRoleEnd + 5);

const newContent = beforeInsert + ",\n\n" + newRolesContent + afterInsert;

fs.writeFileSync('data/rolePageContent.js', newContent, 'utf8');
console.log("Snowflake batch 3 roles inserted successfully!");
