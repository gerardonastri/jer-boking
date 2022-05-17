import { axiosReq } from "../../util/apiCalls";
import {loginFailure, loginStart, loginSuccess} from './actions'

export const login = async (user, dispatch) => {
    dispatch(loginStart())
    try {
        const {data} = await axiosReq.post("login", {
            email: user.email,
            password: user.password
        });
       dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(loginFailure())
    }
}