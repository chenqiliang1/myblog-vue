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

## 动态改变网页标题

```javascript
在router/index.js中
（1）设置路由时，加上meta属性
{
		path: '/about',
		component: About,
		meta: {
			title: 'CQL-BLOG-关于本站',
		},
	}
（2）添加以下代码
router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})
```

## 多个router-view的使用

```javascript
<keep-alive>
			<router-view class="main" />
</keep-alive>
<keep-alive>
            <router-view class="Admin" name="Admin"/>
</keep-alive>
<router-view class="admin-right" name="admin_icon"></router-view>
（1）给router-view设置name属性
（2）在router/index.js中
{
	path: '/admin/adminArticle',
    name: 'AdminArticle',
    meta: {
         title: 'CQL-文章管理',
    },
	components: {
		admin_icon: AdminArticle,
	},
}
原先的component改为components,key是router-view的name值，value是组件名字。而之前那些component，会去找默认的router-view，即没有设置name属性的那个（如果有多个，会出错）。
```

## 关于vue异常捕获

```java
建议去官网看。这里是给warnHandler事件绑定一个回调函数。
Vue.config.warnHandler = function(msg, vm, trace) {
	// `trace` 是组件的继承关系追踪
	let error = {
		msg,
		trace,
    }
    errors.push(error)
    let errors_str = JSON.stringify(errors)
    localStorage.setItem("error",errors_str)
}
```

## vue中使用echarts

```javascript
不止这一种方式
（1）安装 npm install echarts --save
（2）在main.js中引入
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
（3）在页面中使用
let myChart = this.$echarts.init(document.getElementById('main'))
```

## 自动目录生成

```javascript
tocbot.js
（1）安装npm install --save tocbot
（2）在页面中引入
import * as tocbot from 'tocbot'  -----------js
@import 'tocbot/src/scss/tocbot'; -----------css（记得安装sass）
（3）使用
tocbot.init({
	// 目录生成的地方.
	tocSelector: '.js-toc',
	// 需要生成目录的内容
	contentSelector: '.js-toc-content',
	// Which headings to grab inside of the contentSelector element.
	headingSelector: 'h1, h2, h3',
	hasInnerContainers: true,
})
```

## 文章重排版css typo.css

