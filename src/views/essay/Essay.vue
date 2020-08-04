<template>
	<div class="essay">
		<h2>Vue3 插件开发详解尝鲜版</h2>
		<div class="icons">
			<span> <i class="el-icon-date"></i>2020/8/1 </span>
			<span> <i class="el-icon-folder"></i>html vue </span>
			<span> <i class="el-icon-view"></i>阅读数 190 </span>
			<span> <i class="el-icon-notebook-1"></i>评论数 190 </span>
		</div>
		<!-- 内容 -->
		<el-card class="card">
            <div class="js-toc"></div> 
		</el-card>
		<div class="content js-toc-content typo">
			<h1 id="h1-editor-md">
				<a name="Editor.md" class="reference-link"></a
				><span class="header-link octicon octicon-link"></span>Editor.md
			</h1>
			<p>
				<img
					src="https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png"
					alt=""
				/>
			</p>
			<p>
				<img
					src="https://img.shields.io/github/stars/pandao/editor.md.svg"
					alt=""
				/>
				<img
					src="https://img.shields.io/github/forks/pandao/editor.md.svg"
					alt=""
				/>
				<img
					src="https://img.shields.io/github/tag/pandao/editor.md.svg"
					alt=""
				/>
				<img
					src="https://img.shields.io/github/release/pandao/editor.md.svg"
					alt=""
				/>
				<img
					src="https://img.shields.io/github/issues/pandao/editor.md.svg"
					alt=""
				/>
				<img
					src="https://img.shields.io/bower/v/editor.md.svg"
					alt=""
				/>
			</p>
			<p><strong>目录 (Table of Contents)</strong></p>
			<div class="editormd-toc-menu">
				<div class="markdown-toc editormd-markdown-toc">[TOCM]</div>
			</div>
			<br />
			<div class="markdown-toc editormd-markdown-toc">[TOC]</div>
			<h1 id="h1-heading-1">
				<a name="Heading 1" class="reference-link"></a
				><span class="header-link octicon octicon-link"></span>Heading 1
			</h1>
			<h2 id="h2-heading-2">
				<a name="Heading 2" class="reference-link"></a
				><span class="header-link octicon octicon-link"></span>Heading 2
			</h2>
			<h3 id="h3-heading-3">
				<a name="Heading 3" class="reference-link"></a
				><span class="header-link octicon octicon-link"></span>Heading 3
			</h3>
			<h4 id="h4-heading-4">
				<a name="Heading 4" class="reference-link"></a
				><span class="header-link octicon octicon-link"></span>Heading 4
			</h4>
			<h5 id="h5-heading-5">
				<a name="Heading 5" class="reference-link"></a
				><span class="header-link octicon octicon-link"></span>Heading 5
			</h5>
			<h6 id="h6-heading-6">
				<a name="Heading 6" class="reference-link"></a
				><span class="header-link octicon octicon-link"></span>Heading 6
			</h6>
			<h1 id="h1-heading-1-link-heading-link">
				<a
					name="Heading 1 link   Heading link"
					class="reference-link"
				></a
				><span class="header-link octicon octicon-link"></span>Heading 1
				link
				<a
					href="https://github.com/pandao/editor.md"
					title="Heading link"
					>Heading link</a
				>
			</h1>
			<h2 id="h2-heading-2-link-heading-link">
				<a
					name="Heading 2 link   Heading link"
					class="reference-link"
				></a
				><span class="header-link octicon octicon-link"></span>Heading 2
				link
				<a
					href="https://github.com/pandao/editor.md"
					title="Heading link"
					>Heading link</a
				>
			</h2>
			<h3 id="h3-heading-3-link-heading-link">
				<a
					name="Heading 3 link   Heading link"
					class="reference-link"
				></a
				><span class="header-link octicon octicon-link"></span>Heading 3
				link
				<a
					href="https://github.com/pandao/editor.md"
					title="Heading link"
					>Heading link</a
				>
			</h3>
			<h4 id="h4-heading-4-link-heading-link-heading-link-heading-link">
				<a
					name="Heading 4 link   Heading link  Heading link   Heading link"
					class="reference-link"
				></a
				><span class="header-link octicon octicon-link"></span>Heading 4
				link
				<a
					href="https://github.com/pandao/editor.md"
					title="Heading link"
					>Heading link</a
				>
				Heading link
				<a
					href="https://github.com/pandao/editor.md"
					title="Heading link"
					>Heading link</a
				>
			</h4>
			<h5 id="h5-heading-5-link-heading-link">
				<a
					name="Heading 5 link   Heading link"
					class="reference-link"
				></a
				><span class="header-link octicon octicon-link"></span>Heading 5
				link
				<a
					href="https://github.com/pandao/editor.md"
					title="Heading link"
					>Heading link</a
				>
			</h5>
			<h6 id="h6-heading-6-link-heading-link">
				<a
					name="Heading 6 link   Heading link"
					class="reference-link"
				></a
				><span class="header-link octicon octicon-link"></span>Heading 6
				link
				<a
					href="https://github.com/pandao/editor.md"
					title="Heading link"
					>Heading link</a
				>
			</h6>
			<h4 id="h4--heading-underline-">
				<a
					name="标题（用底线的形式）Heading (underline)"
					class="reference-link"
				></a
				><span class="header-link octicon octicon-link"></span
				>标题（用底线的形式）Heading (underline)
			</h4>
			<h1 id="h1-this-is-an-h1">
				<a name="This is an H1" class="reference-link"></a
				><span class="header-link octicon octicon-link"></span>This is
				an H1
			</h1>
			<h2 id="h2-this-is-an-h2">
				<a name="This is an H2" class="reference-link"></a
				><span class="header-link octicon octicon-link"></span>This is
				an H2
			</h2>
			<h3 id="h3-u5B57u7B26u6548u679Cu548Cu6A2Au7EBFu7B49">
				<a name="字符效果和横线等" class="reference-link"></a
				><span class="header-link octicon octicon-link"></span
				>字符效果和横线等
			</h3>
			<hr />
			<p>
				<del>删除线</del> <s>删除线（开启识别HTML标签时）</s><br /><em
					>斜体字</em
				>
				<em>斜体字</em><br /><strong>粗体</strong> <strong>粗体</strong
				><br /><strong><em>粗斜体</em></strong>
				<strong><em>粗斜体</em></strong>
			</p>
			<p>上标：X<sub>2</sub>，下标：O<sup>2</sup></p>
			<p><strong>缩写(同HTML的abbr标签)</strong></p>
			<blockquote>
				<p>
					即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启
				</p>
			</blockquote>
			<p>
				The
				<abbr title="Hyper Text Markup Language">HTML</abbr>
				specification is maintained by the
				<abbr title="World Wide Web Consortium">W3C</abbr>.
			</p>
			<h3 id="h3--blockquotes">
				<a name="引用 Blockquotes" class="reference-link"></a
				><span class="header-link octicon octicon-link"></span>引用
				Blockquotes
			</h3>
			<blockquote>
				<p>引用文本 Blockquotes</p>
			</blockquote>
			<p>引用的行内混合 Blockquotes</p>
			<blockquote>
				<p>
					引用：如果想要插入空白换行<code>即&lt;br /&gt;标签</code
					>，在插入处先键入两个以上的空格然后回车即可，<a
						href="http://localhost/"
						>普通链接</a
					>。
				</p>
			</blockquote>
			<h3 id="h3--links">
				<a name="锚点与链接 Links" class="reference-link"></a
				><span class="header-link octicon octicon-link"></span
				>锚点与链接 Links
			</h3>
			<p><a href="http://localhost/">普通链接</a></p>
			<p>
				<a href="http://localhost/" title="普通链接带标题"
					>普通链接带标题</a
				>
			</p>
			<p>直接链接：<a href="https://github.com">https://github.com</a></p>
			<p><a href="http://www.this-anchor-link.com/">锚点链接</a></p>
			<p>
				<a href="mailto:test.test@gmail.com"
					>mailto:test.test@gmail.com</a
				>
			</p>
			<p>
				GFM a-tail link
				<a
					href="https://github.com/pandao"
					title="@pandao"
					class="at-link"
					>@pandao</a
				>
				邮箱地址自动链接
				<a href="mailto:test.test@gmail.com">test.test@gmail.com</a>
				<a href="mailto:www@vip.qq.com">www@vip.qq.com</a>
			</p>
			<blockquote>
				<p>
					<a
						href="https://github.com/pandao"
						title="@pandao"
						class="at-link"
						>@pandao</a
					>
				</p>
			</blockquote>
			<h3 id="h3--codes">
				<a name="多语言代码高亮 Codes" class="reference-link"></a
				><span class="header-link octicon octicon-link"></span
				>多语言代码高亮 Codes
			</h3>
			<h4 id="h4--inline-code">
				<a name="行内代码 Inline code" class="reference-link"></a
				><span class="header-link octicon octicon-link"></span>行内代码
				Inline code
			</h4>
			<p>执行命令：<code>npm install marked</code></p>
			<h4 id="h4-u7F29u8FDBu98CEu683C">
				<a name="缩进风格" class="reference-link"></a
				><span class="header-link octicon octicon-link"></span>缩进风格
			</h4>
			<p>
				即缩进四个空格，也做为实现类似
				<code>&lt;pre&gt;</code> 预格式化文本 ( Preformatted Text )
				的功能。
			</p>
			<pre><code>&lt;?php
    echo "Hello world!";
