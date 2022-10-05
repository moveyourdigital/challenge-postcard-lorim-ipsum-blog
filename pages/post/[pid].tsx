import { useRouter } from "next/dist/client/router"
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from 'react';
import Comments from "../../components/Comments";
import Loading from "../../components/Loading";
import { Post } from './../api/posts';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const getPost = async (id: string | string []) => {
    const url = new URL(`/api/posts/${id}`, baseURL).toString();

    const response = await fetch(url);

    const postProps = await response.json()

    return postProps
}

export default function PostPage () {
    const router = useRouter();
    const id = router.query.pid;
    const [post, setPost] = useState<Post>()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchData () {
            if (id) {
                setIsLoading(true)
                const post = await getPost(id)
                setPost(post)
                setIsLoading(false)
            }
        }

        fetchData()
    }, [id])

    const listTags = post?.tags.map((tag) => {
        return(
            <h3 className="mr-4 bg-gray-400 px-2 rounded-full mt-4 md:mt-0" key={tag}>{tag}</h3>
        )
    })

    const listComment = post?.comments.map((comment) => {
        return (
            <Comments key={comment.id} comment={comment} />
        )
    })

    return (
        <>
        <Head>
        <title>The PostCard Blog</title>
        <meta name="description" content={post?.title} />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        {isLoading ? <Loading /> :
        <main className="px-4 lg:px-0 max-w-screen-md mx-auto my-10">
            <section>
                <div className="flex md:flex-row flex-col justify-start items-center">
                    <div className="flex flex-col justify-between items-center">
                        <div className="h-20 w-20">
                        {post &&
                        <Image 
                            src={post.author.avatar}
                            alt={post.title}
                            layout="fixed"
                            unoptimized={true}
                            height='80%'
                            width='80%'
                            className="rounded-full"
                         />}
                         </div>
                         <p className="font-mono text-xs antialiased font-thin mt-4">{post && post.author.email}</p>
                    </div>
                    <div className="max-w-md ml-8 flex flex-col items-center mt-4 md:mt-0 md:items-start">
                        <p>{post?.author.name} | {post?.author.company}</p>
                        <p className="font-mono text-xs antialiased font-thin text-gray-700">{post?.author.about}</p>
                    </div>
                </div>
            </section>

            <section>
                <h1 className="text-xl mt-8">{post?.title}</h1>
                <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="my-8 w-full md:w-1/2">
                    {
                    post && 
                    <Image 
                        src={post.picture.large}
                        alt={post.title}
                        layout="responsive"
                        height='100%'
                        width='100%'
                        unoptimized={true}
                        className="rounded"
                    />
                    }
                </div>
                <div className="w=full md:w-1/2">
                    <p className="text-sm antialiased font-thin ml-4">{post?.excerpt}</p>
                    <p className="text-sm antialiased font-thin ml-4 mt-4">{post?.content}</p>
                </div>
                </div>
            </section>

            <section>
            <h1 className="text-xl mt-8">Tags</h1>
            <div className="flex justify-start items-center flex-wrap mt-4">
                {listTags}
            </div>
            </section>

            <section>
            <h1 className="text-xl mt-8">Comments</h1>
            <div>
                {listComment}
            </div>
            </section>
        </main>
        }
        </>
    )
}