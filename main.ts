import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "v4.2.0: fixed a bug where walking into a room cleared the task queue with no error logged.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
