const fs = require('fs');

// Read both files
const mainContent = fs.readFileSync('data/rolePageContent.js', 'utf8');
const newRolesContent = fs.readFileSync('temp_snowflake_roles_batch1.js', 'utf8');

// Find lyft section - we'll insert Snowflake before it (alphabetically after ServiceNow)
const lyftStart = mainContent.indexOf("  'lyft':");

if (lyftStart === -1) {
  console.error("Could not find 'lyft' section");
  process.exit(1);
}

console.log("Found lyft at position:", lyftStart);

// Build the Snowflake company section with proper wrapping
const snowflakeSection = `  // Priority 3: Snowflake (Data Cloud Platform)
  'snowflake': {
${newRolesContent}
  },

`;

// Insert Snowflake section before lyft
const beforeLyft = mainContent.substring(0, lyftStart);
const afterLyft = mainContent.substring(lyftStart);

const newContent = beforeLyft + snowflakeSection + afterLyft;

fs.writeFileSync('data/rolePageContent.js', newContent, 'utf8');
console.log("Snowflake company section inserted successfully!");
