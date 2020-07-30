# 我的博客項目搭建 -------- 前端

## 項目初始構建

### 使用vue-cli4搭建項目

```javascript
vue create blog
默認下載了（less, babel, router, vuex, eslint），考慮到使用eslint會有寫麻煩，於是決定刪除它
步驟：
	（1）在根目錄下創建vue.config.js文件
	（2）加入以下代碼
    	module.exports = {
  			lintOnSave:false
		}
説明：該文件最終會和主配置文件合并的。當我們需要修改或設置一些配置的時候，可以在這類修改
```

### 在項目中使用element-ui

```javascript
element-ui 官網 https://element.eleme.cn/#/zh-CN/component/installation
步驟：
	（1）安裝依賴
    	npm i element-ui -S
	（2）引入 Element（在main.js中）
    	import Vue from 'vue'
        import App from './App.vue'
        import router from './router' //vue-router
        import store from './store'   //vuex
        import ElementUI from 'element-ui' 
        import 'element-ui/lib/theme-chalk/index.css'
        Vue.use(ElementUI)

        Vue.config.productionTip = false

        new Vue({
          router,
          store,
          render: h => h(App)
        }).$mount('#app')
	（3）可以設置按需引入
    	例如；
        	import { Button } from 'element-ui'
			Vue.use(Button)
注意：以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入。
		
```

### 規劃和創建項目的目錄結構

```javascript
src目錄下：
- assets/		（放置靜態資源）
	- css/		（放置公共css）
    - img/		（放置公共圖片）
- common/		（防止公共的js文件，例如工具類）
- network/		（放置與網絡請求相關的js文件）
- router/		（路由）
- store/		（vuex）
- views/		（視圖）
```

### 安裝和封裝axios

```javascript
安裝：npm install axios -S
封裝：（在network文件夾下創建request.js）
	import axios from 'axios'

    export function request(config) {
      // 1.创建axios的实例
      const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
      })

      // 2.axios的拦截器
      // 2.1.请求拦截的作用
      instance.interceptors.request.use(config => {
        return config
      }, err => {
        // console.log(err);
      })

      // 2.2.响应拦截
      instance.interceptors.response.use(res => {
        return res.data
      }, err => {
        console.log(err);
      })

      // 3.发送真正的网络请求
      return instance(config)
    }
```

### 配置路徑別名

```java
在vue.config.js文件中：
module.exports = {
  lintOnSave:false,
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

vue已經有個默認的路徑別名 ： @  ----> src/
```

### 將項目推送到github上保存

```javascript
因爲不懂得如何在VsCode中如何使用git，所以直接在本地找到項目文件，使用git bash推送了
（1）git init
（2）git add .
（3）git commit -m "描述信息"
（4）git remote add origin 倉庫地址
（5）git push -u origin master
```

### 引入重置樣式表和base.css

```javascript
在assets中引入重置樣式表和base.css
重置樣式表網上有很多就不放出來了
base.css

@import "./reset.css";

/*:root -> 获取根元素html  css定義變量*/
:root {
  --color-text: #666;
  --color-high-text: #ff5777;
  --color-tint: #ff8198;
  --color-background: #fff;
  --font-size: 14px;
  --line-height: 1.5;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  user-select: none; /* 禁止用户鼠标在页面上选中文字/图片等 */
  -webkit-tap-highlight-color: transparent; /* webkit是苹果浏览器引擎，tap点击，highlight背景高亮，color颜色，颜色用数值调节 */
  background: var(--color-background);
  color: var(--color-text);
  /* rem vw/vh */
  width: 100vw;
}

a {
  color: var(--color-text);
  text-decoration: none;
}


.clear-fix::after {
  clear: both;
  content: '';
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
}

.clear-fix {
  zoom: 1;
}

.left {
  float: left;
}

.right {
  float: right;
}

在App.vue中引入

<style lang="less">
  @import "assets/css/base.css";
</style>
```

### 改變導航欄url的形式

```javascript
在router/index.js中：
const router = new VueRouter({
  routes,
 //加上這行代碼
  mode: 'history'
})
（以前的hash的格式，現在變成后H5的history格式）
```

### 设置页面和路由

