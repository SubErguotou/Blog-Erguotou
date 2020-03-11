<template>
  <div id="config-warp">
    <el-row :gutter="20">
      <el-col :span="13">
        <div class="bg-purple">
          <div class="grid-content">个人设置</div>
          <div class="input-header">
            <div>
              <label class="lable-t1"><b>知乎:</b></label>
              <el-input v-model="dataJson.zhihu" placeholder="请输入网址" class="input-warp"></el-input>
            </div>
            <div>
              <label class="lable-t2"><b>bilibili:</b></label>
              <el-input v-model="dataJson.bili" placeholder="请输入网址" class="input-warp"></el-input>
            </div>
            <div>
            <label class="lable-t3"><b>github:</b></label>
            <el-input v-model="dataJson.github" placeholder="请输入网址" class="input-warp"></el-input>
            </div>
            <el-row class="bu-t1">
             <el-button type="success" @click="BC">保存</el-button>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
export default {
  name: "Config",
  setup(porps, {root}){
    const dataJson = reactive({
      zhihu: "",
      bili: "",
      github: ""
    });

    const BC = ()=>{
      console.log(dataJson);
    }
    return{
      dataJson,
      BC
    }
  }
};
</script>

<style scope lang="less">
.bg-purple {
  background-color: #f5f5f5;
  height: 400px;
}
.grid-content {
  height: 60px;
  background-color: #000000;
  color: #f5f5f5;
  text-align: center;
  line-height: 56px;
  font-size: 25px;
}
.input-header{
  line-height: 80px;
}
.input-warp {
  width: 70%;
  // padding: 10px 10px 10px 10px;
}
label{
  margin-left: 43px;
  font-size: 20px;
}
.lable-t1{
    padding-right: 27px;
}
.lable-t2{
    padding-right: 5px;
}
.lable-t3{
  padding-right: 1px;
}
.bu-t1{
  text-align: center;
}
</style>
