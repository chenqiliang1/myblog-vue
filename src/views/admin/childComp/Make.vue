<template>
	<div class="Make">
		<div class="icons">
			<el-card class="icon-card">
				<div class="user-info">
					<el-avatar
						size="small"
						src="http://wx.qlogo.cn/mmopen/SCQMO9mIC5dLnZib7icfAc3LhPLODGLEQdyicEHpNHhjTwrAM5hXsOHY4KymwrQ5hBZcbkegicmcguib7KjvAAvkRhF6XkNCI2dUB/64"
					></el-avatar>
					<span>悲伤的狗子</span>
				</div>
				<div class="upload">
					<input type="file" id="file" />
					<img src="" id="img" />
					<h2 class="title">标题1111111111111111111111111111111111111111111111111</h2>
				</div>
                <el-input v-model="input" placeholder="请输入标题"></el-input>
			</el-card>
		</div>

		<el-tabs v-model="activeName" class="tab">
			<el-tab-pane label="编辑文章" name="first">
				<el-row>
					<el-col :span="24">
						<el-card class="box-card">
							<div class="card">
								<div id="custom-toc-container"></div>
								<div class="id" :id="id"></div>
							</div>
						</el-card>
                        <el-col :span="24">
                            
                        </el-col>
					</el-col>
				</el-row>
			</el-tab-pane>
			<el-tab-pane label="发表说说" name="second"> </el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import $ from '../../../../public/lib/jquery-3.3.1'
export default {
	name: 'Make',
	data() {
		return {
			activeName: 'first',
			//最终生成的编辑器
			editor: null,
			imageUrl: '',
			//默认选项
			defaultOptions: {
				width: '100%',
				height: 500,
				path: '/lib/editormd/lib/',
				toolbarAutoFixed: false,
				theme: 'dark',
				previewTheme: 'dark',
				editorTheme: 'pastel-on-dark',
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
				saveHTMLToTextarea: true, // 保存 HTML 到 Textarea
				searchReplace: true,
				htmlDecode: 'style,script,iframe|on*', // 开启 HTML 标签解析，为了安全性，默认不开启
				taskList: true,
				tocm: true, // Using [TOCM]
				flowChart: true, // 开启流程图支持，默认关闭
				sequenceDiagram: true, // 开启时序/序列图支持，默认关闭,
				imageUpload: true,
				imageFormats: ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'],
				onload: function() {},
			},
		}
	},
	props: {
		/**
		 * editormd挂载元素的id
		 */
		id: {
			type: String,
			default: '213617678',
		},
		/**
		 * editormd的选项对象
		 */
		options: {
			type: Object,
		},
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
		},
		getOptions() {
			return Object.assign(this.defaultOptions, this.options)
		},
	},
	mounted() {
		let vm = this
		//加载editormd
		this.requireEditor(function() {
			vm.editor = editormd(vm.id, vm.getOptions())
			vm.editor.config({
				tocContainer: '#custom-toc-container',
				tocDropdown: false,
			})
		})

		document.querySelector('#file').onchange = function() {
			if (this.files.length) {
				let file = this.files[0]
				let reader = new FileReader()
				//新建 FileReader 对象
				reader.onload = function() {
					// 当 FileReader 读取文件时候，读取的结果会放在 FileReader.result 属性中
					document.querySelector('#img').src = this.result
				}
				// 设置以什么方式读取文件，这里以base64方式
				reader.readAsDataURL(file)
			}
		}
	},
	components: {},
}
</script>

<style lang="less">
.Make {
	// margin-top: 0;

	margin: 0;
	margin-left: 19%;

	.icons {
		position: fixed;
		width: 18%;
		left: 10px;
		top: 100px;

		.upload {
			position: relative;
			height: 210px;
			background-color: rgb(225, 225, 225);
            margin-top: 10px;
            margin-bottom: 10px;
			cursor: pointer;
			input {
				width: 100%;
				height: 210px;
				// background-color: red;
				position: absolute;
				opacity: 0;
				z-index: 2;
				// background-color: red;
			}
			h2 {
				width: 100%;
				font-size: 14px;
				padding-left: 10px;
				padding-bottom: 5px;
				position: absolute;
				z-index: 1;
				bottom: 0;

				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				-o-text-overflow: ellipsis;
			}
			img {
				width: 100%;
				position: absolute;
				z-index: 3;
			}
		}

		.icon-card {
			margin: 0;
			padding: 0;

			.user-info {
				display: flex;
				width: 100%;
				align-items: center;
				cursor: pointer;
				span {
					font-size: 14px;
					margin-left: 10px;
				}
			}
		}
	}
	.box-card {
		background-color: rgb(26, 26, 23);
		// width: 100%;
	}
	.card {
		display: flex;
		height: 500px;
		overflow: hidden;

		.id {
			flex: 6;
		}
	}
	#custom-toc-container {
		flex: 1;
		width: 100%;
		height: 500px;
		overflow: auto;
		background-color: white;
		font-size: 14px;
		line-height: 20px;
		// border-radius: 5px;
		// background-color: rgb(84,92,100);
		background-color: rgb(51, 51, 51);
		// border-right: 1px solid white;
		a {
			display: block;
			width: 100%;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			-o-text-overflow: ellipsis;
			color: white;
		}
	}

	a.toc-level-2::before {
		content: '- ';
	}

	a.toc-level-3::before {
		content: '-- ';
	}

	a.toc-level-4::before {
		content: '--- ';
	}

	a.toc-level-5::before {
		content: '---- ';
	}

	a.toc-level-1 {
		font-size: 12px;
	}

	a.toc-level-2 {
		font-size: 12px;
		padding-left: 10px;
	}

	a.toc-level-3 {
		font-size: 12px;
		padding-left: 15px;
	}

	a.toc-level-4 {
		font-size: 12px;
		padding-left: 20px;
	}

	a.toc-level-5 {
		font-size: 12px;
		padding-left: 25px;
	}

	#custom-toc-container > .markdown-toc {
		padding: 10px;
	}
}
</style>
