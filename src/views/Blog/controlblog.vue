<template>
<div>
  <el-table
    :data="tableData"
    :border="true"
    style="width: 100%">

    <el-table-column
      prop="title"
      label="文章标题"
      width="180">
    </el-table-column>

    <el-table-column
      prop="classify"
      label="分类"
      width="100">
    </el-table-column>

    <el-table-column
      prop="date"
      label="发布时间">
    </el-table-column>

    <el-table-column
      prop="lable"
      label="标签"
       width="100">
    </el-table-column>

    <el-table-column
      label="操作">
      <el-button type="success" plain>编辑</el-button>
      <el-button type="danger" plain>删除</el-button>
    </el-table-column>

  </el-table>
<div class="pagint">
    <el-pagination
    background
    layout="prev, pager, next"
    :total="100">
  </el-pagination>
</div>


</div>

</template>

<script>
import { reactive, ref, onMounted, computed } from "@vue/composition-api";
export default {
  name: "ContrlBlog",
  setup(props, {root}){
      const tableData = reactive([{
                title: "博客标题",
                classify: "博客分类",
                date: '2016-05-02',
                lable: '标签',
              },
              {
                title: "博客标题",
                classify: "博客分类",
                date: '2016-05-02',
                lable: '标签',
              },
              {
                title: "博客标题",
                classify: "博客分类",
                date: '2016-05-02',
                lable: '标签',
              },
              {
                title: "博客标题",
                classify: "博客分类",
                date: '2016-05-02',
                lable: '标签',
              },
              {
                title: "博客标题",
                classify: "博客分类",
                date: '2016-05-02',
                lable: '标签',
              },
              {
                title: "博客标题",
                classify: "博客分类",
                date: '2016-05-02',
                lable: '标签',
              },
              {
                title: "博客标题",
                classify: "博客分类",
                date: '2016-05-02',
                lable: '标签',
              }
              ]
      )

      return {
        tableData
      }
  }
}
</script>

<style socpe lang = "less">
.pagint{
  margin-top: 10px;
  text-align: center;
}
</style>
