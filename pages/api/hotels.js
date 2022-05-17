import dbConnect from "../../util/mongo";
import Hotel from '../../models/Hotel'


const handler = async (req,res) => {
  await dbConnect()
 // const dispatch = useDispatch();
    if(req.method === "GET"){
      const {min, max, city} = req.query
    try {
      const hotels = await Hotel.find({city, cheapestPrice: {$gt: min || 1, $lt: max || 999}})
      res.status(200).json(hotels)
    } catch (error) {
      res.status(500).json(error.message)
    }
    }
    if(req.method === "POST"){
        const hotel = new Hotel(req.body)
      try {
         const savedHotel = await hotel.save();
        res.status(200).json(savedHotel)
      } catch (error) {
        res.status(500).json(error.message)
      }
    }
    
}

export default handler