#!/usr/bin/node

// Define sample string response
const stringResponse = `
[Verse 1] This is the first verse
[Verse 2] And this is the second verse, with some special characters like &%$#@!
[Chorus] We are singing a song!
[Bridge] This is the bridge, connecting the verses
[Outro] Fading out...
`;

// Improved regular expression for song lyrics
const regexSongLyrics = /\[Verse\s+(\d+)\]\s+(.*?)(?=\[|\n|$)/im;

// Create an empty object to store results
const results = {
  songLyrics: [],
};

// Use matchAll() and capture groups
const matches = stringResponse.matchAll(regexSongLyrics);

for (const match of matches) {
  const verseNumber = match[1];
  const lyrics = match[2];
  results.songLyrics.push({ verseNumber, lyrics });
}

// Print the extracted data
console.log("\nExtracted Song Lyrics:");
results.songLyrics.forEach((item) => console.log(`- Verse ${item.verseNumber}: ${item.lyrics}`));
