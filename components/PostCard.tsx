import React, { FC } from "react";
import Image from "next/image";
import { Post } from "../pages/api/posts";
import Link from "next/link";

const PostCard: FC<Post> = ({
  id,
  title,
  picture,
  excerpt,
  slug
}) => {

  return (
    <article
      id={id}
      className="shadow-sm prose lg:prose-xl"
    >
      <Link href={`${slug}`}>
        <a>
      <div className="w-full relative aspect-w-4 aspect-h-3">
        <Image
          src={picture.thumbnail}
          alt={title}
          layout="fill"
          unoptimized={true}
          className="object-cover rounded-t"
        />
      </div>
      <div className="container items-center border-2 shadow-2xl">
        <h3
          className=" text-lg font-sans pl-4 font-bold mt-4 font-sans"
        >{title}</h3>
      <p
        className="pl-4 pt-4 pb-2 font-sans"
      >{excerpt}</p>
      </div>
      </a>
      </Link>
    </article>

  )
}

export default PostCard;