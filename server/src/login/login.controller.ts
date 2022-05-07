import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResultObject } from 'src/result/result.object';
import { LoginUserDto } from './dto/login.Dto';
import { LoginService } from './login.service';

@Controller('login')
@ApiTags('登录')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  @Post()
  @ApiOperation({summary: '登录'})
  async account( @Body() body: LoginUserDto ){
    let flag: Boolean = false;
    let result = await this.loginService.login( body )
    if( result != null && result != undefined  ){
        if( result.passWord === body.passWord ){
          console.log('body')
            flag = true
        }else {
            flag = false
        }
    }else{
        flag = false
    }
    if( flag ){
      let obj: Object;
      obj = {
        success: true,
        role: 'admin',
        authority: 'admin',
        user: result
      }
      return new ResultObject(200, '登陆成功', obj)
    }else{
       return new ResultObject(500, '用户名或密码错误', {success: false})
    }

  }


  
}
