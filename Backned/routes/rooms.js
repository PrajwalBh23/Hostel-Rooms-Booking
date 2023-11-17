import express from 'express';
// import { getAllRooms, addRooms, updateRoom, delectRoom } from '../controllers/controller.js';
import { getAllRooms, getAllHostels,Seaching, addRooms } from '../controllers/controller.js'; 

const router = express.Router();

router.get("/rooms", getAllRooms);
router.get("/hostels", getAllHostels);
router.post('/search',Seaching);
router.post("/", addRooms)
// router.get("/:id", getbyID)
// router.put('/:id', updateRoom)
// router.delete('/:id', delectRoom)

export default router;