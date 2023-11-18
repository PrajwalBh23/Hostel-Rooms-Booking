import express from 'express';
// import { getAllRooms, addRooms, updateRoom, delectRoom } from '../controllers/controller.js';
import { getAllRooms, getAllHostels, Storing, StoreIt, Searching, addRooms } from '../controllers/controller.js'; 

const router = express.Router();

router.get("/rooms", getAllRooms);
router.get("/hostels", getAllHostels);
router.post('/store', Storing);
router.post('/storeit', StoreIt);
router.get('/show', Searching);
router.post("/", addRooms)
// router.get("/:id", getbyID)
// router.put('/:id', updateRoom)
// router.delete('/:id', delectRoom)

export default router;