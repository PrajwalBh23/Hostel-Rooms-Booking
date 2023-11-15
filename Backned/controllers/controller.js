import Room from '../model/Adding.js';
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
    try {
      const {
        formData1,
        formData2,
        formData3,
        formData4,
        formData5,
        formData6,
      } = req.body;
  
      // Assuming that formData1, formData2, etc., match the Room schema
      const newRoom = new Room({
        ...formData1,
        ...formData2,
        ...formData3,
        ...formData4,
        ...formData5,
        ...formData6,
      });
  
      // Save the new room to the database
      const savedRoom = await newRoom.save();
  
      res.status(201).json(savedRoom);
    } catch (error) {
      console.error('Error during saving room data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

// export const updateRoom = async (req, res) => {

//     try {
//         const UpdateRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body})
//         res.status(200).json(UpdateRoom);
//     } catch (error) {
//         res.status(500).json({error: error});
//     }
// }

// export const delectRoom = async (req, res) => {

//     try {
//         await Room.findByIdAndDelete(req.params.id)
//         res.status(200).json("Room is delect");
//     } catch (error) {
//         res.status(500).json({error: error});
//     }
// }

