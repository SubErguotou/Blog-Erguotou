<template>
  <div id="Login">
    <div class="login-warp">
      <ul class="menu-tag">
        <li
          v-for="item in menuTag"
          :key="item.id"
          :class="{ current: item.current }"
          @click="togg(item)"
        >{{ item.txt }}</li>
      </ul>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="login-form"
        size="medium"
      >
        <el-form-item prop="email" class="blog-form">
          <label>邮箱</label>
          <el-input type="email" v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="username" class="blog-form" v-if="mode == 'sigin'">
          <label>用户名</label>
          <el-input type="email" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="password" class="blog-form">
          <label>密码</label>
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item v-if="mode == 'login'">
          <el-button type="danger" @click="submitFormLogin()" class="login-btn block">登录</el-button>
        </el-form-item>

        <el-form-item v-if="mode == 'sigin'">
          <el-button type="danger" @click="submitFormSigin()" class="login-btn block">注册</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "@vue/composition-api";
import {login, sigin} from "../../api/Login/index"
export default {
  name: "Login",
  setup(props, { root }) {
    const menuTag = reactive([
      { txt: "登录", current: true, type: "login" },
      { txt: "注册", current: false, type: "sigin" }
    ]);

    const text = ref("登录");
    const mode = ref("login");
    const error_war = ref("");

    const togg = reactive(data => {
      // console.log(data);
      // console.log(data.txt);
      // console.log(data.current);
      menuTag.forEach(data => {data.current = false;});
      data.current = true;
      text.value = data.txt;
      console.log(text.value);
      mode.value = data.type;
      console.log(mode.value);
    });

      const ruleForm = reactive( {
        email: "",
        password: "",
        username : ""
      });
      const rules =reactive( {
        email: [{ validator: validateEmail, trigger: "blur" }],
        password: [{ validator: validatepassword, trigger: "blur" }],
        password: [{ validator: validateusername, trigger: "blur" }],
      })


    // 检查邮箱是否为空
      let validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        callback();
      }
    };

    // 检查用户名是否为空
    let validateusername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };

      // 检查密码是否为空
      let validatepassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    // 按钮触发登录事件
    const submitFormLogin = () => {
      // 登录传送数据
      // let login_data = {
      //   email: ruleForm.email,
      //   password: ruleForm.password
      // };
      // login(login_data).then((response)=>{
      //   console.log(response);
      // }).catch((error)=>{
      //   console.log(error);
      // })

        if(ruleForm.email == "erguotou@163.com" && ruleForm.password == "123456"){
          root.$router.push({
            name: "Layout",
            params: {}
          });
        }else{
          root.$message({
            message: "账号或密码错误",
            type: 'error',
            center: true,
            showClose: true
          })
        }


    };

    const submitFormSigin = ()=>{

      // 注册传送的数据
      let sigin_data = {
        email: ruleForm.email,
        username: ruleForm.username,
        password: ruleForm.password
      };

     sigin(sigin_data).then((response)=>{
        console.log(response);
      }).catch((error)=>{
        console.log(error);
      })
    }


    return {
      menuTag,
      togg,
      validateEmail,
      validatepassword,
      validateusername,
      ruleForm,
      rules,
      submitFormLogin,
      submitFormSigin,
      text,
      mode,
      error_war
    };
  }

};
</script>


<style lang="less" scoped>
#Login {
  // background: url("../../assets/img/summerpocket-01.jpg") no-repeat;
  // background-position: center;
  // background-size: 100% 100%;
  background-color: #334a5f;
  height: 100vh;
  padding-top: 85px;
}
.login-warp {
  margin: auto;
  width: 330px;
  // border: red solid 2px;
}
.menu-tag {
  text-align: center;
  // margin-top: 200px;
  // border: solid 3px red;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.login-form {
  margin-top: 29px;
  label {
    margin-bottom: 3px;
    display: block;
    color: #ffffff;
    font-size: 14px;
  }
}
.block {
  display: block;
  width: 100%;
}
.login-btn {
  margin-top: 13px;
}
</style>
