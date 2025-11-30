const fs = require('fs');

// Read both files
const mainContent = fs.readFileSync('data/rolePageContent.js', 'utf8');
const newRolesContent = fs.readFileSync('temp_stripe_roles_batch1.js', 'utf8');

// Find lyft section - we'll insert stripe before it
const lyftStart = mainContent.indexOf("  'lyft':");

if (lyftStart === -1) {
  console.error("Could not find 'lyft' section");
  process.exit(1);
}

console.log("Found lyft at position:", lyftStart);

// Build the stripe company section with proper wrapping
const stripeSection = `  // Priority 2: Stripe (Payments/Fintech)
  'stripe': {
${newRolesContent}
  },

`;

// Insert stripe section before lyft
const beforeLyft = mainContent.substring(0, lyftStart);
const afterLyft = mainContent.substring(lyftStart);

const newContent = beforeLyft + stripeSection + afterLyft;

fs.writeFileSync('data/rolePageContent.js', newContent, 'utf8');
console.log("Stripe company section inserted successfully!");
