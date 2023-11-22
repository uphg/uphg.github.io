import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.42e95ed4.js";const h=JSON.parse('{"title":"代码规范","description":"","frontmatter":{"title":"代码规范","date":"2021-12-11T08:51:46.000Z","next":{"text":"内存管理","link":"/post/memory-management"},"prev":{"text":"正则速查表","link":"/post/regexp-memo"}},"headers":[],"relativePath":"post/code-specification.md","filePath":"post/code-specification.md","lastUpdated":null}'),p={name:"post/code-specification.md"},o=l(`<h1 id="代码规范" tabindex="-1">代码规范 <a class="header-anchor" href="#代码规范" aria-label="Permalink to &quot;代码规范&quot;">​</a></h1><h2 id="文章参考" tabindex="-1">文章参考 <a class="header-anchor" href="#文章参考" aria-label="Permalink to &quot;文章参考&quot;">​</a></h2><ul><li><a href="https://google.github.io/styleguide/jsguide.html" target="_blank" rel="noreferrer">谷歌 JavaScript 风格指南</a></li><li><a href="https://lin-123.github.io/javascript/" target="_blank" rel="noreferrer">Airbnb JavaScript 风格指南</a></li><li><a href="https://standardjs.com/rules-zhcn.html" target="_blank" rel="noreferrer">JavaScript Standard Style</a></li><li><a href="https://coolshell.cn/articles/4758.html" target="_blank" rel="noreferrer">如何写出无法维护的代码</a></li><li><a href="https://dev.to/checkgit/the-joel-test-20-years-later-1kjk" target="_blank" rel="noreferrer">The Joel Test: 20 Years Later</a> StackOverflow 创始人总结的 20 条衡量技术团队好坏的标准</li><li><a href="https://www.youtube.com/watch?v=DxnYQRuLX7Q" target="_blank" rel="noreferrer">视频：The better parts</a> Douglas Crockford 阐述他认为 JS 中的好的特性有哪些，坏的特性有哪些</li></ul><h2 id="javascript-代码规范" tabindex="-1">JavaScript 代码规范 <a class="header-anchor" href="#javascript-代码规范" aria-label="Permalink to &quot;JavaScript 代码规范&quot;">​</a></h2><h3 id="文件命名小写" tabindex="-1">文件命名小写 <a class="header-anchor" href="#文件命名小写" aria-label="Permalink to &quot;文件命名小写&quot;">​</a></h3><p>文件名必须全部小写，并且可以包含下划线（<code>_</code>）或破折号（<code>-</code>），但不能包含额外的标点符号。遵循项目使用的约定。文件名的扩展名必须是 <code>.js</code>。</p><h3 id="es-modules" tabindex="-1">ES modules <a class="header-anchor" href="#es-modules" aria-label="Permalink to &quot;ES modules&quot;">​</a></h3><p>导入路径中的文件必须添加扩展名</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../directory/file&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../directory/file.js&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../directory/file&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../directory/file.js&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div><p>导入命名必须以文件名驼峰式命名</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Naming module imports</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> fileOne </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../file-one.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> fileTwo </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../file_two.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Naming default imports</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MyClass </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../my-class.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> myFunction </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../my_function.js&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Naming module imports</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> fileOne </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../file-one.js&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> fileTwo </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../file_two.js&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Naming default imports</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> MyClass </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../my-class.js&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> myFunction </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../my_function.js&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="禁止使用-var" tabindex="-1">禁止使用 var <a class="header-anchor" href="#禁止使用-var" aria-label="Permalink to &quot;禁止使用 var&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> state </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> state </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> state </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> state </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span></code></pre></div><h3 id="使用-const-声明常量" tabindex="-1">使用 const 声明常量 <a class="header-anchor" href="#使用-const-声明常量" aria-label="Permalink to &quot;使用 const 声明常量&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">a</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span></code></pre></div><h3 id="使用两个空格缩进" tabindex="-1">使用两个空格缩进 <a class="header-anchor" href="#使用两个空格缩进" aria-label="Permalink to &quot;使用两个空格缩进&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;">(a){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;b&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;">(a){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;b&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#D73A49;">switch</span><span style="color:#24292E;">(a){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;a&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;b&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#D73A49;">switch</span><span style="color:#24292E;">(a){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;a&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;b&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to &quot;字符串&quot;">​</a></h3><p>默认字符串尽量使用单引号</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">double</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;double&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">single</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;single&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">double</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;double&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">single</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;single&#39;</span></span></code></pre></div><p>使用模板字面量拼接字符串</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Hello, &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;!&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`Hello, \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}!\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Hello, &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;!&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`Hello, \${</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}!\`</span></span></code></pre></div><h3 id="条件语句" tabindex="-1">条件语句 <a class="header-anchor" href="#条件语句" aria-label="Permalink to &quot;条件语句&quot;">​</a></h3><p>禁止在条件语句中使用常量</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (a </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (a </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>禁止在条件语句中赋值</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (a) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">123</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (a) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">123</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="使用驼峰式命名" tabindex="-1">使用驼峰式命名 <a class="header-anchor" href="#使用驼峰式命名" aria-label="Permalink to &quot;使用驼峰式命名&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Bar</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">category_id</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> query</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">categoryId</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> query</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Bar</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">category_id</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> query</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">categoryId</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> query</span></span></code></pre></div><h3 id="禁止使用特定语法" tabindex="-1">禁止使用特定语法 <a class="header-anchor" href="#禁止使用特定语法" aria-label="Permalink to &quot;禁止使用特定语法&quot;">​</a></h3><p>禁止使用 <code>with</code> 语句，因为 <code>with</code> 语句的语法不明确</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  p1: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  p2: </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">with</span><span style="color:#E1E4E8;"> (obj) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  p1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span></span>
<span class="line"><span style="color:#E1E4E8;">  p2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 相当于</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.p1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.p2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  p1: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  p2: </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">with</span><span style="color:#24292E;"> (obj) {</span></span>
<span class="line"><span style="color:#24292E;">  p1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span></span>
<span class="line"><span style="color:#24292E;">  p2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 相当于</span></span>
<span class="line"><span style="color:#24292E;">obj.p1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span></span>
<span class="line"><span style="color:#24292E;">obj.p2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span></span></code></pre></div><p>禁止使用 <code>in</code> 运算符，因为 <code>in</code> 运算符是判断对象或其原型链的属性，判断的不明确</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">obj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  foo: </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 判断 obj 中是否存在 foo 属性</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (foo </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> obj) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">obj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  foo: </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 判断 obj 中是否存在 foo 属性</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (foo </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> obj) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>禁止使用二进制运算符，因为二进制运算符不常用，会使代码难以理解和查错。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 3</span></span>
<span class="line"><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// -4</span></span>
<span class="line"><span style="color:#F97583;">~~</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 3</span></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 3</span></span>
<span class="line"><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#D73A49;">~</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// -4</span></span>
<span class="line"><span style="color:#D73A49;">~~</span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 3</span></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span></code></pre></div><h3 id="不使用分号" tabindex="-1">不使用分号 <a class="header-anchor" href="#不使用分号" aria-label="Permalink to &quot;不使用分号&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">b</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">b</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { a: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">a</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">b</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { a: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">a</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">b</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { a: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> }</span></span></code></pre></div><h3 id="禁止对象末尾逗号" tabindex="-1">禁止对象末尾逗号 <a class="header-anchor" href="#禁止对象末尾逗号" aria-label="Permalink to &quot;禁止对象末尾逗号&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">o</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  b: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">o</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  b: </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">o</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  a: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  b: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">a</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">o</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  a: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  b: </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">a</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div>`,40),e=[o];function c(t,r,y,E,i,d){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{h as __pageData,u as default};
