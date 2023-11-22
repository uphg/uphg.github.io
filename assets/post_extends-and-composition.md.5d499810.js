import{_ as s,c as n,o as a,Q as p}from"./chunks/framework.42e95ed4.js";const g=JSON.parse('{"title":"继承与组合","description":"","frontmatter":{"title":"继承与组合","date":"2022-02-04T05:30:03.000Z","tags":["JavaScript","extends","composition"],"next":{"text":"Event Loop","link":"/post/event-loop"},"prev":{"text":"如何活的更久一点","link":"/post/live-longer"}},"headers":[],"relativePath":"post/extends-and-composition.md","filePath":"post/extends-and-composition.md","lastUpdated":null}'),l={name:"post/extends-and-composition.md"},o=p(`<h1 id="继承与组合" tabindex="-1">继承与组合 <a class="header-anchor" href="#继承与组合" aria-label="Permalink to &quot;继承与组合&quot;">​</a></h1><h2 id="类的使用" tabindex="-1">类的使用 <a class="header-anchor" href="#类的使用" aria-label="Permalink to &quot;类的使用&quot;">​</a></h2><p>用原生 JavaScript 声明一个类</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">age</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;">() {} </span><span style="color:#6A737D;">// 共有函数</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">playing</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {} </span><span style="color:#6A737D;">// 自有函数</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">age</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> age</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Jack&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// { name: &#39;Jack&#39;, age: 18, playing: ƒ () } [[Prototype]].sayHi()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">name</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">age</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;">() {} </span><span style="color:#6A737D;">// 共有函数</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">playing</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {} </span><span style="color:#6A737D;">// 自有函数</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">, </span><span style="color:#E36209;">age</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> age</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Jack&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// { name: &#39;Jack&#39;, age: 18, playing: ƒ () } [[Prototype]].sayHi()</span></span></code></pre></div><p>使用 TypeScript 声明相同的类</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">playing</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">age</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">) {}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Jack&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// { name: &#39;Jack&#39;, age: 18, playing: ƒ () } [[Prototype]].sayHi()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">playing</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {}</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">) {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Jack&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// { name: &#39;Jack&#39;, age: 18, playing: ƒ () } [[Prototype]].sayHi()</span></span></code></pre></div><h2 id="继承-extends" tabindex="-1">继承（extends） <a class="header-anchor" href="#继承-extends" aria-label="Permalink to &quot;继承（extends）&quot;">​</a></h2><p>假设两个类 人类，报社，都继承了 事件发布/订阅的功能，但它们都有各自的功能（打招呼、打印）</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EventEmitter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">cache</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">off</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EventEmitter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">() { </span><span style="color:#79B8FF;">super</span><span style="color:#E1E4E8;">() }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">报社</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EventEmitter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">() { </span><span style="color:#79B8FF;">super</span><span style="color:#E1E4E8;">() }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">person</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">baoshe</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">报社</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EventEmitter</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">cache</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">off</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EventEmitter</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">() { </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">() }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">报社</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EventEmitter</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">() { </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">() }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">person</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">baoshe</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">报社</span><span style="color:#24292E;">()</span></span></code></pre></div><h2 id="多态-polymorphism" tabindex="-1">多态（Polymorphism） <a class="header-anchor" href="#多态-polymorphism" aria-label="Permalink to &quot;多态（Polymorphism）&quot;">​</a></h2><p>子类重写父类的属性，以实现多态</p><p>多态的意思是不同的子类对同一个消息有不同的反应，如 人类的 on 方法会比 报社 的 on 方法多一个 log 功能</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EventEmitter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">() { </span><span style="color:#79B8FF;">super</span><span style="color:#E1E4E8;">() }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">eventName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;我要监听了&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">super</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(eventName, fn)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">person</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EventEmitter</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">() { </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">() }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#E36209;">eventName</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;我要监听了&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(eventName, fn)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">person</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">()</span></span></code></pre></div><h2 id="组合-composition" tabindex="-1">组合（composition） <a class="header-anchor" href="#组合-composition" aria-label="Permalink to &quot;组合（composition）&quot;">​</a></h2><p>使用组合实现继承的功能</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mixin</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">other</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">(value, other)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createEmitter</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">off</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> person1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Jack&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">mixin</span><span style="color:#E1E4E8;">(person1, </span><span style="color:#B392F0;">createEmitter</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#6A737D;">// {name: undefined, on: ƒ, emit: ƒ, off: ƒ} [[Prototype]] sayHi: ƒ sayHi()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">name</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mixin</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">, </span><span style="color:#E36209;">other</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">assign</span><span style="color:#24292E;">(value, other)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createEmitter</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">() {},</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">() {},</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">off</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> person1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Jack&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">mixin</span><span style="color:#24292E;">(person1, </span><span style="color:#6F42C1;">createEmitter</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#6A737D;">// {name: undefined, on: ƒ, emit: ƒ, off: ƒ} [[Prototype]] sayHi: ƒ sayHi()</span></span></code></pre></div><h2 id="组合解决的问题" tabindex="-1">组合解决的问题 <a class="header-anchor" href="#组合解决的问题" aria-label="Permalink to &quot;组合解决的问题&quot;">​</a></h2><p>假如有猫、狗两个类，它们都有动物的特征</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dog</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">wangwang</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">poop</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 拉屎</span></span>
<span class="line"><span style="color:#E1E4E8;">cat</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">miaomiao</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">poop</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dog</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">wangwang</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">poop</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 拉屎</span></span>
<span class="line"><span style="color:#24292E;">cat</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">miaomiao</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">poop</span><span style="color:#24292E;">()</span></span></code></pre></div><p>那么就可以写一个动物类，让猫、狗继承</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">animal</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">poop</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    dog</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">wangwang</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    cat</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">miaomiao</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">animal</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">poop</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    dog</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">wangwang</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    cat</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">miaomiao</span><span style="color:#24292E;">()</span></span></code></pre></div><p>假如还有两种机器人，一个是打扫卫生机器人，一个是杀人机器人，它们都具有 ai 智能，并且一个可以清理垃圾，一个可以杀人</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">cleaningRobot</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">ai</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">clean</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">MurderRobot</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">ai</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">kill</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 继承</span></span>
<span class="line"><span style="color:#E1E4E8;">Robot</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">ai</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    cleaningRobot</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">clean</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    MurderRobot</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">kill</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">cleaningRobot</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">ai</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">clean</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">MurderRobot</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">ai</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">kill</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 继承</span></span>
<span class="line"><span style="color:#24292E;">Robot</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">ai</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    cleaningRobot</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">clean</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    MurderRobot</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">kill</span><span style="color:#24292E;">()</span></span></code></pre></div><p>现在，要实现一个狗型杀人机器人（变态的需求总是不期而遇）</p><p>你会发现，用继承总是无法完美的实现该需求，因为继承不够灵活，如果它是狗，它就必须继承拉屎的功能，但是狗型杀人机器人是不需要拉屎的，它只需要汪汪、杀人、ai 智能。so，该需求需要用组合来实现</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 不用 继承 实现 dog</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createWang</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">wangwang</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`汪汪，我是\${</span><span style="color:#E1E4E8;">state</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createPoop</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">poop</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">state</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}拉屎了\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createDog</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { name }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">createWang</span><span style="color:#E1E4E8;">(state),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">createPoop</span><span style="color:#E1E4E8;">(state)</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 不用 继承 实现杀人机器人</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createAi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">ai</span><span style="color:#E1E4E8;">() { console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">state</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}智能机器人\`</span><span style="color:#E1E4E8;">) }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createKill</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">kill</span><span style="color:#E1E4E8;">() { console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">state</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}会杀人\`</span><span style="color:#E1E4E8;">) }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createMurderRobot</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { name }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">createAi</span><span style="color:#E1E4E8;">(state),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">createKill</span><span style="color:#E1E4E8;">(state)</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 不用 继承 实现狗型杀人机器人</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createMurderRobotDog</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { name }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">createWang</span><span style="color:#E1E4E8;">(state),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">createAi</span><span style="color:#E1E4E8;">(state),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">createKill</span><span style="color:#E1E4E8;">(state)</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dog</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createDog</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;小白&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">murderRobot</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createMurderRobot</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;小姜&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">murderRobotDog</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createMurderRobotDog</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Jack&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 不用 继承 实现 dog</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createWang</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">state</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> ({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">wangwang</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`汪汪，我是\${</span><span style="color:#24292E;">state</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createPoop</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">state</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> ({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">poop</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">state</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}拉屎了\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createDog</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">name</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">state</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { name }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">assign</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    {},</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">createWang</span><span style="color:#24292E;">(state),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">createPoop</span><span style="color:#24292E;">(state)</span></span>
<span class="line"><span style="color:#24292E;">  )</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 不用 继承 实现杀人机器人</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createAi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">state</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> ({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">ai</span><span style="color:#24292E;">() { console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">state</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}智能机器人\`</span><span style="color:#24292E;">) }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createKill</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">state</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> ({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">kill</span><span style="color:#24292E;">() { console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">state</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}会杀人\`</span><span style="color:#24292E;">) }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createMurderRobot</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">name</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">state</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { name }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">assign</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    {},</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">createAi</span><span style="color:#24292E;">(state),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">createKill</span><span style="color:#24292E;">(state)</span></span>
<span class="line"><span style="color:#24292E;">  )</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 不用 继承 实现狗型杀人机器人</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createMurderRobotDog</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">name</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">state</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { name }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">assign</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    {},</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">createWang</span><span style="color:#24292E;">(state),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">createAi</span><span style="color:#24292E;">(state),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">createKill</span><span style="color:#24292E;">(state)</span></span>
<span class="line"><span style="color:#24292E;">  )</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dog</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createDog</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;小白&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">murderRobot</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createMurderRobot</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;小姜&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">murderRobotDog</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createMurderRobotDog</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Jack&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div>`,26),e=[o];function c(t,r,E,y,i,F){return a(),n("div",null,e)}const C=s(l,[["render",c]]);export{g as __pageData,C as default};
