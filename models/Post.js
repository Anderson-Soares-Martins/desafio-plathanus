import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  title: {
    /* The title */

    type: String,
    required: [true, 'Please provide a title for this Post.'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  text: {
    /* The text post */

    type:String,
    required: [true, 'Please provide a text.']
  },
  author: {
    /* The author */

    type: String,
    required: [true, 'Please provide a author.']
  }

})

export default mongoose.models.Post || mongoose.model('Post', PostSchema)