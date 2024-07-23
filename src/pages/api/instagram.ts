// src/page/api/instagram.ts
import { exec } from 'child_process';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

interface InstagramComment {
  id: string | null;
  username: string | null;
  text: string | null;
  timestamp: string | null;
}

interface InstagramPost {
  link: string;
  img: string | null;
  comments: InstagramComment[];
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { username } = req.query;

  if (!username || typeof username !== 'string') {
    return res.status(400).json({ error: 'Username is required' });
  }

  // Ajusta el path aquí para apuntar correctamente a tu script
  const scriptPath = path.resolve('src/scripts/scrapeInstagram.js');

  
  exec(`npx ts-node ${scriptPath} ${username}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${stderr}`);
      return res.status(500).json({ error: 'Error fetching data' });
    }

    const posts: InstagramPost[] = JSON.parse(stdout);
    res.status(200).json(posts);
  });
};