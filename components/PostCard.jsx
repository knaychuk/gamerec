'use client'

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";

const PostCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div>
      <div> 
        <div>
          <Image 
            src={post.creator.image}
            alt="user image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h3>{post.creator.username}</h3>
            <p>{post.creator.email}</p>
          </div>
        </div>     
      </div>
      <p>{post.rec}</p>
      <p onClick={() => handleTagClick && handleTagClick(post.tag)}>#{post.tag}</p>
      {session?.user.id === post.creator._id && pathName === '/my-profile' && (
        <div>
          <p onClick={handleEdit}>
            Edit
          </p>
          <p onClick={handleDelete}>
            Delete
          </p>
        </div>
      )}
    </div>
  )
}
export default PostCard