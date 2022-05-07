import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/user/user.model';
import { LoginUserDto } from './dto/login.Dto';
import { User } from './login.model';

@Injectable()
export class LoginService {
    /**
     * 1. 拿到body中的用户信息，与数据库中的用户进行比对
     * 2. 如果正确的话，返回token
     * 3. 错误的话，提示
     */
    /**
     * login 登录
     */
    public async login( user: LoginUserDto ) {
        // let flag: Boolean = false;
        // let que = UserModel.findOne({ userName: user.userName })
        return UserModel.findOne({ userName: user.userName })
        // return await que.exec(function (err, docs) {
        //     if( docs != null && docs != undefined  ){
        //         console.log(docs)
        //         console.log(docs.passWord)
        //         console.log(user.passWord)
        //         if( docs.passWord === user.passWord ){
        //             console.log('正确')
        //             flag = true
        //         }else {
        //             console.log('错误')
        //             flag = false
        //         }
        //     }else{
        //         flag = false
        //     }
        //     console.log('flag')
        //     console.log(flag)
        //     return flag
        // });
    }

}
