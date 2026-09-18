const { spawnSync } = require('child_process');
const path = require('path');

const nodeDir = 'C:\\Program Files (x86)\\Microsoft Visual Studio\\2022\\BuildTools\\MSBuild\\Microsoft\\VisualStudio\\NodeJs';
const npmCli = 'C:\\Users\\KRISHNA SUHAS\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js';

console.log('Running npm install...');
const installRes = spawnSync(path.join(nodeDir, 'node.exe'), [npmCli, 'install'], {
  cwd: __dirname,
  stdio: 'inherit',
  env: {
    ...process.env,
    PATH: `${nodeDir};${process.env.PATH}`
  }
});

console.log('Install exit code:', installRes.status);

if (installRes.status === 0) {
  console.log('Running npm run build...');
  const buildRes = spawnSync(path.join(nodeDir, 'node.exe'), [npmCli, 'run', 'build'], {
    cwd: __dirname,
    stdio: 'inherit',
    env: {
      ...process.env,
      PATH: `${nodeDir};${process.env.PATH}`
    }
  });
  console.log('Build exit code:', buildRes.status);
}
