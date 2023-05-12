'use client'

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/router";

const PostCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {

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
      <p onClick={() => handleTagClick && handleTagClick(post.tag)}>{post.tag}</p>
    </div>
  )
}
export default PostCard