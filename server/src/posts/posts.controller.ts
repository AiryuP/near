import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostDto,UpdataPutDto } from './posts.Dto'
import { PostModel } from './posts.model';
import { ResultObject } from '../result/result.object'

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    @Get()
    @ApiOperation({summary: '帖子列表'})
    async index(){
        const result = await PostModel.find()
        if( result != null ){
            return new ResultObject( 200 , '查询成功' , result)
        }else if( result === null){
            return new ResultObject( 200 , '查询成功' , result)
        }else{
            return new ResultObject( 500 , '查询成功' , result)
        }
    }

    @Post()
    @ApiOperation({summary: '创建帖子'})
    async create(@Body() createPostDto:CreatePostDto ){
        await PostModel.create(createPostDto)
        return {
            success: true
        }
    }

    @Get(':id')
    @ApiOperation({summary: '帖子详情'})
    async detail(@Param('id') id: string){
        return await PostModel.findById(id)
    }

    @Put(':id')
    @ApiOperation({summary: '修改帖子'})
    updata(@Param('id') id: string,@Body() body: UpdataPutDto){
        return {

        }
    }

    @Delete(':id')
    @ApiOperation({summary: '删除帖子'})
    async remove(@Param() id: string){
        await PostModel.findByIdAndRemove(id)
        return {

        }
    }
}
