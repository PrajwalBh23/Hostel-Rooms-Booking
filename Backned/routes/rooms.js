import express from 'express';
import { getAllHotels, addHotels, updateHotel, delectHotel } from '../controllers/controller.js'; 

const router = express.Router();

router.get("/", getAllHotels);
router.post("/", addHotels)
// router.get("/:id", getbyID)
router.put('/:id', updateHotel)
router.delete('/:id', delectHotel)

export default router; 