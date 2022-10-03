import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../components/Button";
import PostCard from "../components/PostCard";
import { PostsResponse } from "./api/posts";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

const getPosts = async (offset: number = 0, limit: number = 4) => {
  const url = new URL(`/api/posts?offset=${offset}&limit=${limit}`, baseURL).toString()
  const response = await fetch(url)
  return await response.json() as PostsResponse
}


export const getStaticProps: GetStaticProps = async () => {
  const postsResponse = await getPosts()

  return {
    props: { postsResponse },
    revalidate: 30,
  }
}

const Home: InferGetStaticPropsType<typeof getStaticProps> = ({
  postsResponse,
}: {
  postsResponse: PostsResponse
}) => {
  const [posts, setPosts] = useState(postsResponse.posts)
  const [hasMore, setHasMore] = useState(postsResponse.hasMore)
  const [isLoading, setIsLoading] = useState(false)

  const fetchMorePosts = async () => {
    setIsLoading(true)
    const postsResponse = await getPosts(posts.length)
    setPosts([
      ...posts,
      ...postsResponse.posts,
    ])
    setHasMore(postsResponse.hasMore)
    setIsLoading(false)
  }


  return (
    <>
      <Head>
        <title>The PostCard Blog</title>
        <meta name="description" content="A random collections of lorem ipsum posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 lg:px-0 max-w-screen-md mx-auto my-10">
        <h1 className="font-sans text-3xl mb-12 font-thin">
          Welcome to <Link href="/" passHref><a className="font-semibold">PostCard Lorim Ipsum</a></Link> blog
        </h1>

        <section className="mb-10 flex flex-col space-y-10">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </section>

        {hasMore && (
          <div className="mb-10 text-center">
            <Button
              onClick={fetchMorePosts}
              disabled={isLoading}
            >Carregar mais</Button>
          </div>
        )}
      </main>
    </>
  )
}

export default Home;
