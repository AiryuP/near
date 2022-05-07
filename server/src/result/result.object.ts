/**
 * 通用返回结果封装
 */
 export class ResultObject {

    code: number;       // 结果编码
    msg: string;        // 结果信息
    data: any;          // 结果数据类型

    constructor(code: number,  msg: string, data: any) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
}