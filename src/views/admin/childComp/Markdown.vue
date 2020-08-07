<template>
	<div class="markdown">
		<div id="custom-toc-container"></div>
		<div class="id" id="markdown"></div>
	</div>
</template>

<script>
import $ from '../../../../public/lib/jquery-3.3.1'
export default {
	name: 'MarkDown',
	data() {
		return {
			//最终生成的编辑器
			editor: null,
			//默认选项
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
				saveHTMLToTextarea: true, // 保存 HTML 到 Textarea
				searchReplace: true,
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
		},
	},
	mounted() {
		let vm = this
		//加载editormd
		this.requireEditor(function() {
			try {
				vm.editor = editormd('markdown', vm.defaultOptions)
				vm.editor.config({
					tocContainer: '#custom-toc-container',
					tocDropdown: false,
				})
			} catch (error) {}
		})
	},
	components: {},
}
</script>

<style lang="less">
.markdown {
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
	// background-color: white;
	font-size: 14px;
	line-height: 20px;
	// border-radius: 5px;
	// background-color: rgb(84,92,100);
	// background-color: rgb(51, 51, 51);
	// border-right: 1px solid white;
	a {
		display: block;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
		color: black;
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
</style>
