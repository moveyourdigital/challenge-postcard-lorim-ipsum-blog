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
      className="shadow-md rounded"
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
        className="pl-4 py-4 pr-4 text-lg font-bold"
      >{title}</h3>

      <p
        className="pl-4 pb-4 pr-4"
      >{excerpt}</p>
    </article>
  )
}

export default PostCard;