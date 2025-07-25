import { exec as _exec } from 'node:child_process';
import { promisify } from 'node:util';

const exec = promisify(_exec);

while (true){
    await new Promise(resolve => setTimeout(resolve, 1000));
    await exec('npm run build');
    console.info('building');
}