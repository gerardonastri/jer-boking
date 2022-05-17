import dbConnect from "../../../util/mongo";
import Hotel from '../../../models/Hotel'


const handler = async (req,res) => {
  await dbConnect()
 // const dispatch = useDispatch();
    if(req.method === "GET"){
        const cities = req.query.cities.split(',')
    try {
      const list = await Promise.all(cities.map((city) => {
          return Hotel.countDocuments({city: city})
      }))
      res.status(200).json(list)
    } catch (error) {
      res.status(500).json(error.message)
    }
    }
    
}

export default handler