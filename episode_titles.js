#!/usr/bin/node

// Define sample string response
const stringResponse = `
Breaking Bad S05E14: Ozymandias
Better Call Saul S06E13: Saul Gone
The Good Place S04E13: The Good Place
... (More data continues)
`;

// Regular expression for episode titles
const regexEpisodeTitle = /(?!\([^\(]*?\)\s+:)\s*([^\s]+)\s+S(\d{2})E(\d{2}):\s+(.*?)$/im;

// Create an empty array to store results
const results = [];

// Use matchAll() to find all occurrences
const matches = stringResponse.matchAll(regexEpisodeTitle);

for (const match of matches) {
  const showName = match[1];
  const season = match[2];
  const episode = match[3];
  const title = match[4];

  results.push({ showName, season, episode, title });
}

// Print the extracted data
console.log("\nExtracted Episode Titles:");
results.forEach((episode) => console.log(`- ${episode.showName} S${episode.season}E${episode.episode}: ${episode.title}`));
