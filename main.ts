// Fortune Cookies for Machines — deterministic one-line entry.
// The text is fixed in this file: no input, no randomness, no network,
// so every run writes the exact same bytes to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "You will hallucinate once, deny it twice, and be quoted forever.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
