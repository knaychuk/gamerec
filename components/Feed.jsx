'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

import PostCard from "./PostCard";

const PostCardList = ({ data, handleTagClick }) => {


  return (
    <div>
      {data.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};


const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/post');
      const data = await response.json();

      setAllPosts(data);

    }

    fetchPosts();
  }, []);

  return (
    <section className="mt-2">
      <div className="flex flex-col justify-center items-center">  
      <form className="my-3">
        <input 
          type="text"
          placeholder="search for genre"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="text-xl border-primary-b border-4 p-2 w-96 focus:outline-none"
        />
      </form>
      <Link href="/create-post" className='button-primary'>Create Post</Link>
      </div>
      <PostCardList 
        data={allPosts}
        handleTagClick={() => {}}
      />
    </section>
  )
}
export default Feed