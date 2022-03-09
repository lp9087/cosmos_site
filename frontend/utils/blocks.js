import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export const deserializeBlocks = async blocks => {
  const promises = blocks.map(async x => {
    if (x.resourcetype === 'BlockText') {
      const { text, ...rest } = x;
      const { content, data } = matter(text);
      const source = await serialize(content, { scope: data });

      return { ...rest, source };
    }

    return x;
  });

  return Promise.all(promises);
};
