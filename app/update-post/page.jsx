'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form';
import Profile from '@components/Profile';

const UpdatePost = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const postId = searchParams.get('id');

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    rec: '',
    tag: ''
  });

  useEffect(() => {
    const getPostDetails = async () => {
      const response = await fetch(`/api/post/${postId}`);
      const data = await response.json();
    
      setPost({
        rec: data.rec,
        tag: data.tag
      })
    }

    if(postId) {
      getPostDetails();
    }
  }, [postId]);

  // const createPost = async (e) => {
  //   e.preventDefault();
  //   setSubmitting(true);

  //   try {
  //     const response = await fetch('/api/post/new', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         rec: post.rec,
  //         userId: session?.user.id,
  //         tag: post.tag
  //       })
  //     })

  //     if(response.ok) {
  //       router.push('/');
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // }

  return (
    <div>
    <Form 
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={() => {}}
    />
    </div>
  )
}
export default UpdatePost