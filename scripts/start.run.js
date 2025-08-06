import { exec as _exec } from 'node:child_process';
import { promisify } from 'node:util';

const exec = promisify(_exec);
const build = exec('npm run build:watch');
const server = exec('npm run start:server');

await Promise.all([build, server]);
