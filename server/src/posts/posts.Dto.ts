import { ApiProperty } from "@nestjs/swagger"

/**
 * 创建帖子实体类
 */
export class CreatePostDto {

    @ApiProperty({description: '帖子标题',example: '帖子标题'})
    title: string

    @ApiProperty({description: '帖子内容',example: '帖子内容'})
    content: string

}

export class UpdataPutDto {
    @ApiProperty({description: '帖子标题'})
    title: string

    @ApiProperty({description: '帖子内容'})
    content: string
}