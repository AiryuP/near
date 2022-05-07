import { ApiProperty } from '@nestjs/swagger'
/**
 * 创建用户实体类
 */
 export class LoginUserDto {

    @ApiProperty({description: '用户名称',example: 'userName'})
    userName: string

    @ApiProperty({description: '用户密码',example: 'password'})
    passWord: string

}