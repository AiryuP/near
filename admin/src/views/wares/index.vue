<!--  -->
<template>
<div class='container'>
    <Crumbs title="商品管理"></Crumbs>
    <SearchCard>
      <div class="iListBox">
        <div class="iListLable">商品名称</div>
        <div class="iListConent">
          <el-input v-model="waresName" placeholder="请输入商品名称"></el-input>
        </div>
      </div>
      <div>
        <el-button
          type="primary"
          icon="el-icon-search"
          size="small"
          >搜索</el-button
        >
        <el-button
          type="warning"
          size="small"
          icon="el-icon-refresh"
          >重置</el-button
        >
        <el-button
          type="success"
          size="small"
          @click="addVisible = true"
          icon="el-icon-plus"
          >增加</el-button
        >
      </div>
    </SearchCard>
    


        <div class="tabTitle">
            <div class="left">
                <div>列表</div>
                <!-- <div class="icon" @click="deleteSelected">
                    <i class="el-icon-delete"></i>
                </div> -->
            </div>
            <div class="right">
                <span>共计 <span style="padding: 0px 6px;color: #fff">{{total}}</span> 条</span>
                <span class="changePage" @click="topPage">上一页</span>
                <span style="color: #fff">{{ current }}</span>
                <span class="changePage" @click="nextPage">下一页</span>
            </div>
        </div>

        <div class="productMakeTab">
            <el-table
                :data="tableData"
                stripe
                @selection-change="handleSelectionChange"
                :header-cell-style="{'text-align':'center',background: '#06395B'}"
                :cell-style="{'text-align':'center'}"
                style="width: 100%">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <!-- <el-table-column
                type="index"
                label="序号">
                </el-table-column> -->
                <el-table-column
                prop="waresName"
                label="商品名称">
                </el-table-column>
                <el-table-column
                prop="price"
                label="商品价格">
                </el-table-column>

                
                <el-table-column
                prop="num"
                label="商品数量">
                </el-table-column>

                
                <el-table-column
                prop="category"
                label="商品类别">
                </el-table-column>

                
                <el-table-column
                prop="createTime"
                label="入库时间">
                </el-table-column>

                <!-- <el-table-column
                label="制作人">
                    <template>
                        <div>
                            气象局
                        </div>
                    </template>
                </el-table-column> -->
                
                <el-table-column
                    label="操作">
                    <template slot-scope="scope">
                        <!-- <div class="handleIconBox" title="产品制作并下载" ><i class="el-icon-edit-outline"  @click="make_this( scope.row )"></i></div> -->
                        <div class="handleIconBox" title="删除"><i class="el-icon-delete"  @click="del_this( scope.row.id )" ></i></div>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        
        <div>
            <!-- 增加 -->
            <el-dialog title="添加" @close='closeDialog' :close-on-click-modal='false' :visible.sync="addVisible">
                <div style="height: 300px;overflow: auto;">
                    <!-- :rules="rules" -->
                    <el-form :model="addform"  ref="addform" style="marginRight: 80px">
                        <el-form-item label="商品名称:"  prop="waresName" :label-width="formLabelWidth">
                            <el-input v-model="addform.waresName" ></el-input>
                        </el-form-item>
                        <el-form-item label="商品价格:" prop="price" :label-width="formLabelWidth">
                            <el-input  v-model="addform.price" type="number" ></el-input>
                        </el-form-item>
                        <el-form-item label="商品数量:" prop="num" :label-width="formLabelWidth">
                            <el-input  v-model="addform.num" type="number" ></el-input>
                        </el-form-item>
                        <el-form-item label="商品类别:" prop="category" :label-width="formLabelWidth">
                            <el-input  v-model="addform.category" ></el-input>
                        </el-form-item>
                        <el-form-item label="商品描述:" prop="describe" :label-width="formLabelWidth">
                            <el-input  v-model="addform.describe" ></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="addVisible = false">取 消</el-button>
                    <el-button type="primary" @click="submitAddForm()">确 定</el-button>
                </div>
            </el-dialog>

        </div>
    
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Crumbs from "../../components/crumbs";
import SearchCard from "../../components/SearchCard";

export default {
name: '',
//import引入的组件需要注入到对象中才能使用
components: {
    Crumbs,
    SearchCard
},
data() {
    //这里存放数据
    return {
        waresName: '',
        
        tableData: [],
        current: 1,
        pageSize: 10,
        total: 0,
        formLabelWidth: '160px',
        selectedArr: [],

        addVisible: false,
        addform: {
            waresName: '',
            price: 0,
            num: 0,
            category: '',
            describe: ''
        }


    };
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    /**
     * 分页
     */
    topPage(){
        let api = '/api/business/publish';
        if( this.current == '1' ){
            this.$message({
                message: '第一页啦！',
                type: 'warning'
            });
            return;
        }else{
            this.$axios.get(api,{
                params:{
                    current: + this.current - 1,
                    pageSize: 10
                }
            })
            .then((res)=>{
                if( res.data.status == 200 ){
                    let data = res.data.data.content;
                    let pages = res.data.data.pagination;
                    this.tableData = data;
                    this.current = pages.current;
                    this.total = pages.total;
                }
            })
            .catch(()=>{})
        }
    },
    nextPage(){
        let api = '/api/business/publish';

        let num =  this.total / this.pageSize;

        let nextpage = parseInt(num) + 1;
        


        if( this.current >= nextpage ){
            this.$message({
                message: '最后一页啦！',
                type: 'warning'
            });
            return;
        }else{
            this.$axios.get(api,{
                params:{
                    current: + this.current + 1,
                    pageSize: 10
                }
            })
            .then((res)=>{
                if( res.data.status == 200 ){
                    let data = res.data.data.content;
                    let pages = res.data.data.pagination;
                    this.tableData = data;
                    this.current = pages.current;
                    this.total = pages.total;
                }
            })
            .catch(()=>{})
        }
    },
    /**
     * 关闭模态框
     */
    closeDialog(){

    },
    /** 获取tab数据 */
    getData(){
        let api = '/wares';
        this.$axios.get(api,{})
        .then(res=>{
            console.log(res)
        })
        .catch(()=>{})
    },
    /** 添加list数据 */
    submitAddForm(){
        let api = '/wares';
        this.$axios.post(api,{
            params: {

            }
        })
    },
    /** 选中tab表中的数据 */
    handleSelectionChange(){

    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.getData();
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.container {
  flex: 1;
  height: 200px;
  min-width: 760px;
  box-sizing: border-box;
  padding-bottom: 20px;

    .tabTitle{
        color: #9FC8F2;
        font-size: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        .left{
            display: flex;
            .icon{
                margin: 0 0 0 20px;
                color: firebrick;
                &:hover{
                    cursor: pointer;
                }
            }
        }
        .right{
            color: #898AA7;
            font-size: 14px;
            >span{
                display: inline-block;
                margin: 0px 10px;
            }
            .changePage{
                &:hover{
                    cursor: pointer;
                    color: cyan;
                }
            }
        }
    }

    .productMakeTab{
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
        background-color: #011C3A;
        margin: 10 auto;
    }

    
    .handleIconBox{
        display: inline-block;
        font-size: 18px;
        margin: 0 6px;
        &:hover{
            cursor: pointer;
            color: cyan;
        }
    }
  
}
</style>