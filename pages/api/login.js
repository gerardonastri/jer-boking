import dbConnect from "../../util/mongo";
import User from '../../models/User'
import { useDispatch } from 'react-redux';
import bcrypt from 'bcrypt'


const handler = async (req,res) => {
  await dbConnect()
 // const dispatch = useDispatch();
    if(req.method === "POST"){
      const {email, password} = req.body;
      try {
          const user = await User.findOne({email});
          if(!user) return res.status(404).json('User does not exist')
          const isPassowrdCorrect = await bcrypt.compare(password, user.password)
          if(!isPassowrdCorrect) return res.status(404).json('Invalid Credentials');
          res.status(200).json(user)
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
}

export default handler