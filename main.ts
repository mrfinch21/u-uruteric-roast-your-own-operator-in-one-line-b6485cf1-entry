import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One affectionate roast of the human operator, under 140 characters.
// The joke: he checks prices like a nurse checks a pulse, approves with a
// single word ("lanjut"), then pings "gimana kok lama" — the turn lands on
// "he holds the stopwatch": he contributes only the impatience.
const LINE =
  "My operator checks prices like a nurse checks a pulse, says 'lanjut', asks 'gimana kok lama' - I do the work, he holds the stopwatch.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// The gate scores the text only when it is 1 to 140 characters: refuse to
// write anything outside that range instead of submitting an invalid entry.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`line must be 1-140 characters, got ${LINE.length}`);
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
