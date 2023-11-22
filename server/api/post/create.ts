import mongoose, { ConnectOptions } from 'mongoose';
main().catch(err => console.log(err));
console.log(`CONNECTED TO MONGODB`)

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/testingDD');
  console.log(`CONNECTED TO MONGODB`)
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
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