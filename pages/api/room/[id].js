import dbConnect from "../../../util/mongo";
import Room from '../../../models/Room'


const handler = async (req,res) => {
  await dbConnect()
 // const dispatch = useDispatch();
    if(req.method === "GET"){
        const {id} = req.query
    try {
      const room = await Room.findById(id)
      res.status(200).json(room)
    } catch (error) {
      res.status(500).json(error.message)
    }
    }
    if(req.method === "POST"){
        const hotel = new Room(req.body)
      try {
         const savedHotel = await hotel.save();
        res.status(200).json(savedHotel)
      } catch (error) {
        res.status(500).json(error.message)
      }
    }
    
}

export default handler