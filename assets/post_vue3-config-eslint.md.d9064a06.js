import{_ as l,C as o,c as e,k as n,a as s,H as t,Q as a,o as c}from"./chunks/framework.42e95ed4.js";const q=JSON.parse('{"title":"Vue3 配置 ESLint","description":"","frontmatter":{"title":"Vue3 配置 ESLint","date":"2021-11-16T10:01:05.000Z","tags":["Vue3","ESLint"],"next":{"text":"Stream 入门","link":"/post/stream-getting-started"},"prev":{"text":"子进程","link":"/post/child-process"}},"headers":[],"relativePath":"post/vue3-config-eslint.md","filePath":"post/vue3-config-eslint.md","lastUpdated":null}'),r={name:"post/vue3-config-eslint.md"},E=a(`<h1 id="vue3-配置-eslint" tabindex="-1">Vue3 配置 ESLint <a class="header-anchor" href="#vue3-配置-eslint" aria-label="Permalink to &quot;Vue3 配置 ESLint&quot;">​</a></h1><p>记录 Vue3 项目配置 ESLint 的过程，主要配置流程：</p><ul><li>Vue ESLint 插件</li><li>TS 类型检测</li><li><s>Prettierrc 自动格式化</s></li></ul><h2 id="eslint-plugin-vue-插件" tabindex="-1">eslint-plugin-vue 插件 <a class="header-anchor" href="#eslint-plugin-vue-插件" aria-label="Permalink to &quot;eslint-plugin-vue 插件&quot;">​</a></h2><p>安装 <a href="https://eslint.vuejs.org/" target="_blank" rel="noreferrer">eslint-plugin-vue</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint-plugin-vue</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint-plugin-vue</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">要求</p><ul><li>ESLint v6.2.0 及以上</li><li>Node.js v12.22.x，v14.17.x，v16.x 及更高版本</li></ul></div><p>创建 <code>.eslintrc.js</code> 文件，添加以下内容</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  extends: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// add more generic rulesets here, such as:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// &#39;eslint:recommended&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;plugin:vue/vue3-recommended&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// override/add rules settings here, such as:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// &#39;vue/no-unused-vars&#39;: &#39;error&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  extends: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// add more generic rulesets here, such as:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// &#39;eslint:recommended&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;plugin:vue/vue3-recommended&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  rules: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// override/add rules settings here, such as:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// &#39;vue/no-unused-vars&#39;: &#39;error&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>如果使用了 jsx 语法，需要在 ESLint 配置中启用 JSX</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&quot;parserOptions&quot;: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      &quot;ecmaVersion&quot;: 2020,</span></span>
<span class="line"><span style="color:#E1E4E8;">      &quot;ecmaFeatures&quot;: {</span></span>
<span class="line"><span style="color:#85E89D;">+         &quot;jsx&quot;: true</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&quot;parserOptions&quot;: {</span></span>
<span class="line"><span style="color:#24292E;">      &quot;ecmaVersion&quot;: 2020,</span></span>
<span class="line"><span style="color:#24292E;">      &quot;ecmaFeatures&quot;: {</span></span>
<span class="line"><span style="color:#22863A;">+         &quot;jsx&quot;: true</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span></code></pre></div><p>在 <code>package.json</code> 中添加以下脚本</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;lint&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;eslint </span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">src/**/*.{js,ts,tsx,vue}</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;lint&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;eslint </span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">src/**/*.{js,ts,tsx,vue}</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>然后，运行 <code>yarn lint</code> 检测代码，运行 <code>yarn lint --fix</code> 自动修复</p><h2 id="添加-typescript-检测" tabindex="-1">添加 TypeScript 检测 <a class="header-anchor" href="#添加-typescript-检测" aria-label="Permalink to &quot;添加 TypeScript 检测&quot;">​</a></h2><p>安装 <a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin" target="_blank" rel="noreferrer">@typescript-eslint/eslint-plugin</a></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@typescript-eslint/parser</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@typescript-eslint/eslint-plugin</span></span>
<span class="line"><span style="color:#6A737D;"># 或 npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@typescript-eslint/parser</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@typescript-eslint/eslint-plugin</span></span>
<span class="line"><span style="color:#6A737D;"># 或 npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin</span></span></code></pre></div><p>在 <code>.eslintrc.js</code> 中添加以下配置</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">extends</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;plugin:@typescript-eslint/recommended&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 解决 TS 语法检测与 vue-eslint-parser 插件冲突的问题</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">parser</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vue-eslint-parser&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">parserOptions</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">parser</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;@typescript-eslint/parser&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ecmaVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2020</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">sourceType</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 配置 jsx</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ecmaFeatures</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">jsx</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">tsx</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">plugins</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;@typescript-eslint&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">extends</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;plugin:@typescript-eslint/recommended&#39;</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 解决 TS 语法检测与 vue-eslint-parser 插件冲突的问题</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">parser</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vue-eslint-parser&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">parserOptions</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">parser</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;@typescript-eslint/parser&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ecmaVersion</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2020</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">sourceType</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;module&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 配置 jsx</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ecmaFeatures</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">jsx</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">tsx</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">plugins</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;@typescript-eslint&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>然后添加以下配置，让 ESLint 只在 <code>*.ts</code>、<code>*.tsx</code>、<code>*.vue</code> 文件中启用 TS 格式化检测</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">rules</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁用所有文件中的 TS 规则</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;@typescript-eslint/explicit-module-boundary-types&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;off&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">overrides</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 指定后缀文件启用 TypeScript 规则</span></span>
<span class="line"><span style="color:#E1E4E8;">      files: [</span><span style="color:#9ECBFF;">&quot;*.ts&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;*.tsx&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;*.vue&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      rules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;@typescript-eslint/explicit-module-boundary-types&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;error&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">rules</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁用所有文件中的 TS 规则</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;@typescript-eslint/explicit-module-boundary-types&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;off&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">overrides</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 指定后缀文件启用 TypeScript 规则</span></span>
<span class="line"><span style="color:#24292E;">      files: [</span><span style="color:#032F62;">&quot;*.ts&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;*.tsx&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;*.vue&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      rules: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;@typescript-eslint/explicit-module-boundary-types&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;error&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,21),y={id:"添加-prettierrc",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#添加-prettierrc","aria-label":'Permalink to "添加 Prettierrc <Badge text="可选" />"'},"​",-1),u=a(`<p>由于 Prettierrc 可能与 ESLint 规则中的 Vue 规则冲突，此配置项为可选配置</p><p>安装</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prettier</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--dev</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--exact</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># exact 安装时保存为确切的版本</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint-plugin-prettier</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prettier</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--dev</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--exact</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># exact 安装时保存为确切的版本</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint-plugin-prettier</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--dev</span></span></code></pre></div><p>在 <code>.eslintrc.js</code> 中添加配置</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">extends</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// &#39;eslint:recommended&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;plugin:vue/vue3-recommended&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;prettier&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 确保 prettier 是此列表的最后一项</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">plugins</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;prettier&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">rules</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;prettier/prettier&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      { endOfLine: </span><span style="color:#9ECBFF;">&#39;auto&#39;</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// 自动兼容 Linux 与 Windows 换行</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">extends</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// &#39;eslint:recommended&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;plugin:vue/vue3-recommended&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;prettier&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 确保 prettier 是此列表的最后一项</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">plugins</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;prettier&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">rules</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;prettier/prettier&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      { endOfLine: </span><span style="color:#032F62;">&#39;auto&#39;</span><span style="color:#24292E;"> } </span><span style="color:#6A737D;">// 自动兼容 Linux 与 Windows 换行</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>添加 <code>.prettier</code> 配置文件</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;semi&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 关闭在每一条语句末尾添加分号</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;singleQuote&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用单引号</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;trailingComma&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;none&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 关闭对象末尾逗号</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;overrides&quot;</span><span style="color:#E1E4E8;">: [ </span><span style="color:#6A737D;">// 覆盖指定文件配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;files&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;.prettierrc&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;options&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;parser&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;json&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;semi&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 关闭在每一条语句末尾添加分号</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;singleQuote&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用单引号</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;trailingComma&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;none&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 关闭对象末尾逗号</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;overrides&quot;</span><span style="color:#24292E;">: [ </span><span style="color:#6A737D;">// 覆盖指定文件配置</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;files&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;.prettierrc&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;options&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;parser&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;json&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="eslint-配置参考" tabindex="-1">ESLint 配置参考 <a class="header-anchor" href="#eslint-配置参考" aria-label="Permalink to &quot;ESLint 配置参考&quot;">​</a></h2><details class="details custom-block"><summary><code>.eslintrc.js</code> 配置文件示例</summary><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 环境</span></span>
<span class="line"><span style="color:#E1E4E8;">  env: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/setup-compiler-macros&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 修复 defineProps、defineEmits 未定义的错误警告</span></span>
<span class="line"><span style="color:#E1E4E8;">    browser: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 浏览器</span></span>
<span class="line"><span style="color:#E1E4E8;">    node: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// Node</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  extends: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;eslint:recommended&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;plugin:@typescript-eslint/recommended&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;plugin:vue/vue3-recommended&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#9ECBFF;">&#39;@typescript-eslint&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;import&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  parser: </span><span style="color:#9ECBFF;">&#39;vue-eslint-parser&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  parserOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    parser: </span><span style="color:#9ECBFF;">&#39;@typescript-eslint/parser&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 防止与 vue-eslint-parser 插件冲突</span></span>
<span class="line"><span style="color:#E1E4E8;">    ecmaVersion: </span><span style="color:#79B8FF;">2020</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    sourceType: </span><span style="color:#9ECBFF;">&#39;module&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ecmaFeatures: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 配置 jsx</span></span>
<span class="line"><span style="color:#E1E4E8;">      jsx: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      tsx: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  overrides: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 指定 TS 类型检测启用的文件后缀</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      files: [</span><span style="color:#9ECBFF;">&#39;*.ts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;*.tsx&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;.vue&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      rules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;no-undef&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 参考：https://eslint.org/docs/rules/no-undef</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// js/ts</span></span>
<span class="line"><span style="color:#E1E4E8;">    indent: [</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 缩进风格</span></span>
<span class="line"><span style="color:#E1E4E8;">    quotes: [</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;single&#39;</span><span style="color:#E1E4E8;">, { </span><span style="color:#9ECBFF;">&#39;avoidEscape&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }], </span><span style="color:#6A737D;">// 使用单引号</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;comma-dangle&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;never&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 禁止对象尾逗号</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-restricted-syntax&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;WithStatement&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// with 语句</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;BinaryExpression[operator=&#39;in&#39;]&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// in 运算符</span></span>
<span class="line"><span style="color:#E1E4E8;">    ], </span><span style="color:#6A737D;">// 禁止特定语法，参考：https://eslint.org/docs/rules/no-restricted-syntax</span></span>
<span class="line"><span style="color:#E1E4E8;">    camelcase: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 必须使用驼峰式命名法，参考：https://eslint.org/docs/rules/camelcase</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-var&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-empty&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 禁止空的块语句，参考：https://eslint.org/docs/rules/no-empty</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;prefer-const&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;warn&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      { destructuring: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">/* ignoreReadBeforeAssign: true */</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ], </span><span style="color:#6A737D;">// 使用 const 声明固定值，参考：https://cn.eslint.org/docs/rules/prefer-const</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;prefer-template&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用模板字面量拼接字符串，参考：https://eslint.org/docs/rules/prefer-template</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;object-shorthand&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用 ES6+ 语法简写对象，参考：https://eslint.org/docs/rules/object-shorthand</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-constant-condition&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 禁止在条件语句中使用常量，参考：https://eslint.org/docs/rules/no-constant-condition</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// TS</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;@typescript-eslint/explicit-module-boundary-types&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 关闭全局 TS 检测，只检测指定后缀文件，参考：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md#configuring-in-a-mixed-jsts-codebase</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;@typescript-eslint/no-explicit-any&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 关闭：禁止使用 any 类型，参考：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// &#39;@typescript-eslint/no-non-null-assertion&#39;: &#39;off&#39;, // 关闭：禁止使用 ! 进行非空断言，参考：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;@typescript-eslint/no-non-null-asserted-optional-chain&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 关闭：禁止在可选链后使用 ! 进行非空断言，参考：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// vue</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/no-v-html&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 关闭：禁止使用 v-html</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/require-default-prop&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 关闭：props 指定类型后必须带有默认值</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// &#39;vue/require-explicit-emits&#39;: &#39;off&#39;, // 关闭：必须要显示的声明 emits，才能使用</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/multi-word-component-names&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 关闭：组件名必须由多个单词组成</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/component-definition-name-casing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// &#39;vue/comma-dangle&#39;: &#39;off&#39;, // 尾部逗号</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/multiline-html-element-content-newline&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/singleline-html-element-content-newline&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/max-attributes-per-line&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        singleline: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        multiline: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 环境</span></span>
<span class="line"><span style="color:#24292E;">  env: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/setup-compiler-macros&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 修复 defineProps、defineEmits 未定义的错误警告</span></span>
<span class="line"><span style="color:#24292E;">    browser: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 浏览器</span></span>
<span class="line"><span style="color:#24292E;">    node: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// Node</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  extends: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;eslint:recommended&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;plugin:@typescript-eslint/recommended&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;plugin:vue/vue3-recommended&#39;</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span><span style="color:#032F62;">&#39;@typescript-eslint&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;import&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  parser: </span><span style="color:#032F62;">&#39;vue-eslint-parser&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  parserOptions: {</span></span>
<span class="line"><span style="color:#24292E;">    parser: </span><span style="color:#032F62;">&#39;@typescript-eslint/parser&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 防止与 vue-eslint-parser 插件冲突</span></span>
<span class="line"><span style="color:#24292E;">    ecmaVersion: </span><span style="color:#005CC5;">2020</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    sourceType: </span><span style="color:#032F62;">&#39;module&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    ecmaFeatures: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 配置 jsx</span></span>
<span class="line"><span style="color:#24292E;">      jsx: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      tsx: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  overrides: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 指定 TS 类型检测启用的文件后缀</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      files: [</span><span style="color:#032F62;">&#39;*.ts&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;*.tsx&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;.vue&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      rules: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;no-undef&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;off&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 参考：https://eslint.org/docs/rules/no-undef</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  rules: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// js/ts</span></span>
<span class="line"><span style="color:#24292E;">    indent: [</span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 缩进风格</span></span>
<span class="line"><span style="color:#24292E;">    quotes: [</span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;single&#39;</span><span style="color:#24292E;">, { </span><span style="color:#032F62;">&#39;avoidEscape&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }], </span><span style="color:#6A737D;">// 使用单引号</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;comma-dangle&#39;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;never&#39;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 禁止对象尾逗号</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-restricted-syntax&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;WithStatement&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// with 语句</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;BinaryExpression[operator=&#39;in&#39;]&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// in 运算符</span></span>
<span class="line"><span style="color:#24292E;">    ], </span><span style="color:#6A737D;">// 禁止特定语法，参考：https://eslint.org/docs/rules/no-restricted-syntax</span></span>
<span class="line"><span style="color:#24292E;">    camelcase: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 必须使用驼峰式命名法，参考：https://eslint.org/docs/rules/camelcase</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-var&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-empty&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 禁止空的块语句，参考：https://eslint.org/docs/rules/no-empty</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;prefer-const&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;warn&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      { destructuring: </span><span style="color:#032F62;">&#39;all&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">/* ignoreReadBeforeAssign: true */</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    ], </span><span style="color:#6A737D;">// 使用 const 声明固定值，参考：https://cn.eslint.org/docs/rules/prefer-const</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;prefer-template&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用模板字面量拼接字符串，参考：https://eslint.org/docs/rules/prefer-template</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;object-shorthand&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;off&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用 ES6+ 语法简写对象，参考：https://eslint.org/docs/rules/object-shorthand</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-constant-condition&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 禁止在条件语句中使用常量，参考：https://eslint.org/docs/rules/no-constant-condition</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// TS</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;@typescript-eslint/explicit-module-boundary-types&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;off&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 关闭全局 TS 检测，只检测指定后缀文件，参考：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md#configuring-in-a-mixed-jsts-codebase</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;@typescript-eslint/no-explicit-any&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;off&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 关闭：禁止使用 any 类型，参考：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// &#39;@typescript-eslint/no-non-null-assertion&#39;: &#39;off&#39;, // 关闭：禁止使用 ! 进行非空断言，参考：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;@typescript-eslint/no-non-null-asserted-optional-chain&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;off&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 关闭：禁止在可选链后使用 ! 进行非空断言，参考：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// vue</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/no-v-html&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;off&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 关闭：禁止使用 v-html</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/require-default-prop&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;off&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 关闭：props 指定类型后必须带有默认值</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// &#39;vue/require-explicit-emits&#39;: &#39;off&#39;, // 关闭：必须要显示的声明 emits，才能使用</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/multi-word-component-names&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;off&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 关闭：组件名必须由多个单词组成</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/component-definition-name-casing&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;off&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// &#39;vue/comma-dangle&#39;: &#39;off&#39;, // 尾部逗号</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/multiline-html-element-content-newline&#39;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;off&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/singleline-html-element-content-newline&#39;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;off&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/max-attributes-per-line&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        singleline: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        multiline: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details>`,9);function F(d,C,m,g,h,v){const p=o("Badge");return c(),e("div",null,[E,n("h2",y,[s("添加 Prettierrc "),t(p,{text:"可选"}),s(),i]),u])}const f=l(r,[["render",F]]);export{q as __pageData,f as default};
