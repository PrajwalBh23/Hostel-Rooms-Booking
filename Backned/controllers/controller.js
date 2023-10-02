import Room from '../model/Owner.js';
// import jwt from 'jsonwebtoken';

export const getAllRooms = async (req, res, next) => {
    let rooms;
    try {
        rooms = await Room.find();
    } catch (err) {
        console.log(err);
        res.send("Hello Guys")
    }

    if (!rooms) {
        return res.status(404).json({ message: "No message found" });
    }
    return res.status(200).json({ rooms });
}

export const addRooms = async (req, res) => {
    const NewRoom = new Room(req.body)
    try {
        const savedRoom = await NewRoom.save()
        res.status(200).json(savedRoom);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const updateRoom = async (req, res) => {

    try {
        const UpdateRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json(UpdateRoom);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const delectRoom = async (req, res) => {

    try {
        await Room.findByIdAndDelete(req.params.id)
        res.status(200).json("Room is delect");
    } catch (error) {
        res.status(500).json({error: error});
    }
}

