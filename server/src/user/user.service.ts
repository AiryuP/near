import { Injectable } from '@nestjs/common';
import { User,CreateUserDto } from './dto/user.Dto';
import { UserModel } from './user.model'

@Injectable()
export class UserService {

    /**
     * 查询全部
     */
    public getAllUser(): Promise< User[] > {
        return UserModel.find().then(res=>{
            return res
        })
        .catch(err=>{
            return null
        })
    }

    /**
     * 新建user
     */
    public createUser( user: CreateUserDto ): Promise< number > {
        
        return UserModel.create(user).then((res)=>{
            return 1
        })
        .catch((err)=>{
            return 0
        })
    }

    /**
     * 密码加密
     */    
    private hashPassword( password: string ):string {
        return ' '
    }




}
