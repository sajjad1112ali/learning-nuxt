import mongoose, { ConnectOptions } from 'mongoose';
interface Post {
    title: string;
    content: string;
    // Other fields...
  }
  
  // Create a Mongoose schema for posts
  const postSchema = new mongoose.Schema<Post>({
    title: String,
    content: String,
    // Other fields...
  });
  const PostModel = mongoose.model<Post>('Post', postSchema);

export default defineEventHandler(async (event) => {
    const postDD: Post = {
        title: 'this is testing title',
        content: 'this is testing content'
    } 
    const newPost = new PostModel(postDD);

    // Save the post to the database
    await newPost.save();
    return {
      hello: 'world',
      postDD,
    }
  })