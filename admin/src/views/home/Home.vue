<template>
  <el-container>
    <el-header class="elHeader">
      <div class="projectName">nearGo后台管理平台</div>
      <div class="userInfo">
        <div>
          欢迎您，<span style="color: #f3b01e"> {{ userName }} </span>
        </div>
        <div>丨</div>
        <div class="loginOut" @click="logout">退出</div>
        <div class="iNotice">消息</div>
      </div>
    </el-header>
    <el-container>
      <el-aside class="menuList">
        <el-menu
          :default-active="defaultActive"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          :unique-opened="true"
          @close="handleClose"
          background-color="#011C3A"
          :router="true"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <SubMenu
            :menu-list="list"
            :props="defaultProps"
            @getmenu="onGetMenu"
          />
        </el-menu>
      </el-aside>
      <el-main class="icontainer">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import SubMenu from "../../components/SubMenu";

export default {
  name: "Home",
  components: {
    SubMenu,
  },
  computed: {
    //获取当前路由渲染页面菜单
    //$route.path
    defaultActive() {
      let pathLength = this.$route.path.split("/").reverse();

      if (pathLength.length < 4) {
        let path;
        if (this.$route.path.split("/").reverse()[1] != "") {
          path =
            "/" +
            this.$route.path.split("/").reverse()[1] +
            "/" +
            this.$route.path.split("/").reverse()[0];
        } else {
          path = "/" + this.$route.path.split("/").reverse()[0];
        }

        return path;
      } else {
        let path1 =
          "/" +
          this.$route.path.split("/").reverse()[2] +
          "/" +
          this.$route.path.split("/").reverse()[1] +
          "/" +
          this.$route.path.split("/").reverse()[0];
        return path1;
      }
    },
  },

  data() {
    return {
      defaultProps: {
        children: "children",
        label: "title",
        index: "path",
      },
      list: [
        {
          id: 1,
          title: "首页",
          path: "/meter",
          icon: "icon-home",
          children: [],
        },
        {
          id: 2,
          title: "商品管理",
          path: "/wares",
          icon: "icon-analysis",
          children: [
            
          ],
        },
        {
          id: 6,
          title: "系统管理",
          path: "/system",
          icon: "icon-configuration",
          children: [
            {
              id: "6_1",
              title: "菜单管理",
              path: "/system/menuControl",
            },
            {
              id: "6_2",
              title: "员工管理",
              path: "/system/staff",
            },
            {
              id: "6_3",
              title: "角色管理",
              path: "/system/role",
            },
            {
              id: "6_4",
              title: "权限管理",
              path: "/system/power",
            },
          ],
        },
      ],
      userName: "",
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key)
      console.log(keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key)
      console.log(keyPath)
    },
    onGetMenu(item) {
      // this.selMenuData = item
      // this.$router.push({
      // 	path: item.path,
      // 	query: {
      // 		t: new Date().getTime()
      // 	}
      // })
      console.log(item)
    },
    //  获取用户信息
    gtUserInfo() {
      let userInfo = JSON.parse(sessionStorage.getItem("user"));
      this.userName = userInfo.userName;
    },
    // 退出
    logout() {
      sessionStorage.clear();
      this.$router.go(0);
    },
  },
  mounted() {
    this.gtUserInfo();
  },
};
</script>

<style lang="scss">
.elHeader {
  height: 90px !important;
  background-color: #011c3a;
  border-bottom: 1px solid #1e1f33;
  color: #f3b01e;
  display: flex;
  justify-content: space-between;
  color: #fff;
  .projectName {
    height: 90px;
    font-size: 36px;
    line-height: 90px;
    font-weight: 600;
  }
  .userInfo {
    display: flex;
    font-size: 16px;
    align-items: center;
    > div {
      margin: 0 10px;
    }
    .loginOut {
      &:hover {
        cursor: pointer;
      }
    }
    .iNotice {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.menuList {
  width: 220px !important;
  height: calc(100vh - 90px);
  // height:100vh;
  // overflow: hidden;
  overflow: auto;
  background-color: #011c3a;
  .el-menu {
    border-right: none;
  }
}

.menuList::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 8px;
  scrollbar-arrow-color: red;
}

.menuList::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 6px;
  -webkit-box-shadow: inset 0 0 6px #06395b;
  background: #3886b9;
  scrollbar-arrow-color: red;
}

.menuList::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 6px #06395b;
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}

.icontainer {
  overflow: auto;
  height: calc(100vh - 90px) !important;
}

.icontainer::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 8px;
  scrollbar-arrow-color: red;
}
.icontainer::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 6px;
  -webkit-box-shadow: inset 0 0 6px #06395b;
  background: #05426b;
  scrollbar-arrow-color: red;
}
.icontainer::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 6px #06395b;
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
