import dbConnect from "../../../util/mongo";
import Hotel from '../../../models/Hotel'


const handler = async (req,res) => {
  await dbConnect()
 // const dispatch = useDispatch();
 if(req.method === "GET"){
    try {
      const hotelCount = await Hotel.countDocuments({ type: "hotel" });
      const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
      const resortCount = await Hotel.countDocuments({ type: "resort" });
      const villaCount = await Hotel.countDocuments({ type: "villa" });
      const cabinCount = await Hotel.countDocuments({ type: "cabin" });

      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message)
    }
  }
    
}

export default handler