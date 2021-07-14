import { FC } from "react";
import Image from "next/image";
import { Post } from "../pages/api/posts";

const PostCard: FC<Post> = ({
  id,
  title,
  picture,
  excerpt,
}) => {

  return (
    <article
      id={id}
      className="shadow-sm"
    >
      <div className="w-full relative aspect-w-4 aspect-h-3">
        <Image
          src={picture.thumbnail}
          alt={title}
          layout="fill"
          unoptimized={true}
          className="object-cover rounded-t"
        />
      </div>

      <h3
        className=" text-lg font-bold"
      >{title}</h3>

      <p
        className=""
      >{excerpt}</p>
    </article>
  )
}

export default PostCard;