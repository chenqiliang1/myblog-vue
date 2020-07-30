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
```

### 將項目推送到github上保存

```javascript

```

