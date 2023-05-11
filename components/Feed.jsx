'use client';

import { useState, useEffect } from "react";

import PostCard from "./PostCard";

const PostCardList = ({ data, handleTagClick }) => {
  return (
    <div>
      {data.map((post) => (
        <PostCard
          key={post._id}
          data={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState("");

  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/post');
      const data = await response.json();

      setPosts(data);
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
        data={[posts]}
        handleTagClick={() => {}}
      />
    </section>
  )
}
export default Feed