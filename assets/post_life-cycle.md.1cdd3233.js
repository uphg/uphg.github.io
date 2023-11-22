import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.42e95ed4.js";const p="/assets/react-life-cycle-use.7c153981.jpg",o="/assets/react-life-cycle-complete.88d2b5ff.jpg",C=JSON.parse('{"title":"React 生命周期","description":"","frontmatter":{"title":"React 生命周期","date":"2021-02-01T09:10:01.000Z","categories":"前端","tags":["React"],"next":{"text":"React Context","link":"/post/context"},"prev":{"text":"React Hooks","link":"/post/hooks"}},"headers":[],"relativePath":"post/life-cycle.md","filePath":"post/life-cycle.md","lastUpdated":null}'),e={name:"post/life-cycle.md"},t=l(`<h1 id="react-生命周期" tabindex="-1">React 生命周期 <a class="header-anchor" href="#react-生命周期" aria-label="Permalink to &quot;React 生命周期&quot;">​</a></h1><h2 id="vanilla-js-生命周期案例" tabindex="-1">Vanilla JS 生命周期案例 <a class="header-anchor" href="#vanilla-js-生命周期案例" aria-label="Permalink to &quot;Vanilla JS 生命周期案例&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// create</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> div </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">div.style.border </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;1px solid #cccccc&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">div.style.padding </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;20px&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> state </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">div.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">  &lt;p&gt;\${</span><span style="color:#E1E4E8;">state</span><span style="color:#9ECBFF;">}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  &lt;button&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  &lt;button&gt;die&lt;/button&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#6A737D;">// mount</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(div)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">div.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  state </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// update</span></span>
<span class="line"><span style="color:#E1E4E8;">  div.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;p&#39;</span><span style="color:#E1E4E8;">).innerText </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> state</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// destroy</span></span>
<span class="line"><span style="color:#E1E4E8;">div.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">)[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  div.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">).onclick </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">  div.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">)[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].onclick </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">  div.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  div </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// create</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> div </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">div.style.border </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;1px solid #cccccc&#39;</span></span>
<span class="line"><span style="color:#24292E;">div.style.padding </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;20px&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> state </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">div.innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#032F62;">  &lt;p&gt;\${</span><span style="color:#24292E;">state</span><span style="color:#032F62;">}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#032F62;">  &lt;button&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span style="color:#032F62;">  &lt;button&gt;die&lt;/button&gt;</span></span>
<span class="line"><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#6A737D;">// mount</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(div)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">div.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;button&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  state </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// update</span></span>
<span class="line"><span style="color:#24292E;">  div.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;p&#39;</span><span style="color:#24292E;">).innerText </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> state</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// destroy</span></span>
<span class="line"><span style="color:#24292E;">div.</span><span style="color:#6F42C1;">querySelectorAll</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;button&#39;</span><span style="color:#24292E;">)[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">].</span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  div.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;button&#39;</span><span style="color:#24292E;">).onclick </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">  div.</span><span style="color:#6F42C1;">querySelectorAll</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;button&#39;</span><span style="color:#24292E;">)[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">].onclick </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">  div.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  div </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>案例链接：<a href="https://jsbin.com/pihavuhuqe/5/edit?html,js,output" target="_blank" rel="noreferrer">https://jsbin.com/pihavuhuqe/5/edit?html,js,output</a></p></blockquote><h2 id="react-生命周期图" tabindex="-1">React 生命周期图 <a class="header-anchor" href="#react-生命周期图" aria-label="Permalink to &quot;React 生命周期图&quot;">​</a></h2><p style="text-align:center;">———— 简易版 ————</p><p><img src="`+p+'" alt="图片"></p><p style="text-align:center;">———— 完整版 ————</p><p><img src="'+o+`" alt="图片"></p><blockquote><p>图片来自：<a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/" target="_blank" rel="noreferrer">https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/</a></p></blockquote><h2 id="常用的生命周期" tabindex="-1">常用的生命周期 <a class="header-anchor" href="#常用的生命周期" aria-label="Permalink to &quot;常用的生命周期&quot;">​</a></h2><p>案例</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> React, { Component } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;react&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./styles.css&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">App</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 创建组件</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.state </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      number: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;创建 App&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 挂载组件之前（不推荐，unsafe）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">componentWillMount</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;挂载 App 之前&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;挂载/更新 App&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">className</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;App&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 挂载组件之后</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">componentDidMount</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;挂载 App 完毕&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 更新组件之前（不推荐，unsafe）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">componentWillUpdate</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;更新 App 之前&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 更新组件之后</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">componentDidUpdate</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;更新 App 之后&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 销毁之前</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">componentWillUnmount</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;App 销毁之前&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 父组件的 Props 值更新后（不推荐，unsafe）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">componentWillReceiveProps</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> React, { Component } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;react&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./styles.css&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">App</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 创建组件</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.state </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      number: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;创建 App&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 挂载组件之前（不推荐，unsafe）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">componentWillMount</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;挂载 App 之前&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;挂载/更新 App&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">className</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;App&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 挂载组件之后</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">componentDidMount</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;挂载 App 完毕&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 更新组件之前（不推荐，unsafe）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">componentWillUpdate</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;更新 App 之前&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 更新组件之后</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">componentDidUpdate</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;更新 App 之后&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 销毁之前</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">componentWillUnmount</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;App 销毁之前&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 父组件的 Props 值更新后（不推荐，unsafe）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">componentWillReceiveProps</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="关于-this-setstate" tabindex="-1">关于 <code>this.setState()</code> <a class="header-anchor" href="#关于-this-setstate" aria-label="Permalink to &quot;关于 \`this.setState()\`&quot;">​</a></h2><ol><li>不要在组件挂载前（mount）使用 <code>this.setState()</code></li><li>不要在组件更新的钩子中（update、render）使用 <code>this.setState()</code></li><li>不要再 constructor 中使用 <code>this.setState()</code></li></ol><h2 id="关于-ajax-请求" tabindex="-1">关于 Ajax 请求 <a class="header-anchor" href="#关于-ajax-请求" aria-label="Permalink to &quot;关于 Ajax 请求&quot;">​</a></h2><p>最好在 componentDidMount 或事件执行函数中发起请求（官方推荐）</p><blockquote><p>参考 React 官方文档：<a href="https://zh-hans.reactjs.org/docs/faq-ajax.html" target="_blank" rel="noreferrer">https://zh-hans.reactjs.org/docs/faq-ajax.html</a></p></blockquote><h2 id="关于-shouldcomponentupdate" tabindex="-1">关于 <code>shouldComponentUpdate()</code> <a class="header-anchor" href="#关于-shouldcomponentupdate" aria-label="Permalink to &quot;关于 \`shouldComponentUpdate()\`&quot;">​</a></h2><p>手动的判断当前值变化后是否需要重新 <code>render()</code>。<code>return true</code> 表示更新，<code>return false</code> 表示不更新。</p><p>返回值默认为 <code>true</code></p><p>它接收两个参数：[nextProps, nextState]，表示最新的 props 和 state</p><p>使用示例</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">shouldComponentUpdate</span><span style="color:#E1E4E8;">(nextProps, nextState) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果 this.state.n 没有变化，则不更新 render</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.state.n </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> nextState.n) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">shouldComponentUpdate</span><span style="color:#24292E;">(nextProps, nextState) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果 this.state.n 没有变化，则不更新 render</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.state.n </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> nextState.n) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,24),c=[t];function r(E,y,i,F,d,u){return a(),n("div",null,c)}const A=s(e,[["render",r]]);export{C as __pageData,A as default};
