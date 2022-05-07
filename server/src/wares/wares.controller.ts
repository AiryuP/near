import { Controller, Get, Post, Body} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResultObject } from 'src/result/result.object';
import { addWares } from './dto/wares.Dto';
import { WaresService } from './wares.service';

@Controller('wares')
@ApiTags('商品')
export class WaresController {
  constructor(private readonly waresService: WaresService) {}

  @Get()
  @ApiOperation({summary: '获取商品'})
  async getWares(): Promise<ResultObject>{

    let res = await this.waresService.getWaresList()
    
    return new ResultObject( 200 ,'查询成功',res)

  }

  @Post()
  @ApiOperation({summary: '新增'})
  async addList(@Body() body: addWares): Promise<ResultObject>{

    let result = this.waresService.addWaresList(body)

    if( result ){
      return new ResultObject( 200 ,'添加成功', {success: true} )
    }else{
      return new ResultObject( 500 ,'添加失败', {success: false} )
    }

  }



}
