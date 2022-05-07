import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto, UpdataUserDto} from './dto/user.Dto'
import { ResultObject } from 'src/result/result.object';

@Controller('user')
@ApiTags('用户')
export class UserController {
  constructor(private readonly userService: UserService) {}

  
  @Get()
  @ApiOperation({summary: '查询全部'})
  async index(){
    const result = await this.userService.getAllUser()
    let data = null;
    if( result != null ){
      data = new ResultObject(200, '查询成功', result);
    }else{
      data =  new ResultObject(500, '查询失败', result);
    }
    return data
  }

  @Post()
  @ApiOperation({summary: '新增'})
  async create(@Body() createPostDto: CreateUserDto ): Promise<ResultObject> {
      const result = await this.userService.createUser( createPostDto )

      if( result === 1){
        return new ResultObject(200, '新建用户成功', 'success');
      }else {
        return new ResultObject(500, '新建用户失败', 'err');
      }
  }

  @Get(':id')
  @ApiOperation({summary: '查详情'})
  async detail(@Param('id') id: string){
    
  }

  @Put(':id')
  @ApiOperation({summary: '修改'})
  updata(@Param('id') id: string,@Body() body: UpdataUserDto){
      return {

      }
  }

  @Delete(':id')
  @ApiOperation({summary: '删除'})
  async remove(@Param() id: string){
      return {

      }
  }
}
