import React from "react";
import Image from "next/image";
import Container from "../components/Container";
import { Post } from '../pages/api/posts';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const SinglePost = ({
    title,
    picture,
    content,
    author,
    tags,
}: Post) => {

    return (
        <>
            <Container>
                <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={picture.thumbnail} alt="Thumbnail" />
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tags}</span>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={author.avatar} alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{author.name}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{author.email}</span>
                    </div>
                </div>

            </Container>

            <footer className="border-t text-center py-10 text-gray-700 text-sm font-semibold">
                © {new Date().getFullYear()} PostCard Lorim Ipsum blog
            </footer>
        </>
    );
}


export default SinglePost;


// This gets called on every request
export async function getServerSideProps({ params }: any) {

    // Fetch data from external API
    const res = await fetch(`${baseURL}/api/posts/${params.slug}`);
    const { title,
        picture,
        content,
        author,
        tags,
        comments, } = await res.json();

    // Pass data to the page via props
    return {
        props: {
            title,
            picture,
            content,
            author,
            tags,
            comments,
        }
    }
}