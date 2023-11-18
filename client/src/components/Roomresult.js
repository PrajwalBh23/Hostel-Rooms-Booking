export const Searching = async (req, res) => {
    try {
      let searchQuery = {};
  
      console.log(saveCollege);
      console.log(saveOption);
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
  
      let filter = { owned: 'Room' };
  
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