import mongoose from 'mongoose';
const blogSchema = new mongoose.Schema({
    id: String,
    poster: String,
    title: String,
    description: String,
    contente: String,
    Category: String,
}, { timestamps: true });
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
export default Blog;