```css
@charset "utf-8";

.typo p {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.8;
  text-align: justify;
}

.typo li {
  font-weight: 300;
  padding: 4px 0;
}

/* 重设 HTML5 标签, IE 需要在 js 中 createElement(TAG) */
.typo article, aside, details, figcaption, figure, footer, header, menu, nav, section {
  display: block;
}

/* HTML5 媒体文件跟 img 保持一致 */
.typo audio, canvas, video {
  display: inline-block;
}

/* 要注意表单元素并不继承父级 font 的问题 */
.typo button, input, select, textarea {
  font: 300 1em/1.8 PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
}

.typo button::-moz-focus-inner,
.typo input::-moz-focus-inner {
  padding: 0;
  border: 0;
}

/* 去掉各Table cell 的边距并让其边重合 */
.typo table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* 去除默认边框 */
.typo fieldset, img {
  border: 0;
}

/* 块/段落引用 */
.typo blockquote {
  position: relative;
  color: #999;
  font-weight: 400;
  border-left: 1px solid #1abc9c;
  padding-left: 1em;
  margin: 1em 3em 1em 2em;
}

@media only screen and ( max-width: 640px ) {
  .typo blockquote {
    margin: 1em 0;
  }
}

/* Firefox 以外，元素没有下划线，需添加 */
.typo acronym, abbr {
  border-bottom: 1px dotted;
  font-variant: normal;
}

/* 添加鼠标问号，进一步确保应用的语义是正确的（要知道，交互他们也有洁癖，如果你不去掉，那得多花点口舌） */
.typo abbr {
  cursor: help;
}

/* 一致的 del 样式 */
.typo del {
  text-decoration: line-through;
}

.typo address, caption, cite, code, dfn, em, th, var {
  font-style: normal;
  font-weight: 400;
}

/* 去掉列表前的标识, li 会继承，大部分网站通常用列表来很多内容，所以应该当去 */
.typo ul, ol {
  list-style: none;
}

/* 对齐是排版最重要的因素, 别让什么都居中 */
.typo caption, th {
  text-align: left;
}

.typo q:before,.typo  q:after {
  content: '';
}

/* 统一上标和下标 */
.typo sub,.typo  sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
}

.typo :root sub,.typo  :root sup {
  vertical-align: baseline; /* for ie9 and other modern browsers */
}

.typo sup {
  top: -0.5em;
}

.typo sub {
  bottom: -0.25em;
}

/* 让链接在 hover 状态下显示下划线 */
.typo a {
  color: #1abc9c;
}

.typo a:hover {
  text-decoration: underline;
}

.typo a {
  border-bottom: 1px solid #1abc9c;
}

.typo a:hover {
  border-bottom-color: #555;
  color: #555;
  text-decoration: none;
}

/* 默认不显示下划线，保持页面简洁 */
.typo ins,.typo  a {
  text-decoration: none;
}

/* 专名号：虽然 u 已经重回 html5 Draft，但在所有浏览器中都是可以使用的，
 * 要做到更好，向后兼容的话，添加 class="typo-u" 来显示专名号
 * 关于 <u> 标签：http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-u-element
 * 被放弃的是 4，之前一直搞错 http://www.w3.org/TR/html401/appendix/changes.html#idx-deprecated
 * 一篇关于 <u> 标签的很好文章：http://html5doctor.com/u-element/
 */
.typo u,.typo  .typo-u {
  text-decoration: underline;
}

/* 标记，类似于手写的荧光笔的作用 */
.typo mark {
  background: #fffdd1;
  border-bottom: 1px solid #ffedce;
  padding: 2px;
  margin: 0 5px;
}

/* 代码片断 */
.typo pre,.typo  code,.typo  pre tt {
  font-family: Courier, 'Courier New', monospace;
}

.typo pre {
  background: #f8f8f8;
  border: 1px solid #ddd;
  padding: 1em 1.5em;
  display: block;
  -webkit-overflow-scrolling: touch;
}

/* 一致化 horizontal rule */
.typo hr {
  border: none;
  border-bottom: 1px solid #cfcfcf;
  margin-bottom: 0.8em;
  height: 10px;
}

/* 底部印刷体、版本等标记 */
.typo small,.typo  .typo-small,
  /* 图片说明 */
.typo figcaption {
  font-size: 0.9em;
  color: #888;
}

.typo strong,.typo  b {
  font-weight: bold;
  color: #000;
}

/* 可拖动文件添加拖动手势 */
.typo [draggable] {
  cursor: move;
}

.typo .clearfix:before,.typo  .clearfix:after {
  content: "";
  display: table;
}

.typo .clearfix:after {
  clear: both;
}

.typo .clearfix {
  zoom: 1;
}

/* 强制文本换行 */
.typo .textwrap,.typo .textwrap td,.typo  .textwrap th {
  word-wrap: break-word;
  word-break: break-all;
}

.typo .textwrap-table {
  table-layout: fixed;
}

/* 提供 serif 版本的字体设置: iOS 下中文自动 fallback 到 sans-serif */
.typo .serif {
  font-family: Palatino, Optima, Georgia, serif;
}

/* 保证块/段落之间的空白隔行 */
.typo p, .typo pre, .typo ul, .typo ol, .typo dl, .typo form, .typo hr, .typo table,
.typo-p, .typo-pre, .typo-ul, .typo-ol, .typo-dl, .typo-form, .typo-hr, .typo-table, blockquote {
  margin-bottom: 1.2em
}

.typo h1,.typo  h2,.typo  h3,.typo  h4,.typo  h5,.typo  h6 {
  font-family: PingFang SC, Verdana, Helvetica Neue, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
  font-weight: 100;
  color: #000;
  line-height: 1.35;
}

/* 标题应该更贴紧内容，并与其他块区分，margin 值要相应做优化 */
.typo h1, .typo h2, .typo h3, .typo h4, .typo h5, .typo h6,
.typo-h1, .typo-h2, .typo-h3, .typo-h4, .typo-h5, .typo-h6 {
  margin-top: 1.2em;
  margin-bottom: 0.6em;
  line-height: 1.35;
}

.typo h1, .typo-h1 {
  font-size: 2em;
}

.typo h2, .typo-h2 {
  font-size: 1.8em;
}

.typo h3, .typo-h3 {
  font-size: 1.6em;
}

.typo h4, .typo-h4 {
  font-size: 1.4em;
}

.typo h5, .typo h6, .typo-h5, .typo-h6 {
  font-size: 1.2em;
}

/* 在文章中，应该还原 ul 和 ol 的样式 */
.typo ul, .typo-ul {
  margin-left: 1.3em;
  list-style: disc;
}

.typo ol, .typo-ol {
  list-style: decimal;
  margin-left: 1.9em;
}

.typo li ul, .typo li ol, .typo-ul ul, .typo-ul ol, .typo-ol ul, .typo-ol ol {
  margin-bottom: 0.8em;
  margin-left: 2em;
}

.typo li ul, .typo-ul ul, .typo-ol ul {
  list-style: circle;
}

/* 同 ul/ol，在文章中应用 table 基本格式 */
.typo table th, .typo table td, .typo-table th, .typo-table td, .typo table caption {
  border: 1px solid #ddd;
  padding: 0.5em 1em;
  color: #666;
}

.typo table th, .typo-table th {
  background: #fbfbfb;
}

.typo table thead th, .typo-table thead th {
  background: #f1f1f1;
}

.typo table caption {
  border-bottom: none;
}

/* 去除 webkit 中 input 和 textarea 的默认样式  */
.typo-input, .typo-textarea {
  -webkit-appearance: none;
  border-radius: 0;
}

.typo-em, .typo em, legend, caption {
  color: #000;
  font-weight: inherit;
}

/* 着重号，只能在少量（少于100个字符）且全是全角字符的情况下使用 */
.typo-em {
  position: relative;
}

.typo-em:after {
  position: absolute;
  top: 0.65em;
  left: 0;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  content: "・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・";
}

/* Responsive images */
.typo img {
  max-width: 100%;
}

```