```javascript
在src/views目录下创建：
- views/
    - about/About.vue
	- article/Article.vue
	- home/Home.vue
	- mine/Mine.vue
	- resources/Resources.vue
	- timeline/TimeLine
在src/router/index中：
//路由懒加载的方式
const Home = () => import('../views/home/Home')
const Article = () => import('../views/article/Article')
const About = () => import('../views/about/About')
const Mine = () => import('../views/mine/Mine')
const Resources = () => import('../views/resources/Resources')
const TimeLine = () => import('../views/timeline/TimeLine')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/article',
    component: Article
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/resources',
    component: Resources
  },
  {
    path: '/timeline',
    component: TimeLine
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
```



## 封裝導航欄

```javascript
思路：
（1）創建一個組件tabbar，裏面設置一個插槽，放置tabbaritem
（2）再創建一個組件tabbaritem，裏面也設置插槽，放置icon和text
（3）最後創建一個縂組件，將整個導航欄封裝成爲一個組件，在App.vue中使用即可

TabBar.vue:
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>
---------------------------------------------------------------------------------
TabBarItem.vue:
<template>
  <div class="tab-bar-item" :class="{active:isActive}" @click="itemClick">
    <a href="javascript:;">
      <i :class="icon"></i>
      <span class="title">{{title}}</span>
    </a>
  </div>
</template>

<script>
 export default {
    name: "TabBarItem",
    props: {
      // 路徑
      path: String,
      // 文本標題
      title:{
        type:String,
        default:"默認標題"
      },
      // 圖標樣式
      icon:String
    },
    data() {
      return {
        
      }
    },
    computed: {
      isActive() {
        // 通過判斷url路徑是否包含這個item的path，來決定是否active
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods: {
      // 點擊改變路徑
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
.tab-bar-item{
  font-size: 15px;
  height: 55px;
  line-height: 55px;
  cursor: pointer;
  flex: 1;
}
.tab-bar-item:hover{
  background-color: var(--color-theme);
}
.active{
   background-color: var(--color-theme);
}
a{
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--font-color);
}
span{
  padding-left: 5px;
}
</style>
---------------------------------------------------------------
MainTabBar.vue:
<template>
    <tab-bar id="main-tab-bar" class="tab-bar">
      <div class="logo">Blog</div>
      <tab-bar-item path="/home" icon="el-icon-s-home" title="网站首页"/>
      <tab-bar-item path="/article" icon="el-icon-document" title="文章专栏"/>
      <tab-bar-item path="/resources" icon="el-icon-upload" title="资源分享"/>
      <tab-bar-item path="/timeline" icon="el-icon-sunny" title="点点滴滴"/>
      <tab-bar-item path="/about" icon="el-icon-share" title="关于本站"/>
      <tab-bar-item path="/mine" icon="el-icon-phone" title="给我留言"/>
      <div class="login">
        <el-tooltip class="item" effect="dark" content="点击登录" placement="left-start">
          <el-button type="info" circle>
            <i class="el-icon-user-solid"></i>
          </el-button>
        </el-tooltip>
      </div>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"
export default {
  name: 'MainTabBar',
  data () {
    return {
      
    };
  },
  methods: {},
  mounted () {},
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
.logo{
  font-size: 30px;
  width: 150px;
  padding-left: 20px;
  font-weight: 700;
  color: var(--color-theme);
  cursor: pointer;
}
.tab-bar {
    display: flex;
    background-color: var(--app-theme);
    width: 100vw;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    justify-items: center;
    align-items: center;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
    border-bottom: 2px solid #ccc;
  }
  .login{
    width: 290px;
    display: flex;
    padding-right: 50px;
    justify-content: flex-end;
    align-items: center;
    
  }
</style>
---------------------------------------------------------------
在App.vue中使用组件：
<template>
  <div id="app">
    <main-tab-bar/>
    <keep-alive>
      <router-view class="main"/>
    </keep-alive>
  </div>
</template>
<script>
import MainTabBar from "components/content/maintabbar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>
<style lang="less">
@import "assets/css/base.css";
html,body{
  background-color: var(--app-theme);
  color: var(--font-color);
}
.main{
  margin-top: 55px;
}
</style>

```

