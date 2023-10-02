import express from 'express';
import { getAllRooms, addRooms, updateRoom, delectRoom } from '../controllers/controller.js'; 

const router = express.Router();

router.get("/", getAllRooms);
router.post("/", addRooms)
// router.get("/:id", getbyID)
router.put('/:id', updateRoom)
router.delete('/:id', delectRoom)

export default router; 