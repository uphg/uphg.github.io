import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.42e95ed4.js";const g=JSON.parse('{"title":"Vue 造轮子 - JSX 语法","description":"","frontmatter":{"title":"Vue 造轮子 - JSX 语法","date":"2021-08-07T04:02:45.000Z","tags":["Vue"],"next":{"text":"对象","link":"/post/object"},"prev":{"text":"Vue 造轮子 - 创建 Vue 3 项目","link":"/post/create-vue3"}},"headers":[],"relativePath":"post/jsx.md","filePath":"post/jsx.md","lastUpdated":null}'),p={name:"post/jsx.md"},o=l(`<h1 id="vue-造轮子-jsx-语法" tabindex="-1">Vue 造轮子 - JSX 语法 <a class="header-anchor" href="#vue-造轮子-jsx-语法" aria-label="Permalink to &quot;Vue 造轮子 - JSX 语法&quot;">​</a></h1><p>记录在 Vue 3 中如何使用 JSX 语法。</p><h2 id="vite-jsx-插件" tabindex="-1">Vite JSX 插件 <a class="header-anchor" href="#vite-jsx-插件" aria-label="Permalink to &quot;Vite JSX 插件&quot;">​</a></h2><p>安装</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@vitejs/plugin-vue-jsx</span></span>
<span class="line"><span style="color:#6A737D;"># or npm install -D @vitejs/plugin-vue-jsx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@vitejs/plugin-vue-jsx</span></span>
<span class="line"><span style="color:#6A737D;"># or npm install -D @vitejs/plugin-vue-jsx</span></span></code></pre></div><p>添加配置</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> vueJsx </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vitejs/plugin-vue-jsx&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">vueJsx</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// options are passed on to @vue/babel-plugin-jsx</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> vueJsx </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vitejs/plugin-vue-jsx&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">vueJsx</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// options are passed on to @vue/babel-plugin-jsx</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>该插件只支持 Vue 3 版本</p></blockquote><p>新建一个 Demo 文件测试</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;hi&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;hi&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p>为了防止 Jest 测试时报错，使用 JSX 时还需要添加以下内容</p><ul><li>使用 JSX 前需要手动引入 Vue 中的 <code>h</code> 函数。</li><li>如果 JSX 中用到了 <code>&lt;&gt;&lt;/&gt;</code> 的语法，还需要引入 <code>Fragment</code>。</li></ul><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { h, Fragment } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { h, Fragment } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span></code></pre></div><h2 id="指令" tabindex="-1">指令 <a class="header-anchor" href="#指令" aria-label="Permalink to &quot;指令&quot;">​</a></h2><p>使用 v-show 指令</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { h, Fragment, defineComponent, ref, withDirectives, vShow } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">visible</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> { visible }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.visible </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.visible</span></span>
<span class="line"><span style="color:#E1E4E8;">          }}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &gt;on/off&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">withDirectives</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;hi&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            [</span></span>
<span class="line"><span style="color:#E1E4E8;">              [vShow, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.visible]</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">          )</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { h, Fragment, defineComponent, ref, withDirectives, vShow } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">visible</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> { visible }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">button</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">onClick</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.visible </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.visible</span></span>
<span class="line"><span style="color:#24292E;">          }}</span></span>
<span class="line"><span style="color:#24292E;">        &gt;on/off&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">withDirectives</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;hi&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;,</span></span>
<span class="line"><span style="color:#24292E;">            [</span></span>
<span class="line"><span style="color:#24292E;">              [vShow, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.visible]</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">          )</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><p>创建多插槽组件</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { h, Fragment, defineComponent, renderSlot } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 推荐写法</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;Container&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span><span style="color:#B392F0;">renderSlot</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$slots, </span><span style="color:#9ECBFF;">&#39;header&#39;</span><span style="color:#E1E4E8;">)}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span><span style="color:#B392F0;">renderSlot</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$slots, </span><span style="color:#9ECBFF;">&#39;default&#39;</span><span style="color:#E1E4E8;">)}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span><span style="color:#B392F0;">renderSlot</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$slots, </span><span style="color:#9ECBFF;">&#39;footer&#39;</span><span style="color:#E1E4E8;">)}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 或者</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;Container&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$slots.</span><span style="color:#B392F0;">header</span><span style="color:#E1E4E8;">?.()}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$slots.</span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">?.()}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$slots.</span><span style="color:#B392F0;">footer</span><span style="color:#E1E4E8;">?.()}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { h, Fragment, defineComponent, renderSlot } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 推荐写法</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;Container&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">      &lt;&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">header</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          {</span><span style="color:#6F42C1;">renderSlot</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$slots, </span><span style="color:#032F62;">&#39;header&#39;</span><span style="color:#24292E;">)}</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">header</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">main</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          {</span><span style="color:#6F42C1;">renderSlot</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$slots, </span><span style="color:#032F62;">&#39;default&#39;</span><span style="color:#24292E;">)}</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">main</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">footer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          {</span><span style="color:#6F42C1;">renderSlot</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$slots, </span><span style="color:#032F62;">&#39;footer&#39;</span><span style="color:#24292E;">)}</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">footer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 或者</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;Container&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">      &lt;&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">header</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          {</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$slots.</span><span style="color:#6F42C1;">header</span><span style="color:#24292E;">?.()}</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">header</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">main</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          {</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$slots.</span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">?.()}</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">main</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">footer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          {</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$slots.</span><span style="color:#6F42C1;">footer</span><span style="color:#24292E;">?.()}</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">footer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>使用多插槽组件</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { h, Fragment, defineComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Container </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./Container.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;slotDemo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: { Container },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">Container</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {{</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">header</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;头部&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;内容&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">footer</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;底部&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#79B8FF;">Container</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { h, Fragment, defineComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Container </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./Container.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;slotDemo&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  components: { Container },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#005CC5;">Container</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        {{</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">header</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;头部&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;内容&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">footer</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;底部&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;,</span></span>
<span class="line"><span style="color:#24292E;">        }}</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#005CC5;">Container</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,22),e=[o];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{g as __pageData,h as default};
