<template>
    <div class="setting-page">
        <div class="container-box">
            <div class="search-box">
                <div class="title-box">
                   <div>{{titleName}}</div>
                   <i class="el-icon-info setting-info" @click="handleShowInfo"></i>
                </div>
            </div>
            <div class="table-area">
                <slot name="table-box"></slot>
                <div class="edit-block">
                    <el-button type="primary" icon="el-icon-s-promotion" size="small" @click="handleUpdate">提交</el-button>
                    <el-button type="danger" icon="el-icon-refresh-right" size="small" @click="handleClear">重置</el-button>
                </div>                
            </div>
        </div>
        <el-dialog
            title="配置提示"
            :visible.sync="dialogVisible"
            width="30%">
           <slot name="setting-info"></slot>
        </el-dialog>        
    </div>
</template>
<script>
export default {
    name: 'setting-layout',
    props: {
        titleName: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            searchName: '',
            dialogVisible: false
        }
    },
    methods: {     
        handleShowInfo(){
            this.dialogVisible = true
        },
        handleUpdate() {
            this.$emit('on-update')
        },
        handleClear() {
            this.$emit('on-clear')
        }
    }
}
</script>
<style lang="scss" scoped>
    .setting-page{
        width: 100%;
        // height: 100%; 
        background-size: 100%;   
        box-sizing: border-box;
        position: relative;
        overflow: auto;
        .container-box{
            width: 100%;
            height: 100%;
            // padding-top: 70px;
            .search-box{
                width: 100%;
                height: 54px;
                // margin-left: 90px;
                box-sizing: border-box;
                .title-box{
                    height: 100%;
                    width: 100%;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 26px;
                    .setting-info{
                        font-size: 16px;
                        cursor: pointer;
                    }
                }                                             
            }
            .table-area{
                position: relative;
                margin-left: 90px;
                width: 88%;
                height: 65%;
                box-sizing: border-box;
            }
        }      
    }
    .edit-block{
        // position: absolute;
        // width: 200px;
        width: 100%;
        height: 54px;
        // bottom: -5px;
        // left: 50%;
        margin-left: -16px;
        margin-top: 10px;
        // display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center
    } 
    /deep/.el-input-group__prepend{
        color: #79F9F1;
        background-color: transparent;
    }    
</style>