?&gt;
</code></pre>
			<p>预格式化文本：</p>
			<pre><code>| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
</code></pre>
			<h4 id="h4-js-">
				<a name="JS代码" class="reference-link"></a
				><span class="header-link octicon octicon-link"></span>JS代码
			</h4>
			<pre><code class="lang-javascript">function test() {
    console.log("Hello world!");
}

(function(){
    var box = function() {
        return box.fn.init();
    };

    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');

            return this;
        },

        add : function(str) {
            alert("add", str);

            return this;
        },

        remove : function(str) {
            alert("remove", str);

            return this;
        }
    };

    box.fn.init.prototype = box.fn;

    window.box =box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
</code></pre>
			<h4 id="h4-html-html-codes">
				<a name="HTML 代码 HTML codes" class="reference-link"></a
				><span class="header-link octicon octicon-link"></span>HTML 代码
				HTML codes
			</h4>
			<pre><code class="lang-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;mate charest="utf-8" /&gt;
        &lt;meta name="keywords" content="Editor.md, Markdown, Editor" /&gt;
        &lt;title&gt;Hello world!&lt;/title&gt;
        &lt;style type="text/css"&gt;
            body{font-size:14px;color:#444;font-family: "Microsoft Yahei", Tahoma, "Hiragino Sans GB", Arial;background:#fff;}
            ul{list-style: none;}
            img{border:none;vertical-align: middle;}
        &lt;/style&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1 class="text-xxl"&gt;Hello world!&lt;/h1&gt;
        &lt;p class="text-green"&gt;Plain text&lt;/p&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre>
		</div>
		<el-divider></el-divider>
		<!-- 评论 -->
		<el-card class="box-card">
			<el-row :gutter="10">
				<el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
					<el-input
						v-model="input"
						placeholder="请输入昵称"
						class="input"
					></el-input>
					<div class="send">
						<el-button type="primary">点击发送</el-button>
					</div>
				</el-col>
				<el-col :xs="24" :sm="25" :md="12" :lg="12" :xl="12">
					<el-input
						v-model="input"
						type="textarea"
						placeholder="请输入评论"
						class="input"
					></el-input>
				</el-col>
			</el-row>
			<el-divider><i class="el-icon-edit"></i></el-divider>
			<CommentParent />
		</el-card>
	</div>
</template>

<script>
import CommentParent from '../mine/childComp/commentparent'
import * as tocbot from 'tocbot'
import $ from '../../../public/lib/jquery-3.3.1'
export default {
	name: 'Essay',
	data() {
		return {
			input: '',
		}
	},
	methods: {},
	mounted() {
		tocbot.init({
			// Where to render the table of contents.
			tocSelector: '.js-toc',
			// Where to grab the headings to build the table of contents.
			contentSelector: '.js-toc-content',
			// Which headings to grab inside of the contentSelector element.
			headingSelector: 'h1, h2, h3',
			hasInnerContainers: true,
		})
	},
	components: {
		CommentParent,
	},
}
</script>

<style scoped lang="less">
.card {
	position: fixed;
	top: 120px;
	right: 20px;
    font-size: 14px;
    z-index: 2;
}
.essay {
	h2 {
		text-align: center;
		font-size: 25px;
		color: #606266;
		margin-bottom: 15px;
	}

	.icons {
		height: 30px;
		line-height: 30px;
		color: rgb(153, 153, 153);
		font-size: 13px;
		margin-bottom: 25px;
		text-align: center;
		span {
			margin-right: 10px;
			i {
				padding-right: 5px;
			}
		}
	}
}
.input {
	margin-bottom: 15px;
}
.send {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
}

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
.typo article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
	display: block;
}

