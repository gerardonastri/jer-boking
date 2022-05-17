import dbConnect from "../../util/mongo";
import Room from '../../models/Room'
import Hotel from '../../models/Hotel'



const handler = async (req,res) => {
  await dbConnect()
 // const dispatch = useDispatch();
    if(req.method === "GET"){
      try {
        const rooms = await Room.find()
        res.status(200).json(rooms)
      } catch (error) {
        res.status(500).json(error.message)
      }
      }
    if(req.method === "POST"){
        const room = new Room(req.body)
        const {hotelId} = req.query
      try {
         const savedRoom = await room.save();
         await Hotel.findByIdAndUpdate(hotelId, {
            $push: {rooms: savedRoom._id}
         })
        res.status(200).json(savedRoom)
      } catch (error) {
        res.status(500).json(error.message)
        console.log(error);
      }
    }
    
}

export default handler