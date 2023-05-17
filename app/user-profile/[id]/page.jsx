'use client'

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

import Profile from "@components/Profile"

const UserProfile = ({ params }) => {
  const [posts, setPosts] = useState([])
  
  const searchParams = useSearchParams();
  const userName = searchParams.get('name');

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
},[params.id]);

  return (
      <Profile 
        name={`${userName}'s`}
        desc={'See their posts'}
        data={posts}
      />
    
  )
}
export default UserProfile