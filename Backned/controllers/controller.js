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








let saveOption;
let saveCollege;
let savePropertyType;

export const Storing = (req, res, next) => {
  try {
    console.log('Storing function reached!');
    const { searchOption, searchCollege } = req.body;
    console.log('Received data in Storing:', req.body);  // Add this line
    saveOption = searchOption;
    saveCollege = searchCollege;
    next();
  } catch (error) {
    console.error('Error setting global variables:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};


export const StoreIt = (req, res, next) => {
  try {
    const { searchOption, searchCollege, savePropertyType: propertyType } = req.body;
    console.log('Received data in StoreIt:', req.body);
    saveOption = searchOption;
    saveCollege = searchCollege;
    // Use the variable 'propertyType' instead of 'savePropertyType'
    savePropertyType = propertyType;
    next();
  } catch (error) {
    console.error('Error setting global variables:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};



// export const Searching = async (req, res) => {
//   try {
//     let searchQuery = {};

//     console.log(saveCollege);
//     console.log(saveOption);
//     if (saveOption === 'option1') {
//       // Search by exact college name
//       searchQuery = { college: { $in: [saveCollege] } };
//     } else {
//       searchQuery = { area: { $in: [saveCollege] } };
//     }

//     let filter = { owned: 'Room' };

//     // Check if propertyType is present in query parameters
//     if (req.query.share) {
//       filter.share = { $in: req.query.share };
//     }
//     if (req.query.hostelType) {
//       filter.hostelType = { $in: req.query.hostelType };
//     }
//     if (req.query.gender) {
//       filter.gender = { $in: req.query.gender };
//     }
//     if (req.query.semiFurnished) {
//       filter.semiFurnished = { $in: req.query.semiFurnished };
//     }
//     if (req.query.deposit) {
//       filter.deposit = { $in: req.query.deposit };
//     }

//     if (req.query.price) {
//       // Parse the price range and update the filter accordingly
//       switch (req.query.price) {
//         case '1000-2000':
//           filter.price = { $gte: 1000, $lt: 2000 };
//           break;
//         case '2000-3000':
//           filter.price = { $gte: 2000, $lt: 3000 };
//           break;
//         case '3000-5000':
//           filter.price = { $gte: 3000, $lt: 5000 };
//           break;
//         case 'More than 5000':
//           filter.price = { $gte: 5000 };
//           break;
//         default:
//           // Handle unknown price range or set a default behavior
//           break;
//       }
//     }

//     // Merge the searchQuery and filter objects
//     const mergedQuery = { ...searchQuery, ...filter };

//     const searchResults = await Room.find(mergedQuery);

//     if (!searchResults || searchResults.length === 0) {
//       return res.status(404).json({ message: "No stays found" });
//     }

//     const formattedSearchResults = searchResults.map(stay => ({
//       // Map the properties you need for the frontend
//       price: stay.price,
//       address: stay.address,
//       experience: stay.experience,
//       share: stay.share,
//       sharing: stay.sharing,
//       semiFurnished: stay.semiFurnished,
//       gender: stay.gender,
//       name: stay.name,
//       hostelType: stay.hostelType,
//       // Add other properties as needed
//     }));
//     console.log(formattedSearchResults);
//     return res.status(200).json({ stays: formattedSearchResults });
//   } catch (error) {
//     console.error('Error handling search:', error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// };

export const Searching = async (req, res) => {
  try {
    let searchQuery = {};
    // Check if saveCollege and saveOption are defined
    if (!saveCollege || !saveOption) {
      return res.status(400).json({ message: "Missing search parameters" });
    }
    if (saveOption === 'option1') {
      // Search by exact college name
      searchQuery = { college: { $in: [saveCollege] } };
    } else {
      const areaRegex = new RegExp(saveCollege, 'i');
      const addressRegex = new RegExp(saveCollege, 'i');
      searchQuery = {
        $or: [
          { area: { $elemMatch: { $regex: areaRegex } } },
          { address: { $regex: addressRegex } },
        ],
      };
    }

    const searchResults = await Room.find(searchQuery);

    if (!searchResults || searchResults.length === 0) {
      return res.status(404).json({ message: "No stays found" });
    }

    let filter;
    if (savePropertyType === 'Room') {
      filter = { owned: 'Room' };
    } else {
      filter = { owned: 'Hostel' };
    }
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

    // Apply filters to the search results
    const filteredResults = searchResults.filter(stay => {
      if (
        (!filter.share || filter.share.$in.includes(stay.share)) &&
        (!filter.hostelType || filter.hostelType.$in.includes(stay.hostelType)) &&
        (!filter.gender || filter.gender.$in.includes(stay.gender)) &&
        (!filter.semiFurnished || filter.semiFurnished.$in.includes(stay.semiFurnished)) &&
        (!filter.deposit || filter.deposit.$in.includes(stay.deposit)) &&
        (!filter.price || (stay.price >= filter.price.$gte && stay.price < filter.price.$lt))
      ) {
        return true;
      }
      return false;
    });

    if (filteredResults.length === 0) {
      return res.status(404).json({ message: "No stays found after filtering" });
    }

    const formattedSearchResults = filteredResults.map(stay => ({
      // Map the properties you need for the frontend
      price: stay.price,
      address: stay.address,
      experience: stay.experience,
      share: stay.share,
      sharing: stay.sharing,
      semiFurnished: stay.semiFurnished,
      gender: stay.gender,
      name: stay.name,
      hostelType: stay.hostelType,
      // Add other properties as needed
    }));

    return res.status(200).json({ stays: formattedSearchResults });
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

