import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.42e95ed4.js";const F=JSON.parse('{"title":"Event Loop","description":"","frontmatter":{"title":"Event Loop","date":"2022-02-03T11:48:27.000Z","tags":["JavaScript","Event Loop","process.nextTick()"],"next":{"text":"在 Nuxt2 中使用 script setup + TS","link":"/post/build-nuxt2-setup"},"prev":{"text":"继承与组合","link":"/post/extends-and-composition"}},"headers":[],"relativePath":"post/event-loop.md","filePath":"post/event-loop.md","lastUpdated":null}'),p={name:"post/event-loop.md"},o=l(`<h1 id="event-loop" tabindex="-1">Event Loop <a class="header-anchor" href="#event-loop" aria-label="Permalink to &quot;Event Loop&quot;">​</a></h1><p>当 JavaScript 执行一个异步任务的时候（如：AJAX），JavaScript 什么都不会做，它只会通知 C++（单线程），C++ 通过轮询来查看延时任务什么时候完成，完成了再通知 JavaScript 继续执行该任务。EventLoop 就是 C++ 如何通过轮询执行 JavaScript 异步任务（也可以说 C++ 轮询执行 JavaScript 异步任务的规则）</p><p><strong>所以，EventLoop 主要讲事件循环的每个阶段和变化的过程</strong></p><h2 id="event-loop-的各个阶段" tabindex="-1">Event Loop 的各个阶段 <a class="header-anchor" href="#event-loop-的各个阶段" aria-label="Permalink to &quot;Event Loop 的各个阶段&quot;">​</a></h2><pre class="w-100% overflow-x-auto">   ┌───────────────────────────┐
┌─&gt;│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │&lt;─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
</pre><p>Node.js 执行时，会</p><ol><li>开启 EventLoop</li><li>执行 JavaScript 代码</li></ol><p>但是执行的顺序不一定是依次的，因为它们是两个不同的进程，可能有时候会 EventLoop 先被开启，有时候会 JavaScript 代码 先被执行</p><h2 id="setimmediate-settimeout" tabindex="-1">setImmediate() &amp; setTimeout() <a class="header-anchor" href="#setimmediate-settimeout" aria-label="Permalink to &quot;setImmediate() &amp; setTimeout()&quot;">​</a></h2><p>setImmediate 和 setTimeout 很相似，但是其回调函数的调用时机却不一样。</p><p>setImmediate() 的作用是在当前 poll 阶段结束后（check 阶段）调用一个函数。setTimeout() 的作用是在一段时间后（timers 阶段）调用一个函数。 这两者的回调的执行顺序取决于 setTimeout 和 setImmediate 被调用时的环境。</p><p>举例来说，如果在主模块中运行下面的脚本，那么两个回调的执行顺序是无法判断的：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;timeout&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">setImmediate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;immediate&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;timeout&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">setImmediate</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;immediate&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>如果第一次运行 Event Loop 进程先被执行，那么先执行的就是 setImmediate（JavaScript 还没有运行，timers 阶段还没有存储 setTimeout 的回调函数，所以 Event Loop 会进入到 poll 阶段，再进入 check 阶段，再回到 timers 阶段）</p><p>如果第一次运行 JavaScript 进程先被执行，那么先执行的就是 setTimeout（此时 JavaScript 已经运行，再运行 Event Loop 时，timers 阶段已经存储了 0 毫秒后执行的 setTimeout ，会立即执行 setTimeout ，再进入 poll 阶段）</p><p>但是，如果将上面的代码放到一个异步操作中，那么 setImmediate 一定是优先执行的，因为异步操作一定是在第一次运行之后执行（从 poll 阶段开始运行）</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;timeout&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setImmediate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;immediate&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// immediate</span></span>
<span class="line"><span style="color:#6A737D;">// timeout</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;timeout&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setImmediate</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;immediate&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// immediate</span></span>
<span class="line"><span style="color:#6A737D;">// timeout</span></span></code></pre></div><h2 id="process-nexttick" tabindex="-1">process.nextTick() <a class="header-anchor" href="#process-nexttick" aria-label="Permalink to &quot;process.nextTick()&quot;">​</a></h2><p>从技术上来讲 <code>process.nextTick()</code> 并不是 event loop 的一部分。不管 event loop 当前处于哪个阶段，nextTick 队列都是在当前阶段（poll 阶段）后就被执行了。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;timeout&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setImmediate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;immediate&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">nextTick</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;nextTick&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// nextTick</span></span>
<span class="line"><span style="color:#6A737D;">// immediate</span></span>
<span class="line"><span style="color:#6A737D;">// timeout</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;timeout&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setImmediate</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;immediate&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">  process.</span><span style="color:#6F42C1;">nextTick</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;nextTick&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// nextTick</span></span>
<span class="line"><span style="color:#6A737D;">// immediate</span></span>
<span class="line"><span style="color:#6A737D;">// timeout</span></span></code></pre></div><p>但是，如果把 <code>process.nextTick()</code> 放在一个异步任务中，它就总是会在当前异步任务的代码之后执行</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;timeout&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    process.</span><span style="color:#B392F0;">nextTick</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;async nextTick&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setImmediate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;immediate&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">nextTick</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;nextTick&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// nextTick</span></span>
<span class="line"><span style="color:#6A737D;">// immediate</span></span>
<span class="line"><span style="color:#6A737D;">// timeout</span></span>
<span class="line"><span style="color:#6A737D;">// async nextTick</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;timeout&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    process.</span><span style="color:#6F42C1;">nextTick</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;async nextTick&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setImmediate</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;immediate&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">  process.</span><span style="color:#6F42C1;">nextTick</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;nextTick&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// nextTick</span></span>
<span class="line"><span style="color:#6A737D;">// immediate</span></span>
<span class="line"><span style="color:#6A737D;">// timeout</span></span>
<span class="line"><span style="color:#6A737D;">// async nextTick</span></span></code></pre></div><h2 id="宏任务-微任务" tabindex="-1">宏任务 &amp; 微任务 <a class="header-anchor" href="#宏任务-微任务" aria-label="Permalink to &quot;宏任务 &amp; 微任务&quot;">​</a></h2><p>Node.js</p><ul><li>setTimeout -&gt; timers 阶段（很像宏任务）</li><li>setImmediate -&gt; check 阶段（很像宏任务）</li><li>nextTick -&gt; 当前任务执行完成后立即执行（很像微任务）</li><li><code>promise.then()</code> -&gt; 实现原理与 nextTick 相同，但是 promise 必须要在 <code>resolve()</code> 执行后才会把当前 <code>.then()</code> 中的函数放入任务队列中</li></ul><p>Chrome 浏览器</p><p>Chrome 浏览器中执行 JavaScript 有两个任务队列，一个是宏任务（等一会再执行），宏任务是在当前代码执行后等待指定时间后执行，如 setTimeout。一个是微任务（马上执行），微任务是再当前 JavaScript 代码执行后立即执行，如 <code>promise.then()</code> （<code>resolve()</code>调用后）</p><h2 id="相关代码题" tabindex="-1">相关代码题 <a class="header-anchor" href="#相关代码题" aria-label="Permalink to &quot;相关代码题&quot;">​</a></h2><p>setImmediate &amp; setTimeout</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">setImmediate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setImmediate1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setTimeout1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setTimeout2&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setImmediate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setImmediate2&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">setImmediate</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;setImmediate1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;setTimeout1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;setTimeout2&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setImmediate</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;setImmediate2&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>Promise async</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">async1</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">async2</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 相当于 Promise.resolve(async2()).then(() =&gt; console.log(2))</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">async2</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">async1</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">async1</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">async2</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 相当于 Promise.resolve(async2()).then(() =&gt; console.log(2))</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">async2</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">async1</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="参考文章" tabindex="-1">参考文章 <a class="header-anchor" href="#参考文章" aria-label="Permalink to &quot;参考文章&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6844903582538399752" target="_blank" rel="noreferrer">Event Loop、计时器、nextTick</a></li><li><a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/" target="_blank" rel="noreferrer">The Node.js Event Loop, Timers, and <code>process.nextTick()</code></a></li></ul>`,34),e=[o];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const g=s(p,[["render",t]]);export{F as __pageData,g as default};
