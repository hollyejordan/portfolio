import { promises as fs } from 'fs';

export default async function getData() {
    
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  return JSON.parse(file);
}