/* HTML5 媒体文件跟 img 保持一致 */
.typo audio,
canvas,
video {
	display: inline-block;
}

/* 要注意表单元素并不继承父级 font 的问题 */
.typo button,
input,
select,
textarea {
	font: 300 1em/1.8 PingFang SC, Lantinghei SC, Microsoft Yahei,
		Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
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
.typo fieldset,
img {
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

@media only screen and (max-width: 640px) {
	.typo blockquote {
		margin: 1em 0;
	}
}

/* Firefox 以外，元素没有下划线，需添加 */
.typo acronym,
abbr {
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

.typo address,
caption,
cite,
code,
dfn,
em,
th,
var {
	font-style: normal;
	font-weight: 400;
}

/* 去掉列表前的标识, li 会继承，大部分网站通常用列表来很多内容，所以应该当去 */
.typo ul,
ol {
	list-style: none;
}

/* 对齐是排版最重要的因素, 别让什么都居中 */
.typo caption,
th {
	text-align: left;
}

.typo q:before,
.typo q:after {
	content: '';
}

/* 统一上标和下标 */
.typo sub,
.typo sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
}

.typo :root sub,
.typo :root sup {
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
.typo ins,
.typo a {
	text-decoration: none;
}

/* 专名号：虽然 u 已经重回 html5 Draft，但在所有浏览器中都是可以使用的，
 * 要做到更好，向后兼容的话，添加 class="typo-u" 来显示专名号
 * 关于 <u> 标签：http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-u-element
 * 被放弃的是 4，之前一直搞错 http://www.w3.org/TR/html401/appendix/changes.html#idx-deprecated
 * 一篇关于 <u> 标签的很好文章：http://html5doctor.com/u-element/
 */
.typo u,
.typo .typo-u {
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
.typo pre,
.typo code,
.typo pre tt {
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

.typo strong,
.typo b {
	font-weight: bold;
	color: #000;
}

/* 可拖动文件添加拖动手势 */
.typo [draggable] {
	cursor: move;
}

.typo .clearfix:before,
.typo .clearfix:after {
	content: '';
	display: table;
}

.typo .clearfix:after {
	clear: both;
}

.typo .clearfix {
	zoom: 1;
}

/* 强制文本换行 */
.typo .textwrap,
.typo .textwrap td,
.typo .textwrap th {
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
.typo p,
.typo pre,
.typo ul,
.typo ol,
.typo dl,
.typo form,
.typo hr,
.typo table,
.typo-p,
.typo-pre,
.typo-ul,
.typo-ol,
.typo-dl,
.typo-form,
.typo-hr,
.typo-table,
blockquote {
	margin-bottom: 1.2em;
}

.typo h1,
.typo h2,
.typo h3,
.typo h4,
.typo h5,
.typo h6 {
	font-family: PingFang SC, Verdana, Helvetica Neue, Microsoft Yahei,
		Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
	font-weight: 100;
	color: #000;
	line-height: 1.35;
}

/* 标题应该更贴紧内容，并与其他块区分，margin 值要相应做优化 */
.typo h1,
.typo h2,
.typo h3,
.typo h4,
.typo h5,
.typo h6,
.typo-h1,
.typo-h2,
.typo-h3,
.typo-h4,
.typo-h5,
.typo-h6 {
	margin-top: 1.2em;
	margin-bottom: 0.6em;
	line-height: 1.35;
}

.typo h1,
.typo-h1 {
	font-size: 2em;
}

.typo h2,
.typo-h2 {
	font-size: 1.8em;
}

.typo h3,
.typo-h3 {
	font-size: 1.6em;
}

.typo h4,
.typo-h4 {
	font-size: 1.4em;
}

.typo h5,
.typo h6,
.typo-h5,
.typo-h6 {
	font-size: 1.2em;
}

/* 在文章中，应该还原 ul 和 ol 的样式 */
.typo ul,
.typo-ul {
	margin-left: 1.3em;
	list-style: disc;
}

.typo ol,
.typo-ol {
	list-style: decimal;
	margin-left: 1.9em;
}

.typo li ul,
.typo li ol,
.typo-ul ul,
.typo-ul ol,
.typo-ol ul,
.typo-ol ol {
	margin-bottom: 0.8em;
	margin-left: 2em;
}

.typo li ul,
.typo-ul ul,
.typo-ol ul {
	list-style: circle;
}

/* 同 ul/ol，在文章中应用 table 基本格式 */
.typo table th,
.typo table td,
.typo-table th,
.typo-table td,
.typo table caption {
	border: 1px solid #ddd;
	padding: 0.5em 1em;
	color: #666;
}

.typo table th,
.typo-table th {
	background: #fbfbfb;
}

.typo table thead th,
.typo-table thead th {
	background: #f1f1f1;
}

.typo table caption {
	border-bottom: none;
}

/* 去除 webkit 中 input 和 textarea 的默认样式  */
.typo-input,
.typo-textarea {
	-webkit-appearance: none;
	border-radius: 0;
}

.typo-em,
.typo em,
legend,
caption {
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
	content: '・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・';
}

/* Responsive images */
.typo img {
	max-width: 100%;
}
.typo pre{
    background-color: rgb(44,40,39);
    // background-color: black;
    border-radius: 5px;
    font-size: 14px;
    code{
        // color: rgb(135,147,143);
        color: rgb(166,226,46);
    }
}
</style>
