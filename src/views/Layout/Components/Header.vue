<template>
  <div id="header-wrap">
    <div class="pull-left header-icon">
      <i class="el-icon-menu iconSize" @click="navMeruState"></i>
    </div>
    <div class="pull-right">
      <div class="user-info pull-left">
          管理员
      </div>
      <div class="header-icon pull-left">
        <i class="el-icon-error iconSize"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "layoutheader",
  setup(props, {root}){
    const navMeruState = ()=>{
      // 使用commit方法调用vuex里面mutations属性里的SET_collapse的方法
      root.$store.commit("SET_collapse");
    }

    return {
      navMeruState,
    }
  }

};
</script>

<style scope lang = "less">
#header-wrap {
  position: fixed;
  top: 0;
  right: 0;
  left: 250px;
  height: 75px;
  background-color: #fff;
  /* 阴影部分 */
  -webkit-box-shadow: 0 3px 16px rgba(0, 0, 0, .1);
  line-height: 75px;
  -webkit-transition: all .3s ease 0s;
}
.open{
  #header-wrap{left: 250px;}
}
.close{
  #header-wrap{left: 64px;}
}

.iconSize {
  font-size: 25px;
  margin-bottom: -8px;
  cursor: pointer;
}
.header-icon {
  padding: 0 32px;
}
.user-info {
  height: 100%;
  border-right: 1px solid #ededed;
  padding: 0 32px;
  + .header-icon{
    padding: 0 28px;
  }
}
</style>

