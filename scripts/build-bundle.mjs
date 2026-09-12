#!/usr/bin/env node
// Bundles src/index.jsx → dist/index.cjs.js + dist/index.esm.js using esbuild.
// This is the REAL bundler: esbuild dedupes the React import, wires exports,
// and produces valid CJS/ESM that won't collide.

import { build } from "esbuild";
import { mkdirSync } from "fs";
import { join } from "path";

const root = join(import.meta.dirname, "..");
const entry = join(root, "src", "index.jsx");
const distDir = join(root, "dist");
mkdirSync(distDir, { recursive: true });

const shared = {
  entryPoints: [entry],
  bundle: true,
  jsx: "transform",
  jsxFactory: "React.createElement",
  jsxFragment: "React.Fragment",
  loader: { ".jsx": "jsx" },
  external: ["react"],
  logLevel: "info",
};

await build({
  ...shared,
  format: "cjs",
  outfile: join(distDir, "index.cjs.js"),
});

await build({
  ...shared,
  format: "esm",
  outfile: join(distDir, "index.esm.js"),
});

console.log("✅ dist/index.cjs.js");
console.log("✅ dist/index.esm.js");