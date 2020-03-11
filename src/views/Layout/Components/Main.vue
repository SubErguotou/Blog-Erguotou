<template>
<div id="main-wrap">
  <div class="main-content">
    <div class="content">
    <router-view/>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scope lang = "less">
#main-wrap{
  height: 100vh;
    /* position: fixed;
    left: 250px;
    top: 75px;
    right: 0;
    bottom: 0;
    border: 30px solid #f7f7f7;
    border-bottom: none;
    background-color: #ffffff;
    -webkit-box-sizing: border; */
}
.main-content{
  width: 100%;
  height: 100%;
  padding-top: 105px;
  padding-left: 280px;
  padding-right: 30px;
  -webkit-box-sizing: border;
  box-sizing: border-box;
  -webkit-transition: all .3s ease 0s;
  }
.content{
  width: 100%;
  height: 100%;
  padding: 30px 30px 0 30px;
  -webkit-box-sizing: border;
  box-sizing: border-box;
  background-color: #fff;
}
.open{
  .main-content{
    padding-left: 280px;
  }
}
.close{
  .main-content{
    padding-left: 94px;
  }
}

</style>
