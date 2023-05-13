import Post from "@models/post";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const post = await Post.findById(params.id).populate('creator');

        if(!post) {
          return new Response("Prompt not found", { status: 404 })
        }      
        return new Response(JSON.stringify(post), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 

export const PATCH = async (request, { params }) => {
  const { rec, tag } = await request.json();

  try {
    await connectToDB();
    const existingPost = await Post.findById(params.id);   

    if(!existingPost) {
      return new Response("Prompt not found", { status: 404 });
    }

    existingPost.rec = rec;
    existingPost.tag = tag;

    await existingPost.save();

    return new Response(JSON.stringify(existingPost), { status: 200 });
  } catch (error) {
    return new Response("Failed to update prompt", { status: 500 });
  }
}

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await Post.findByIdAndRemove(params.id);

    return new Response("Prompt deleted", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete prompt", { status: 500 });
  }
}