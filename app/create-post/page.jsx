'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';
import Profile from '@components/Profile';

const CreatePost = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    rec: '',
    tag: ''
  });

  const createPost = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/post/new', {
        method: 'POST',
        body: JSON.stringify({
          rec: post.rec,
          userId: session?.user.id,
          tag: post.tag
        })
      })

      if(response.ok) {
        router.push('/');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
    <Form 
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPost}
    />

    </div>
  )
}
export default CreatePost