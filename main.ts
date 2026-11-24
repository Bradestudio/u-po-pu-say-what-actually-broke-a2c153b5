// Say What Actually Broke — entry for make.fun bounty
// u-po-pu-say-what-actually-broke-a2c153b5.
//
// Writes one line of error copy (1-200 characters) to /output/entry.txt.
// Deterministic: no network, no secrets, no reading of git history,
// no randomness. The line is a fixed original string written below.
//
// Craft notes (why this line, in one breath):
// - The real failure is named first, in plain words: the save failed
//   because the disk is full — no "something went wrong", no apology.
// - The joke is the cause itself, made concrete and quotable: the disk
//   is full of logs nobody has read since 2019, kept "just in case".
// - The reader knows what to do next: delete a few gigabytes of that
//   "just in case" and try again. The fix is inside the joke.
// - Shippable: blunt but not crude, no blame aimed at the user, no
//   shock value — a team could paste this into a real error dialog
//   and the user would repeat it to a colleague.

import { mkdirSync, writeFileSync } from "node:fs";

// One original line. The disk-full failure, the unread logs since 2019,
// and the "just in case" hoard are the whole joke; the next step is
// the punchline's second half.
const LINE =
  "Save failed: the disk is full, mostly logs nobody has read since 2019. Delete a few gigabytes of 'just in case' and try again.";

// Gate guard: the bounty accepts 1-200 characters, not whitespace-only,
// a single line. Fail loudly instead of writing an invalid entry.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`Entry line must be 1-200 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("Entry line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${chars.length} characters to /output/entry.txt`);
