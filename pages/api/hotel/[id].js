import dbConnect from "../../../util/mongo";
import Hotel from '../../../models/Hotel'


const handler = async (req,res) => {
  await dbConnect()
 // const dispatch = useDispatch();
    if(req.method === "GET"){
        const {id} = req.query
    try {
      const hotel = await Hotel.findById(id)
      res.status(200).json(hotel)
    } catch (error) {
      console.log(error);
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
    if(req.method === "PUT"){
      const id = req.query.id
    try {
       const savedHotel = await Hotel.findByIdAndUpdate(id, req.body)
      res.status(200).json(savedHotel)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
    
}

export default handler