## 在vue中使用editormd

```javascript
因为editormd没有做对vue的兼容，所以使用有点麻烦
editormd的使用文档：http://editor.md.ipandao.com/examples/index.html
（1）下载好editormd的源码，并放在src/public/lib下（editormd依赖jquery，记得导入jquery）
（2）在页面中
<div class="id" id="markdown"></div>
import $ from '../../../../public/lib/jquery-3.3.1'  ------- 引入jquery
export default {
	name: 'Make',
	data() {
		return {
            //最终生成的编辑器
			editor: null,
			//editor的默认选项
			defaultOptions: {
				width: '100%',
				height: 500,
				path: '/lib/editormd/lib/',
				toolbarAutoFixed: false,
				theme: 'default',
				previewTheme: 'default',
				editorTheme: 'eclipse',
				toolbarIcons: function() {
					return [
						'undo',
						'redo',
						'|',
						'hr',
						'|',
						'preview',
						'watch',
						'code',
						'code-block',
						'search',
						'image',
						'table',
						'|',
						'datetime',
					]
				},
				placeholder: '博客',
				codeFold: true,
				syncScrolling: true,
				imageUpload: true,
				imageFormats: ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'],
				onload: function() {},
			},
		}
	},
	methods: {
		requireEditor(callback) {
			let vm = this
			//设置全局变量，因为editormd依赖jquery
			window.$ = window.jQuery = $
			//异步加载并执行
			$.getScript('/lib/editormd/editormd.min.js', function(script) {
				callback()
			})
			//加载css
			$('head').append(
				$('<link rel="stylesheet" type="text/css" />').attr(
					'href',
					'/lib/editormd/css/editormd.min.css'
				)
			)
		}
	},
	mounted() {
		let vm = this
		//加载editormd
		this.requireEditor(function() {
			vm.editor = editormd('markdown', vm.defaultOptions)
			vm.editor.config({
                //目录
				tocContainer: '#custom-toc-container',
				tocDropdown: false,
			})
		})
	},
}

```

