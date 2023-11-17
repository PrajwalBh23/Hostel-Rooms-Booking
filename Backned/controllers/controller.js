import Room from '../model/Adding.js';
// import jwt from 'jsonwebtoken';

// Update your getAllRooms function
export const getAllRooms = async (req, res, next) => {
  try {
    let filter = { owned: { $in: ['Room', 'Flat'] } };

    // Check if propertyType is present in query parameters
    if (req.query.share) {
      filter.share = { $in: req.query.share };
    }
    if (req.query.gender) {
      filter.gender = { $in: req.query.gender };
    }
    if (req.query.semiFurnished) {
      filter.semiFurnished = { $in: req.query.semiFurnished };
    }
    if (req.query.deposit) {
      filter.deposit = { $in: req.query.deposit };
    }

    if (req.query.price) {
      // Parse the price range and update the filter accordingly
      switch (req.query.price) {
        case '1000-2000':
          filter.price = { $gte: 1000, $lt: 2000 };
          break;
        case '2000-3000':
          filter.price = { $gte: 2000, $lt: 3000 };
          break;
        case '3000-5000':
          filter.price = { $gte: 3000, $lt: 5000 };
          break;
        case 'More than 5000':
          filter.price = { $gte: 5000 };
          break;
        default:
          // Handle unknown price range or set a default behavior
          break;
      }
    }

    const rooms = await Room.find(filter);

    if (!rooms || rooms.length === 0) {
      return res.status(404).json({ message: "No rooms found" });
    }

    const formattedRooms = rooms.map(room => ({
      price: room.price,
      address: room.address,
      experience: room.experience,
      share: room.share,
      sharing: room.sharing,
      semiFurnished: room.semiFurnished,
      gender: room.gender,
      name: room.name,
      // Add other properties as needed
    }));

    return res.status(200).json({ rooms: formattedRooms });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};



export const getAllHostels = async (req, res, next) => {
  try {
    let filter = { owned: 'Hostel' };

    // Check if propertyType is present in query parameters
    if (req.query.share) {
      filter.share = { $in: req.query.share };
    }
    if (req.query.hostelType) {
      filter.hostelType = { $in: req.query.hostelType };
    }
    if (req.query.gender) {
      filter.gender = { $in: req.query.gender };
    }
    if (req.query.semiFurnished) {
      filter.semiFurnished = { $in: req.query.semiFurnished };
    }
    if (req.query.deposit) {
      filter.deposit = { $in: req.query.deposit };
    }

    if (req.query.price) {
      // Parse the price range and update the filter accordingly
      switch (req.query.price) {
        case '1000-2000':
          filter.price = { $gte: 1000, $lt: 2000 };
          break;
        case '2000-3000':
          filter.price = { $gte: 2000, $lt: 3000 };
          break;
        case '3000-5000':
          filter.price = { $gte: 3000, $lt: 5000 };
          break;
        case 'More than 5000':
          filter.price = { $gte: 5000 };
          break;
        default:
          // Handle unknown price range or set a default behavior
          break;
      }
    }

    const hostels = await Room.find(filter);

    if (!hostels) {
      return res.status(404).json({ message: "No hostels found" });
    }

    const formattedHostels = hostels.map(hostel => ({
      price: hostel.price,
      address: hostel.address,
      experience: hostel.experience,
      share: hostel.share,
      sharing: hostel.sharing,
      semiFurnished: hostel.semiFurnished,
      gender: hostel.gender,
      name: hostel.name,
      hostelType: hostel.hostelType,
      // Add other properties as needed
    }));

    if (formattedHostels.length === 0) {
      return res.status(404).json({ message: "No hostels found" });
    }

    return res.status(200).json({ hostels: formattedHostels });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};



export const Seaching = async (req, res) => {
  try {
    const { searchOption, searchCollege } = req.body;

    // Customize the logic based on your requirements
    // For example, you might want to search for rooms that match the specified college

    let searchQuery = {};

    if (searchOption === 'option1') {
      // Search by college name
      searchQuery = { college: { $regex: new RegExp(searchCollege, 'i') } };
    } else {
      // Customize the logic for searching by area
      // You can add similar logic based on your requirements
    }

    const searchResults = await Room.find(searchQuery);

    res.status(200).json({ success: true, data: searchResults });
  } catch (error) {
    console.error('Error handling search:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

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

