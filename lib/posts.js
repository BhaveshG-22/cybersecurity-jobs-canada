import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "posts");

export function getPostSlugs() {
  const dir = fs.readdirSync(postsDirectory);
  const realSlug = dir.map((slug) => slug.replace(/\.md$/, ""));
  return realSlug;
}

export function getPostBySlug(slug) {
  //const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  data.slug = slug;
  const items = { data, content };

  return items;
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
