import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    hidden: true,
    meta:{
      name: "登录"
    },
    component: ()=>import('../views/Login/index.vue')
  },
  {
    path: "/layout",
    name: "Layout",
    redirect: '/control',
    meta:{
      name: '控制台',
      icon: "el-icon-s-tools"
    },
    component: ()=> import('../views/Layout/index.vue'),
    children:[
      {
        path: "/control",
        name: "Control",
        meta:{
          name: "首页"
        },
        component: ()=>import('../views/Control/index.vue')
      }
    ]
  },
  {
    path: "/blog",
    name: "Blog",
    hidden: false,
    meta: {
      name: "博客管理",
      icon: "el-icon-star-on"
    },
    component: ()=>import('../views/Layout/index.vue'),
    children:[
      {
        path: "/controlblog",
        name: "ControlBlog",
        meta: {
          name: "博客首页"
        },
        component: ()=>import('../views/Blog/controlblog.vue')
      },
      {
        path: "/writeblog",
        name: "WriteBlog",
        meta:{
          name: "发布博客",
        },
        component: ()=>import('../views/Blog/WriteBlog.vue'),
        // children:[
        //   {
        //     path:"/mdeditor",
        //     name: "MdEditor",
        //     component: ()=>import("../views/Blog/MdEditot/index.vue"),
        //   }
        // ]
      }
    ]
  },
  {
    path: "/friend",
    name: "Friend",
    hidden: false,
    meta: {
      name: "友链管理",
      icon: "el-icon-link"
    },
    component: ()=>import('../views/Layout/index.vue'),
    children:[
      {
        path: "/controlfriend",
        name: "ControlFriend",
        meta: {
          name: "博客友链"
        },
        component: ()=>import('../views/Friend/controlfriend.vue')
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    hidden: false,
    meta: {
      name: "关于",
      icon: "el-icon-loading"
    },
    component: ()=>import('../views/Layout/index.vue'),
    children:[
      {
        path: "/controlabout",
        name: "ControlAriend",
        meta: {
          name: "关于"
        },
        component: ()=>import('../views/About/controlabout.vue')
      }
    ]
  },
  {
    path: "/file",
    name: "File",
    hidden: false,
    meta: {
      name: "文件管理",
      icon: "el-icon-s-finance"
    },
    component: ()=>import('../views/Layout/index.vue'),
    children:[
      {
        path: "/filecontrol",
        name: "FileControl",
        meta: {
          name: "文件上传"
        },
        component: ()=>import('../views/File/FileControl.vue')
      }
    ]
  },
  {
    path:"/config",
    name:"Config",
    meta:{
      name: "系统设置",
      icon: "el-icon-s-tools"
    },
    component:()=>import("../views/Layout/index.vue"),
    children:[
      {
        path:"/configsetting",
        name:"ConfigSetting",
        meta: {
          name: "链接管理"
        },
        component:()=>import("../views/configsetting/config.vue")
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
