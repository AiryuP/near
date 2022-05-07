import { ApiProperty } from "@nestjs/swagger";

/**
 * 商品实体类
 */
export class Wares {
    @ApiProperty({description: '名称'})
    waresName: string

    @ApiProperty({description: '价格'})
    price: number
    
    // @ApiProperty({description: '标题'})
    // title: string
    
    @ApiProperty({description: '数量'})
    num: number

    @ApiProperty({description: '类别'})
    category: string

    @ApiProperty({description: '描述'})
    describe: string
}

export class addWares extends Wares {
    @ApiProperty({description: '名称'})
    waresName: string

    @ApiProperty({description: '价格'})
    price: number
    
    @ApiProperty({description: '类别'})
    category: string
    
    @ApiProperty({description: '描述'})
    describe: string
}