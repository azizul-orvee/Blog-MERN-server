import express from 'express';
import { getPosts, createPost, getTenPosts, getPostById, deleteJobById } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts );
router.get('/tenPosts', getTenPosts)
router.get('/:id', getPostById)
router.delete('/:id', deleteJobById)



router.post('/', createPost);




export default router;
