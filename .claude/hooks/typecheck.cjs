#!/usr/bin/env node
// TypeScript Type Check - Incremental check for modified file only

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];

if (!filePath || !fs.existsSync(filePath) || !filePath.match(/\.tsx?$/)) {
    process.exit(0);
}

try {
    execSync(`npx tsc --noEmit --skipLibCheck "${filePath}"`, {
        stdio: 'pipe',
        timeout: 10000
    });
    process.exit(0);
} catch (error) {
    const output = error.stdout?.toString() || '';
    const normalizedPath = path.resolve(filePath);

    const relevantErrors = output
        .split('\n')
        .filter(line => line.includes(filePath) || line.includes(normalizedPath))
        .join('\n')
        .trim();

    if (relevantErrors) {
        console.error(relevantErrors);
        process.exit(1);
    }

    process.exit(0);
}
