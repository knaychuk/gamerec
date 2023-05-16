'use client'

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    }

    if(session?.user.id) {
      fetchPosts();
    }
  }, [session?.user.id]);


  const handleEdit = (post) => {
    router.push(`/update-post?id=${post._id}`)
  }

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this post?");

    if(hasConfirmed) {
      try {
        await fetch(`/api/post/${post._id.toString()}`, {
          method: "DELETE"
        });

        const filteredPosts = posts.filter((p) => 
          p._id !== post._id);

          setPosts(filteredPosts);
        } catch(err) {
          console.log(err);
       }
    }
  }

  return (
    <Profile 
      name="Your"
      desc={session && session.user.email ? "See your posts" : "See their posts"}
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}
export default MyProfile