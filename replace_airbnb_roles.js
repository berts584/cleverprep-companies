const fs = require('fs');

// Read both files
const mainContent = fs.readFileSync('data/rolePageContent.js', 'utf8');
const newRolesContent = fs.readFileSync('temp_airbnb_roles_batch1.js', 'utf8');

// Find Airbnb section - it comes after uber
const airbnbStart = mainContent.indexOf("  'airbnb':");
const lyftStart = mainContent.indexOf("  'lyft':", airbnbStart);

if (airbnbStart === -1) {
  console.error("Could not find 'airbnb' section");
  process.exit(1);
}
if (lyftStart === -1) {
  console.error("Could not find 'lyft' section after airbnb");
  process.exit(1);
}

console.log("Found airbnb at position:", airbnbStart);
console.log("Found lyft at position:", lyftStart);

// Build new airbnb section
const airbnbSection = `  'airbnb': {\n${newRolesContent}\n  },\n\n`;

// Replace airbnb section
const beforeAirbnb = mainContent.substring(0, airbnbStart);
const afterAirbnb = mainContent.substring(lyftStart);

const newContent = beforeAirbnb + airbnbSection + afterAirbnb;

fs.writeFileSync('data/rolePageContent.js', newContent, 'utf8');
console.log("Airbnb roles replaced successfully!");
