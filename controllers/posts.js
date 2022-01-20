import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
    console.log(postMessages.length);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getPostById = async (req, res) => {
  console.log(req.params)
  const {id} =req.params
  try {
    const postMessages = await PostMessage.find({"_id":id});
    res.status(200).json(postMessages);
    console.log(postMessages.length);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getTenPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find().limit(30);
    res.status(200).json(postMessages);
    console.log(postMessages.length);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
    console.log('Data Added');
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const deleteJobById = async (req, res) => {
  const {id} =req.params
  try {
    const postMessages = await PostMessage.deleteOne({"_id":id});
    res.status(202).json(postMessages);
    console.log(postMessages.length);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}