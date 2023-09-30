import Hotel from '../model/Owner.js';
import jwt from 'jsonwebtoken';

export const getAllHotels = async (req, res, next) => {
    let hotels;
    try {
        hotels = await Hotel.find();
    } catch (err) {
        console.log(err);
        res.send("Hello Guys")
    }

    if (!hotels) {
        return res.status(404).json({ message: "No message found" });
    }
    return res.status(200).json({ hotels });
}

export const addHotels = async (req, res) => {
    const NewHotel = new Hotel(req.body)
    try {
        const savedHotel = await NewHotel.save()
        res.status(200).json(savedHotel);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const updateHotel = async (req, res) => {

    try {
        const UpdateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json(UpdateHotel);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const delectHotel = async (req, res) => {

    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel is delect");
    } catch (error) {
        res.status(500).json({error: error});
    }
}

