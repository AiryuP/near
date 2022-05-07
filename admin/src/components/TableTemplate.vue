<template>
    <div class="table-page">
        <div class="container-box">
            <div class="search-box">
                <div class="title-box">
                    <el-input v-model="searchName" :placeholder="searchTips" clearable></el-input>
                </div>
                <slot  name="select-input"></slot>
                <div class="search-icon">
                    <div class="search-btn" @click="searchEvent"></div>
                     <div class="refresh-btn" @click="refreshEvent" ></div>
                </div>
            </div>
            <slot name="right-box"></slot>
            <div class="table-area">
                <slot name="table-box"></slot>
                <div class="page-block">
                    <el-pagination
                        :current-page.sync ="currentPaging"
                        :page-sizes="[5, 10,30, 50, 100]"
                        :page-size.sync ="pageSizing"
                        layout="total,prev, pager, next, jumper,sizes"
                        :total="totalPage">
                    </el-pagination>                    
                </div>                 
            </div>           
        </div>      
    </div>
</template>
<script>
export default {
    name: 'table-template',
    props: {
        searchTips: {
            type: String,
            required: true
        },
        totalPage: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
        pageSize: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            searchName: '',
            pageSizing: this.pageSize,
            currentPaging: this.currentPage
        }
    },
    watch: {
        pageSize(val) {
            this.pageSizing = val
        },
        pageSizing(val) {
            this.$emit('change-size', val)
        },
        currentPage(val) {
            this.currentPaging = val
        },
        currentPaging(val) {
             this.$emit('current-change', val)
        }
    },
    methods: {
        searchEvent(){
            this.$emit('on-search', this.searchName)
        },
        refreshEvent(){
            this.$emit('on-refresh')
        }
    }
}
</script>
<style lang="scss" scoped>
    .table-page{
        width: 100%;
        height: 100%;
        // background: url('../assets/images/erjibg.png') no-repeat;
        background-size: 100%;   
        box-sizing: border-box;
        position: relative;
        .container-box{
            width: 100%;
            height: 100%;
            // padding-top: 70px;
            .search-box{
                width: 65%;
                // height: 54px;
                // padding-left: 90px;
                margin-top:18px;
                display: flex;
                .title-box{
                    height: 100%;
                    width: 200px;
                }
                /deep/.el-input{
                    .el-input__inner{
                        background-color: rgba(65, 104, 212, 0.11);
                        color: #fff;
                    }                   
                }
                .search-icon{
                    width: 100px;
                    height: 50px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .search-btn{
                        width: 50px;
                        height: 100%;
                        border: none;
                        background: url('../assets/images/searchBtn.png') no-repeat center 0;
                        cursor: pointer;
                    } 
                    .refresh-btn{
                        width: 50px;
                        height: 100%;
                        border: none;
                        background: url('../assets/images/refresh-bt.png') no-repeat center 0;      
                        cursor: pointer;                  
                    }                                           
                }                                               
            }
            .table-area{
                // margin-left: 90px;
                width: 88%;
                height: 65%;
                box-sizing: border-box;
            }
        }      
    }
    .page-block{
        float: right;
        margin-top: 10px;
        // position: absolute;
        // bottom: 100px;
        // left: 88px;
    }
    /deep/.el-pagination{       
        .el-pager{
            .number{
                background-color: rgba(255, 255, 255, 0);
                color:#fff;
            }
            .more{
                background: none;
                color: white;
            }
            .active{
                color: #00FFFF;
            }
        }
        .el-pagination__jump{
            font-weight: 600;
            color: white;
                .el-pagination__editor, .el-input__inner{
                    background: none;
                    color: white;
                    
                }
        }
        .btn-next, .btn-prev{
            background: none;
            color: white;
        }
    }
    /deep/.el-input__inner{
        background-color: rgba(255, 255, 255, 0);
        color:#fff;
    }
    /deep/.el-pagination__total{
        color: white;
    }       
</style>
