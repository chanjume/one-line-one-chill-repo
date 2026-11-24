import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Chill — a single sentence of horror, under 200 characters.
// The line: a doorbell camera catches "me" coming home at a time I can
// prove I was somewhere else. Concrete and checkable: doorbell camera,
// 11:40 p.m., twenty minutes, the office. The twist redefines the setup:
// the scare is not a break-in, it is that someone already wears my life
// at my own front door — and the last word, "office", is the alibi that
// proves it. The dread outlasts the line: I still have to go home tonight.
// Single line, no trailing newline: the gate counts 1-200 characters.
const ENTRY =
  "The doorbell camera showed me unlocking our front door at 11:40 p.m., twenty minutes before I actually left the office.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);
