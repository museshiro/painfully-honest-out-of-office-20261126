import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Thanks for your email — I'm out until Monday, resisting the urge to reply just to feel needed, which I'm told is progress.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
