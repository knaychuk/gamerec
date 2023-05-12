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
            
          />
        </div>
      </div>
    </div>
  )
}
export default PostCard