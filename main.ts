// One-Line Office Joke: one short joke about office life, at most 200
// characters, built on the most stable thing in any office.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "The office printer has been 'almost out of magenta' for three years now, and honestly, it's the most stable thing here.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
