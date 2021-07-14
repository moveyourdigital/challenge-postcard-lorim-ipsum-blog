// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const postsUrl = process.env.POSTS_API_ENDPOINT;

export interface Picture {
  thumbnail: string;
  medium: string;
  large: string;
}

export interface Author {
  id: string;
  name: string;
  email: string;
  company: string;
  avatar: string;
  about: string;
}

export type Tag = string;

export interface Comment {
  id: string;
  name: string;
  email: string;
  avatar: string;
  comment: string;
}

export interface Post {
  id: string;
  slug: string
  title: string;
  picture: Picture;
  excerpt: string;
  content: string;
  author: Author;
  tags: Tag[];
  comments: Comment[];
}

export interface PostsRequest extends NextApiRequest {
  query: {
    offset: string;
    limit: string;
  };
}

export interface PostsResponse {
  posts: Post[];
  total: number;
  hasMore: boolean;
}

export const allPosts = (async () =>
  await fetch(postsUrl!)
    .then((response) => response.json())
    .then((posts) => posts as Post[]))();


export default async function handler(
  req: PostsRequest,
  res: NextApiResponse<PostsResponse>
) {
  const offset = Number(req.query.offset || 0);
  const limit = Number(req.query.limit || 4);

  const posts = await allPosts;

  const total = posts.length;
  const hasMore = offset + limit < total;

  res.status(200).json({
    posts: posts.slice(offset, offset + limit),
    total,
    hasMore,
  });
}
