import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    picture: String,
    availability: String,
    price: Number,
    
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;