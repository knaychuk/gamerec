'use client';

import { useState, useEffect } from "react";

import PostCard from "./PostCard";

const PostCardList = ({ data, handleTagClick }) => {


  return (
    <div>
      {/* {data.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))} */}
      {data.map((post) => (
        <PostCard 
          post={post}
        />
      ))}
    </div>
  );
};


const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [allPosts, setAllPosts] = useState("");

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
    <section>
      <form>
        <input 
          type="text"
          placeholder="search for tag"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>
      <PostCardList 
        data={allPosts}
        handleTagClick={() => {}}
      />
    </section>
  )
}
export default Feed