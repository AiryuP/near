import { ApiProperty } from "@nestjs/swagger"

/**
 * 用户实体类
 */
export class User {
    @ApiProperty({description: '用户名称'})
    userName: string

    @ApiProperty({description: '用户密码'})
    passWord: string

    @ApiProperty({description: '用户年龄'})
    age: number
    
    @ApiProperty({description: '用户性别'})
    sex: number
}

/**
 * 创建用户实体类
 */
export class CreateUserDto extends User{

    @ApiProperty({description: '用户名称',example: 'userName'})
    userName: string

    @ApiProperty({description: '用户密码',example: 'password'})
    passWord: string

}
/**
 * 更新用户实体类
 */
export class UpdataUserDto {
    @ApiProperty({description: '用户名称'})
    userName: string

    @ApiProperty({description: '用户密码'})
    passWord: string

    @ApiProperty({description: '用户年龄'})
    age: number
    
    @ApiProperty({description: '用户性别'})
    sex: number
    
}
