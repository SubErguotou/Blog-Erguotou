<template>
  <div id="main-warp">
    <el-row :gutter="30">
      <el-col :span="6">
        <div class="bg-purple bg-color1">
          <div class="atuo-hander">
            <div>发布了</div>
            <div class="auto-font">{{essay}}</div>
            <div>篇博客</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg-purple bg-color2">
          <div class="atuo-hander">
            <div>收到了</div>
            <div class="auto-font">{{essay}}</div>
            <div>留言</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg-purple bg-color3">
          <div class="atuo-hander">
            <div>上传了</div>
            <div class="auto-font">{{essay}}</div>
            <div>文件</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg-purple bg-color4">
          <div class="atuo-hander">
            <div>友链了</div>
            <div class="auto-font">{{essay}}</div>
            <div>个好友</div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 最新博客 最新留言 系统记录 -->
    <div class="Main-main">
      <el-row :gutter="80">
        <el-col :span="7">
          <div class="grid-content">
            <el-table :data="BlogData" border style="width: 100%">
              <el-table-column prop="data" label="最新博客" width="auto"></el-table-column>
            </el-table>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content">
            <el-table :data="LeaveData" border style="width: 100%">
              <el-table-column prop="data" label="最新留言" width="auto"></el-table-column>
            </el-table>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content">
            <el-table :data="sytemData" border style="width: 100%">
              <el-table-column prop="data" label="系统记录" width="auto"></el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted, computed } from "@vue/composition-api";

export default {
  name: "MainWarp",
  setup(props, { root }) {
    const essay = ref(3);
    // 博客
    const BlogData = reactive( [{
          data: '第一篇博客'
        },
        {
          data: "第二篇博客"
        },
        {
          data: "第二篇博客"
        },
        {
          data: "第二篇博客"
        },
        {
          data: "第二篇博客"
        }])
        // 留言
        const LeaveData = reactive( [{
          data: '第一数据'
        },
        {
          data: "第二数据"
        },
        {
          data: "第三数据"
        },
        {
          data: "第四数据"
        },
        {
          data: "第五数据"
        }])
        // 系统数据
        const sytemData = reactive( [{
          data: '第一条系统记录'
        },
        {
          data: "第二条系统记录"
        },
        {
          data: "第三条系统记录"
        },
        {
          data: "第四条系统记录"
        },
        {
          data: "第五条系统记录"
        }])

    return {
      essay,
      BlogData,
      LeaveData,
      sytemData
    };
  },
};
</script>

<style scope lang="less">
// @import url("../../assets/less/main.less");

.bg-purple {
  display: flex;
  height: @variable;
  padding: 30px 30px 30px 30px;
  font-size: 20px;
  color: #fff;
  .auto-font {
    margin-left: 30px;
    font-size: 30px;
  }
}
.atuo-hander {
  margin: 10px 0px 0px 140px;
  text-align: center;
}

.bg-color1 {
  background-color: #29b6f6;
}
.bg-color2 {
  background-color: #7e57c2;
}
.bg-color3 {
  background-color: #33b86c;
}
.bg-color4 {
  background-color: #6e8cd7;
}
.Main-main {
  margin: 20px 0px 0 80px;
}
.grid-content {
  background-color: #f7f7f7;
  height: 285px;
}
</style>
