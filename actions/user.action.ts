import dbInit from "@/dbconfig"
import userModel from "@/model";


export const addUser = async (user:any) =>{
    try {
        await dbInit();
        const newUser = await userModel.create(user);
        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        console.log(error)
    }
}