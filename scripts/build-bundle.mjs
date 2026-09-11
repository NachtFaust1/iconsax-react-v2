#!/usr/bin/env node
// Bundle src/index.jsx → dist/index.js (CJS + ESM) using esbuild.
// Handles JSX transform, dedupe, and proper export wiring.
import { build } from "esbuild";
import { join } from "path";

const root = join(import.meta.dirname, "..");
const entry = join(root, "src", "index.jsx");

const common = {
    entryPoints: [entry],
    bundle: true,
    jsx: "transform",
    loader: { ".jsx": "jsx" },
    logLevel: "info",
    // React is a peer dependency — never bundle it
    external: ["react", "react/jsx-runtime"],
    target: ["es2018"],
};

// CJS
await build({
    ...common,
    outfile: join(root, "dist", "index.cjs.js"),
    format: "cjs",
});

// ESM
await build({
    ...common,
    outfile: join(root, "dist", "index.esm.js"),
    format: "esm",
});

console.log(`✅ dist/index.cjs.js (${(await import("fs")).statSync(join(root, "dist", "index.cjs.js")).size.toLocaleString()} bytes)`);
console.log(`✅ dist/index.esm.js (${(await import("fs")).statSync(join(root, "dist", "index.esm.js")).size.toLocaleString()} bytes)`);