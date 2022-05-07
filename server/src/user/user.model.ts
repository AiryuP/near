import { getModelForClass, prop } from "@typegoose/typegoose"

export class User {
    @prop()
    userName: string 

    @prop()
    passWord: string 
    
    @prop()
    age: number 
    
    @prop()
    sex: string 
}

export const UserModel = getModelForClass(User) 