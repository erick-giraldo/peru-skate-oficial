import puppeteer from 'puppeteer';

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

export const scrapeInstagram = async (username: string): Promise<InstagramPost[]> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://www.instagram.com/${username}/`);

  const posts = await page.evaluate(() => {
    const nodeList = document.querySelectorAll('article div div div div a');
    const postArray = Array.from(nodeList).map(post => ({
      link: (post as HTMLAnchorElement).href,
      img: (post.querySelector('img') as HTMLImageElement)?.src || null,
      comments: [] as InstagramComment[]
    }));

    return postArray;
  });

  for (const post of posts) {
    await page.goto(post.link);
    await page.waitForSelector('ul.XQXOT');

    const comments = await page.evaluate(() => {
      const commentNodes = document.querySelectorAll('ul.XQXOT > ul > div > li > div > div.C4VMK');
      return Array.from(commentNodes).map(comment => ({
        id: comment.querySelector('a')?.getAttribute('href')?.split('/')[2] || null,
        username: comment.querySelector('a')?.innerText || null,
        text: comment.querySelector('span')?.innerText || null,
        timestamp: comment.querySelector('time')?.getAttribute('datetime') || null,
      }));
    });

    post.comments = comments;
  }

  await browser.close();
  return posts;
};

(async () => {
  const username = process.argv[2];
  const posts = await scrapeInstagram(username);
  console.log(JSON.stringify(posts));
})();
