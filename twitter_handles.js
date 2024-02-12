#!/usr/bin/node

// Define your sample string response
const stringResponse = `
Hello everyone! @johndoe is here. Follow us @example_account for updates.
Visit their website: https://www.example.com/@twitterhandle. This is not a handle: user_name.
`;

// Regular expression for Twitter handles
const regexTwitterHandle = /@\w+/g;

// Create an empty array to store results
const results = [];

// Use match() to find all handles
const matches = stringResponse.match(regexTwitterHandle);

// Handle potential null value from match()
if (matches) {
  results.push(...matches); // Spread operator expands matched handles into the array
}

// Print the extracted data
console.log("\nExtracted Twitter Handles:");
results.forEach((handle) => console.log(`- ${handle}`));
