'use client'

import { useState, useEffect } from "react"

const UserProfile = ({ params }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
},[params.id]);

  return (
    <div>
      {posts.map((post) => (
        <div>{post.rec}</div>
      ))}
    </div>
  )
}
export default UserProfile