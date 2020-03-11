<template>
  <div id="mavonEditor">
    <el-row :gutter="50">
      <el-col class="demo-inpute" :span="8">
        <el-input size="small" placeholder="标题" suffix-icon="el-icon-edit" v-model="dataJson.title"></el-input>
        <el-input size="small" placeholder="标签" suffix-icon="el-icon-collection-tag" v-model="dataJson.lable"></el-input>
        <el-input size="small" placeholder="分类" suffix-icon="el-icon-paperclip" v-model="dataJson.classify"></el-input>
      </el-col>
        <el-button type="primary" plain class="bt-top" @click="Submit">提交</el-button>
    </el-row>
    <div>
      <mavon-editor v-model="value" @change="updataDoc" class="editor-warp" />
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted, computed } from "@vue/composition-api";
export default {
  name: "writeBlog",
  setup(props, { root }) {
    const value = ref("");

    // 第一个参数获取markdown形式的文章， 第二个参数获取html形式的文章
    const updataDoc = (markdown, html) => {
      dataJson.markdown = markdown;
      dataJson.html = html;
    };

    // 使用对象来接收参数
    const dataJson = reactive({
      title: "",
      lable: "",
      classify: "",
      markdown: "",
      html: ""
    });

    const Submit = () => {
      console.log(dataJson);
    };

    console.log(dataJson);

    return {
      value,
      updataDoc,
      dataJson,
      Submit
    };
  }
};
</script>

<style scope lang="less">
#mavonEditor {
  // height: 400%;
  // 滚动条
  // overflow:scroll;
}
.demo-inpute{
  width: 300px;
}
// 把输入框改成行内元素
.el-input{
  display: inline;
}
// 调整输入框
.el-input__inner{
  width: 250px;
  margin-bottom: 8px;
}

  // 调整图标行高
.el-input--small .el-input__icon{
      line-height: 16px;
}
// 调整markdown高度
.editor-warp {
  height: 400px;
}
// 调整按钮
.bt-top{
  margin-top: 70px;
}
</style>
