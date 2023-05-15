'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

import PostCard from "./PostCard";

const PostCardList = ({ data, handleTagClick }) => {

  return (
    <div className=" mx-5 my-10 md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  const filterPosts = (searchText) => {
    const regex = new RegExp(searchText, "i");
    return allPosts.filter(
      (post) =>
        regex.test(post.creator.username) ||
        regex.test(post.tag) ||
        regex.test(post.rec)
    )
  }
  
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPosts(e.target.value);
        setSearchResults(searchResult);
      }, 500)
    )
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
          className="text-xl text-primary-t border-primary-b border-4 rounded-md p-2 w-94 focus:outline-none"
        />
      </form>
      <Link href="/create-post" className='button-primary'>Create Post</Link>
      </div>

        {searchText &&
        <PostCardList 
          data={searchResults}
        />
        }
    
        {!searchText &&
        <PostCardList 
          data={allPosts}
          handleTagClick={() => {}}
        />
      }
    </section>
  )
}
export default Feed