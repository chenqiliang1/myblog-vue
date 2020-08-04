import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Article = () => import('../views/article/Article')
const About = () => import('../views/about/About')
const Mine = () => import('../views/mine/Mine')
const Resources = () => import('../views/resources/Resources')
const TimeLine = () => import('../views/timeline/TimeLine')
const Essay = () => import('../views/essay/Essay')
const Admin = () => import('../views/admin/admin')
const AdminIndex = () => import('../views/admin/childComp/AdminIndex.vue')
const AdminInfo = () => import('../views/admin/childComp/AdminInfo.vue')
const AdminNews = () => import('../views/admin/childComp/AdminNews.vue')
const Bugs = () => import('../views/admin/childComp/Bugs.vue')
const AdminArticle = () => import('../views/admin/childComp/AdminArticle.vue')
const Make = () => import('../views/admin/childComp/Make.vue')



Vue.use(VueRouter)

const routes = [
	{
		path: '',
		redirect: '/home',
		meta: {
			title: 'CQL-BLOG-网站首页',
		},
	},
	{
		path: '/home',
		component: Home,
		meta: {
			title: 'CQL-BLOG-网站首页',
		},
	},
	{
		path: '/article',
		component: Article,
		meta: {
			title: 'CQL-BLOG-文章专栏',
		},
	},
	{
		path: '/about',
		component: About,
		meta: {
			title: 'CQL-BLOG-关于本站',
		},
	},
	{
		path: '/admin',
		name: 'admin',
		redirect: '/admin/adminindex',
		components: {
			Admin: Admin,
		},
		children: [
			{
				path: '/admin/adminindex',
                name: 'AdminIndex',
                meta: {
                    title: 'CQL-后台管理首页',
                },
				components: {
					admin_icon: AdminIndex,
				},
            },
            {
				path: '/admin/admininfo',
                name: 'AdminInfo',
                meta: {
                    title: 'CQL-信息管理',
                },
				components: {
					admin_icon: AdminInfo,
				},
            },
            {
				path: '/admin/adminNews',
                name: 'adminNews',
                meta: {
                    title: 'CQL-消息管理',
                },
				components: {
					admin_icon: AdminNews,
				},
            },
            {
				path: '/admin/adminArticle',
                name: 'AdminArticle',
                meta: {
                    title: 'CQL-文章管理',
                },
				components: {
					admin_icon: AdminArticle,
				},
            },
            // {
			// 	path: '/admin/other',
            //     name: 'other',
            //     meta: {
            //         title: 'CQL-其他设置',
            //     },
			// 	components: {
			// 		admin_icon: Other,
			// 	},
            // },
            {
				path: '/admin/bugs',
                name: 'bugs',
                meta: {
                    title: 'CQL-Bug管理',
                },
				components: {
					admin_icon: Bugs,
				},
			},
		],
		meta: {
			title: 'CQL-BLOG-后台管理',
		},
    },
    {
        path: '/admin/make',
        name: 'Make',
        meta: {
            title: 'CQL-编辑文章',
        },
        component: Make
    },
	{
		path: '/mine',
		component: Mine,
		meta: {
			title: 'CQL-BLOG-给我留言',
		},
    },
	{
		path: '/resources',
		component: Resources,
		meta: {
			title: 'CQL-BLOG-资源分享',
		},
	},
	{
		path: '/timeline',
		component: TimeLine,
		meta: {
			title: 'CQL-BLOG-点点滴滴',
		},
	},
	{
		path: '/essay/:id',
		component: Essay,
		meta: {
			title: 'CQL-BLOG-文章详情',
		},
	},
]

const router = new VueRouter({
	routes,
	mode: 'history',
})

router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err)
}

export default router
