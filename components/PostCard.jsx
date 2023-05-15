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
    <div className="bg-secondary-b p-6 m-2">
      <div>
        <div className="flex ">
          <Image 
              src={post.creator.image}
              alt="user image"
              width={40}
              height={40}
              className="rounded-full object-contain"
          />
          <div>
            <h3 className="text-sm font-medium mx-2">{post.creator.username}</h3>
          </div>
        </div>
      </div>
        
        <p className="text-sm mt-2">{post.rec}</p>
        <p 
          onClick={() => handleTagClick && handleTagClick(post.tag)}
          className="text-blue-400 text-sm mt-2"
        >#{post.tag}</p>
      
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