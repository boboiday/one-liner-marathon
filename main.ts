import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "You press 2:00. The microwave runs 47 seconds, stops, and beeps. You press 2:00 again. It runs 12 seconds, stops, and beeps. The display now reads: 'enjoy your meal.' It is still frozen.";

if (LINE.length < 1 || LINE.length > 280 || LINE.includes("\n")) {
  throw new Error("entry must be a single line of 1-280 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
