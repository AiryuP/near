import { Injectable } from '@nestjs/common';
import { addWares, Wares } from './dto/wares.Dto'
import { WaresModel } from './wares.model';

@Injectable()
export class WaresService {
    /**
     * 查询
     */
    public getWaresList():Promise < Wares [] > {

        return WaresModel.find().then((res)=>{
            return res
        })
        .catch(err=>{
            return null
        })

    }

    /**
     * 新增商品
     */
    public addWaresList( obj:addWares ):Promise<boolean>{
        return WaresModel.create(obj).then((res)=>{
            console.log(res)
            return true
        })
        .catch((err)=>{
            return false
        })
    }

}
