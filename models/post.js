import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  rec: {
    type: String,
    required: [true, 'Game Recommendation is required'],
  },
  tag: {
    type: String,
        required: [true, 'Tag is required'],
  }
});

const Post = models.Post || model('Post', PostSchema);

export default Post;