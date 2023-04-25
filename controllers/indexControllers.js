const User = require('../models/userModel')

// /home route
exports.homepage = async (req,res,next)=>{
  try {
    const userfil = await User.find({  car: { $in: ["BMW","Mercedes-Benz"] } ,// Filter by carBrand
     $expr: {
        $lt: [ // $expr to compare string as number
          {
            $toDouble: {
              $substr: [ // Extract numerical part of income field
                "$income",
                1, // Start at index 1 to skip currency symbol
                -1 // Use negative value for length to extract until end of string
              ]
            }
          },
          5 // Compare with 5
        ]
      },
    
    })
    console.log(userfil)
    res.status(200).json({message : 'all users', userfil})
  } catch (error) {
    console.log(error)
    res.status(500).json({message: error})
  }
}

// /phone route
exports.phonepage = async (req,res,next)=>{
    try {
        const malephone = await User.find({ 
            gender: 'Male', // Filter by gender
            $expr: {
                $gt: [{ $toInt: "$phone_price" }, 10000] // Convert phonePrice to integer and filter by greater than 10000
              }
            
        })
        // console.log(malephone)
        res.status(200).json({message : 'male phoneprice users', malephone})
      } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
      }
}

// /last route
exports.lastname = async (req,res,next)=>{
    try {
        const lastnames = await User.find({
            last_name: /^M/, // Filter by last name that starts with "M"
    $expr: {
      $gt: [
        { $strLenCP: "$quote" }, // Get the character length of the "quote" field
        15 // Filter by greater than 15
      ]
    },
    email: { $regex: new RegExp('.*' + 'M' + '.*@.*', 'i') } // Filter by email that includes last name (first character "M" or last name)// Filter by email that includes last name (first character "M" or last name)
        })
        res.status(200).json({message : 'lastname M users' , lastnames})
    } catch (err) {
        console.log(err)
        res.status(500).json({message : err})
    }
}

// /carmail route
exports.carbrand = async (req,res,next)=>{
    try {
        const carbrands = await User.find({
            car: { $in: ["BMW", "Mercedes-Benz", "Audi"] }, // Filter by car brand (BMW, Mercedes, or Audi)
            email: { $not: /\d/ } // Filter by email that does not include any digits
        })
        console.log(carbrands)
        res.status(200).json({message : 'BMW AUDI MERC carbrand' , carbrands})
    } catch (err) {
        console.log(err)
        res.status(500).json({message : err})
    }
}


exports.topcities = async (req,res,next)=>{
    try {
        // Fetch all users
const users = await User.find({});

// Group users by city
const groupedByCity = {};
users.forEach(user => {
  if (!groupedByCity[user.city]) {
    groupedByCity[user.city] = [];
  }
  groupedByCity[user.city].push(user);
});

// Calculate average income for each city
const cities = [];
for (const city in groupedByCity) {
  const cityUsers = groupedByCity[city];
  const totalIncome = cityUsers.reduce((sum, user) => {
    const income = parseFloat(user.income.replace(/[^0-9.-]+/g,"")); // Remove currency symbol before parsing
    if (!isNaN(income)) { // Check if income is a valid number
      return sum + income;
    }
    console.log(`Invalid income value for user ${user._id}: ${user.income}`); // Debug statement
    return sum; // Skip user if income is not a valid number
  }, 0);
  const averageIncome = totalIncome / cityUsers.length || 0; // Use 0 as default if cityUsers.length is 0
  cities.push({ city, cityUsers: cityUsers.length, averageIncome });
}

// Sort cities by user count in descending order
cities.sort((a, b) => b.cityUsers - a.cityUsers);

// Fetch top 10 cities with highest user count
const top10Cities = cities.slice(0, 10);

console.log(top10Cities);

res.status(200).json({message : 'top10 city',top10Cities})

    } catch (err) {
        console.log(err)
        res.status(500).json({message : err})
    }
}
