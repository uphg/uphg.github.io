import{_ as i,c as a,o as n,ag as t}from"./chunks/framework.Ds6Eueu6.js";const g=JSON.parse('{"title":"Python 基础","description":"","frontmatter":{"title":"Python 基础","date":"2025-03-25T11:15:47.000Z","tags":["Python"],"prev":{"text":"Python 函数","link":"/post/py-function"},"next":{"text":"Python 的安装与开发环境构建（Windows）","link":"/post/py-install"}},"headers":[],"relativePath":"post/py-base.md","filePath":"post/py-base.md","lastUpdated":1743001453000}'),l={name:"post/py-base.md"};function h(e,s,p,k,d,r){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="python-基础" tabindex="-1">Python 基础 <a class="header-anchor" href="#python-基础" aria-label="Permalink to &quot;Python 基础&quot;">​</a></h1><h2 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h2><h3 id="整数" tabindex="-1">整数 <a class="header-anchor" href="#整数" aria-label="Permalink to &quot;整数&quot;">​</a></h3><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10_000_000_000</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 支持千分位分隔符（Python 3.6+）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">a1b2_c3d4</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       # 十六进制表示（Python 3.6+）</span></span></code></pre></div><h3 id="浮点数" tabindex="-1">浮点数 <a class="header-anchor" href="#浮点数" aria-label="Permalink to &quot;浮点数&quot;">​</a></h3><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.23e9</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 1.23 × 10⁹（科学计数法）</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.2e-5</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 0.000012</span></span></code></pre></div><h3 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to &quot;字符串&quot;">​</a></h3><ul><li>转义字符：<code>\\n</code>（换行）、<code>\\t</code>（制表符）、<code>\\\\</code>（反斜杠）</li><li>原始字符串：<code>r&#39;...&#39;</code> 禁止转义</li><li>多行字符串：<code>&#39;&#39;&#39;...&#39;&#39;&#39;</code> 或 \`&quot;&quot;&quot;...&quot;&quot;&quot;</li></ul><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">路径：C:</span><span style="--shiki-light:#22863A;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">ew_folder</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：路径：C:\\new_folder</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;&#39;第一行</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">第二行&#39;&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="布尔值" tabindex="-1">布尔值 <a class="header-anchor" href="#布尔值" aria-label="Permalink to &quot;布尔值&quot;">​</a></h3><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> False</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # → False（与运算）</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> or</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> False</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # → True （或运算）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">not</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> True</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">           # → False（非运算）</span></span></code></pre></div><h3 id="空值" tabindex="-1">空值 <a class="header-anchor" href="#空值" aria-label="Permalink to &quot;空值&quot;">​</a></h3><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               # 表示空值（不同于 0 或空字符串）</span></span></code></pre></div><h3 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h3><ul><li>命名规则：字母/下划线开头，可包含字母、数字、下划线</li><li>动态类型：变量可随时重新赋值不同数据类型</li></ul><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user_name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Alice&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span></span></code></pre></div><h3 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-label="Permalink to &quot;常量&quot;">​</a></h3><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MAX_CONNECTIONS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 约定全大写表示常量（实际仍可修改）</span></span></code></pre></div><hr><h2 id="列表-list-与元组-tuple" tabindex="-1">列表（list）与元组（tuple） <a class="header-anchor" href="#列表-list-与元组-tuple" aria-label="Permalink to &quot;列表（list）与元组（tuple）&quot;">​</a></h2><h3 id="列表-可变序列" tabindex="-1">列表（可变序列） <a class="header-anchor" href="#列表-可变序列" aria-label="Permalink to &quot;列表（可变序列）&quot;">​</a></h3><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">colors </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;red&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;green&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">colors.append(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;blue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 追加元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">colors.insert(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pink&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 插入到索引1位置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">colors.pop()              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 移除末尾元素 → &#39;blue&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">colors.pop(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 移除索引0元素 → &#39;red&#39;</span></span></code></pre></div><h3 id="元组-不可变序列" tabindex="-1">元组（不可变序列） <a class="header-anchor" href="#元组-不可变序列" aria-label="Permalink to &quot;元组（不可变序列）&quot;">​</a></h3><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dimensions </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1920</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1080</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 常规定义</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">single_item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">42</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,)           </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 单元素元组（必须有逗号）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mixed_tuple </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可包含可变元素（列表可修改）</span></span></code></pre></div><hr><h2 id="流程控制" tabindex="-1">流程控制 <a class="header-anchor" href="#流程控制" aria-label="Permalink to &quot;流程控制&quot;">​</a></h2><h3 id="条件判断" tabindex="-1">条件判断 <a class="header-anchor" href="#条件判断" aria-label="Permalink to &quot;条件判断&quot;">​</a></h3><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 多级条件判断</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;成年&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">elif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 13</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;青少年&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;儿童&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="模式匹配-python-3-10" tabindex="-1">模式匹配（Python 3.10+） <a class="header-anchor" href="#模式匹配-python-3-10" aria-label="Permalink to &quot;模式匹配（Python 3.10+）&quot;">​</a></h3><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 简单匹配</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">status_code </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 404</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> status_code:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;成功&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;未找到&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;未知状态&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 复杂匹配</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;gcc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;file1.c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;file2.c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> args:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;gcc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;缺少源文件&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;gcc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, file1, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">files]:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;编译：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">file1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 和 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(files)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 个文件&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;clean&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;清理项目&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><hr><h2 id="循环结构" tabindex="-1">循环结构 <a class="header-anchor" href="#循环结构" aria-label="Permalink to &quot;循环结构&quot;">​</a></h2><h3 id="for-循环" tabindex="-1">for 循环 <a class="header-anchor" href="#for-循环" aria-label="Permalink to &quot;for 循环&quot;">​</a></h3><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 遍历序列</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">total </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    total </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num</span></span></code></pre></div><h3 id="while-循环" tabindex="-1">while 循环 <a class="header-anchor" href="#while-循环" aria-label="Permalink to &quot;while 循环&quot;">​</a></h3><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 条件循环</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">countdown </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> countdown </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(countdown)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    countdown </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;发射！&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="字典-dict-与集合-set" tabindex="-1">字典（dict）与集合（set） <a class="header-anchor" href="#字典-dict-与集合-set" aria-label="Permalink to &quot;字典（dict）与集合（set）&quot;">​</a></h2><h3 id="字典-dict" tabindex="-1">字典（dict） <a class="header-anchor" href="#字典-dict" aria-label="Permalink to &quot;字典（dict）&quot;">​</a></h3><p><strong>键值对存储结构</strong>，基于哈希表实现，具有 O(1) 时间复杂度的高效查找</p><h4 id="创建与访问" tabindex="-1">创建与访问 <a class="header-anchor" href="#创建与访问" aria-label="Permalink to &quot;创建与访问&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>grades = {&#39;Michael&#39;: 95, &#39;Bob&#39;: 75, &#39;Tracy&#39;: 85}</span></span>
<span class="line"><span>print(grades[&#39;Michael&#39;])  # → 95</span></span></code></pre></div><h4 id="安全访问方法" tabindex="-1">安全访问方法 <a class="header-anchor" href="#安全访问方法" aria-label="Permalink to &quot;安全访问方法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 检查键是否存在</span></span>
<span class="line"><span>if &#39;Thomas&#39; in grades:</span></span>
<span class="line"><span>    print(grades[&#39;Thomas&#39;])</span></span>
<span class="line"><span></span></span>
<span class="line"><span># get() 方法避免 KeyError</span></span>
<span class="line"><span>print(grades.get(&#39;Thomas&#39;))     # → None（无输出）</span></span>
<span class="line"><span>print(grades.get(&#39;Thomas&#39;, -1)) # → -1</span></span></code></pre></div><h4 id="删除元素" tabindex="-1">删除元素 <a class="header-anchor" href="#删除元素" aria-label="Permalink to &quot;删除元素&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>removed_value = grades.pop(&#39;Bob&#39;)  # → 75</span></span>
<span class="line"><span>print(grades)  # → {&#39;Michael&#39;: 95, &#39;Tracy&#39;: 85}</span></span></code></pre></div><h4 id="特性说明" tabindex="-1">特性说明 <a class="header-anchor" href="#特性说明" aria-label="Permalink to &quot;特性说明&quot;">​</a></h4><ol><li><strong>键唯一性</strong>：每个键只能出现一次</li><li><strong>键不可变性</strong>：键必须是不可变类型（字符串/数字/元组）</li><li><strong>有序性</strong>：Python 3.7+ 保持插入顺序</li><li><strong>动态扩展</strong>：可随时添加新键值对</li></ol><hr><h3 id="集合-set" tabindex="-1">集合（set） <a class="header-anchor" href="#集合-set" aria-label="Permalink to &quot;集合（set）&quot;">​</a></h3><p><strong>无序不重复元素集</strong>，常用于去重和集合运算</p><h4 id="创建与修改" tabindex="-1">创建与修改 <a class="header-anchor" href="#创建与修改" aria-label="Permalink to &quot;创建与修改&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 两种创建方式</span></span>
<span class="line"><span>s1 = {1, 2, 3}</span></span>
<span class="line"><span>s2 = set([1, 2, 2, 3])  # → {1, 2, 3}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 元素操作</span></span>
<span class="line"><span>s1.add(4)    # {1,2,3,4}</span></span>
<span class="line"><span>s1.remove(4) # {1,2,3}</span></span></code></pre></div><h4 id="集合运算" tabindex="-1">集合运算 <a class="header-anchor" href="#集合运算" aria-label="Permalink to &quot;集合运算&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>a = {1, 2, 3}</span></span>
<span class="line"><span>b = {2, 3, 4}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(a &amp; b)  # 交集 → {2, 3}</span></span>
<span class="line"><span>print(a | b)  # 并集 → {1, 2, 3, 4}</span></span>
<span class="line"><span>print(a - b)  # 差集 → {1}</span></span></code></pre></div><h4 id="重要特性" tabindex="-1">重要特性 <a class="header-anchor" href="#重要特性" aria-label="Permalink to &quot;重要特性&quot;">​</a></h4><ol><li><strong>元素唯一性</strong>：自动去重</li><li><strong>元素不可变性</strong>：不能包含可变对象（如列表）</li><li><strong>无序性</strong>：遍历顺序不等于创建顺序</li><li><strong>高效查询</strong>：基于哈希表实现成员检测</li></ol><hr><h3 id="对比表格" tabindex="-1">对比表格 <a class="header-anchor" href="#对比表格" aria-label="Permalink to &quot;对比表格&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">特性</th><th style="text-align:left;">dict</th><th style="text-align:left;">set</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>存储结构</strong></td><td style="text-align:left;">键值对</td><td style="text-align:left;">唯一元素</td></tr><tr><td style="text-align:left;"><strong>元素要求</strong></td><td style="text-align:left;">键不可变，值任意</td><td style="text-align:left;">元素必须不可变</td></tr><tr><td style="text-align:left;"><strong>查询速度</strong></td><td style="text-align:left;">O(1) 键查询</td><td style="text-align:left;">O(1) 成员检测</td></tr><tr><td style="text-align:left;"><strong>典型应用</strong></td><td style="text-align:left;">快速映射关系</td><td style="text-align:left;">去重、集合运算</td></tr><tr><td style="text-align:left;"><strong>内存占用</strong></td><td style="text-align:left;">较高（存储键值对）</td><td style="text-align:left;">较低（仅存储键）</td></tr><tr><td style="text-align:left;"><strong>插入顺序保持</strong></td><td style="text-align:left;">Python 3.7+ 支持</td><td style="text-align:left;">不保持</td></tr></tbody></table><hr><h3 id="使用注意" tabindex="-1">使用注意 <a class="header-anchor" href="#使用注意" aria-label="Permalink to &quot;使用注意&quot;">​</a></h3><ol><li><p><strong>可变对象检测</strong>：以下操作会报错</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 无效操作示例</span></span>
<span class="line"><span>invalid_set = {[1, 2], 3}        # TypeError</span></span>
<span class="line"><span>invalid_dict_key = {[&#39;name&#39;]: 1} # TypeError</span></span></code></pre></div></li><li><p><strong>替代方案</strong>：需存储可变对象时，可使用冻结集合</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>valid_set = {frozenset([1,2]), tuple([3,4])}</span></span></code></pre></div></li><li><p><strong>性能选择</strong>：</p><ul><li>需要键值关联 → 选择字典</li><li>只需记录存在性 → 选择集合</li></ul></li></ol>`,62)]))}const E=i(l,[["render",h]]);export{g as __pageData,E as default};
