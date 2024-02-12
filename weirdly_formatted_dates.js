#!/usr/bin/node

// Define sample string response
const stringResponse = `
Today's date is 15-Feb-2024.
Last meeting was on 08-Dec-2023.
Upcoming event: 31-Oct-2024.
... (More data continues)
`;

// Regular expression for dates, accepting case-insensitive month abbreviations
const regexDate = /\d{2}-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{4}/i;

// Create an empty array to store results
const results = [];

// Use matchAll() to find all occurrences
const matches = stringResponse.matchAll(regexDate);

for (const match of matches) {
  const day = match[1];
  const month = match[2];
  const year = match[3];

  // Convert month abbreviation to full month name (optional)
  const fullMonth = new Date(0, monthNames.indexOf(month), 1).toLocaleString('en-US', { month: 'long' });

  results.push({ day, month, year, fullMonth });
}

// Month name mapping for optional conversion
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Print the extracted data
console.log("\nExtracted Dates:");
results.forEach((date) => console.log(`- ${date.day}-${date.month}-${date.year} ${date.fullMonth ? `(` + date.fullMonth + `)` : ''}`));
