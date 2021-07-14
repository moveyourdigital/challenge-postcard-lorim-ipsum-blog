// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { allPosts, Post } from "../posts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | undefined>
) {
  const { slug: requestedSlug } = req.query

  const posts = await allPosts;
  const post = posts.find(({ slug }) => slug === requestedSlug)

  res.status(post ? 200 : 404).json(post);
}
