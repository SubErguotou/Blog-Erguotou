<template>
<div id="nav-warp">
  <h1 class="header-logo"><img src="../../../assets/img/img.png" class="imgclass"></h1>
  <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="transparent"
      text-color="#fff"
      router
    >

    <template v-for="(item, index) in routers" >
      <el-submenu v-if="!item.hidden" :key="item.id" :index="index+''">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{item.meta.name}}</span>
        </template>
        <el-menu-item v-for="(subItem) in item.children" :key="subItem.id" :index="subItem.path">{{subItem.meta.name}}</el-menu-item>
      </el-submenu>
      </template>

      <!-- <el-menu-item index="2">
        <i class="el-icon-s-tools"></i>
        <span slot="title">系统设置</span>
      </el-menu-item> -->

    </el-menu>
</div>
</template>

<script>

import { reactive, ref, onMounted, computed } from "@vue/composition-api";
export default {
     name: "NavWarp",
      setup(props, {root}){
        // 控制是否关闭
        // const isCollapse = ref(false);
        const routers = reactive(root.$router.options.routes);
        // console.log(root.$router.options.routes);

        // console.log(root.$store.state.count);
        const isCollapse = computed(()=>root.$store.state.isCollapse);


        return {
            isCollapse,
            routers
        }
    }
}
</script>

<style scope lang = "less">
#nav-warp {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #344a5f;
  -webkit-transition: all .3s ease 0s;
}
.open{
  #nav-warp{width: 250px;}
}
.close{
  #nav-warp{width: 64px;}
}

.header-logo{
  border-radius:50%;
  width: 100px;
  height: 100px;
  margin: 25px auto 25px;
}
.imgclass{
  border-radius:50%;
  width: 100%;
  height: 100%;
}
</style>
