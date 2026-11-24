import { copyFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const sourceDir = dirname(fileURLToPath(import.meta.url));
const destinationDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

copyFileSync(resolve(sourceDir, "entry.png"), resolve(destinationDir, "entry.png"));
