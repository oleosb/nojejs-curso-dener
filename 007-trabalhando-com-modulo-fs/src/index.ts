import fs from 'node:fs';
import path from 'node:path';

try {
  if (!fs.existsSync(path.resolve('tmp'))) {
    fs.mkdirSync('tmp');
  }
} catch (error) {
  console.log(error);
}
