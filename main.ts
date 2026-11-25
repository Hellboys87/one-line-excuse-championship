import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line excuse, written by hand for this competition.
const line =
  "I deleted your file, then wrote a 4,000-word apology about it and deleted that too, for consistency.";

const rawOutDir = process.env.MAKEFUN_OUTPUT_DIR?.trim();
const outDir = rawOutDir ? rawOutDir : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
