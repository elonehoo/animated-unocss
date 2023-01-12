import{d as s,f as n,c as a,o as l,h as p}from"./app.c59ef5f3.js";const o=p(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><p>In a project where you are using <a href="https://github.com/unocss/unocss" target="_blank" rel="noreferrer">UnoCSS</a>, run the following command:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># npm</span></span>
<span class="line"><span style="color:#80A665;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">install</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">--save-dev</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">animated-unocss</span></span>
<span class="line"><span style="color:#758575DD;"># yarn</span></span>
<span class="line"><span style="color:#80A665;">yarn</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">animated-unocss</span></span>
<span class="line"><span style="color:#758575DD;"># pnpm</span></span>
<span class="line"><span style="color:#80A665;">pnpm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">install</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">--save-dev</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">animated-unocss</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># npm</span></span>
<span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">install</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--save-dev</span><span style="color:#393A34;"> </span><span style="color:#B56959;">animated-unocss</span></span>
<span class="line"><span style="color:#A0ADA0;"># yarn</span></span>
<span class="line"><span style="color:#59873A;">yarn</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">animated-unocss</span></span>
<span class="line"><span style="color:#A0ADA0;"># pnpm</span></span>
<span class="line"><span style="color:#59873A;">pnpm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">install</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--save-dev</span><span style="color:#393A34;"> </span><span style="color:#B56959;">animated-unocss</span></span>
<span class="line"></span></code></pre></div><p>Then configure your unocss.config.ts to use the animations:</p><details class="details custom-block"><summary>Example</summary><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineConfig</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">presetAttributify</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">presetUno</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">unocss</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">animatedUno</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">animated-unocss</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineConfig</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">presets</span><span style="color:#666666;">: [</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">presetUno</span><span style="color:#666666;">(),</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">presetAttributify</span><span style="color:#666666;">(),</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">animatedUno</span><span style="color:#666666;">(),</span></span>
<span class="line"><span style="color:#666666;">  ],</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineConfig</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">presetAttributify</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">presetUno</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">unocss</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">animatedUno</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">animated-unocss</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineConfig</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">presets</span><span style="color:#999999;">: [</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">presetUno</span><span style="color:#999999;">(),</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">presetAttributify</span><span style="color:#999999;">(),</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">animatedUno</span><span style="color:#999999;">(),</span></span>
<span class="line"><span style="color:#999999;">  ],</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div></details><p>After proper config, you can use the animations of Animate.css the same way as you use those of UnoCss:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">h1</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">class</span><span style="color:#666666;">=</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">animated animated-bounce animated-infinite</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  Forever Bouncing Heading</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">h1</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">h1</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">class</span><span style="color:#999999;">=</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">animated animated-bounce animated-infinite</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  Forever Bouncing Heading</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">h1</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">NOTES</p><ul><li>If you are coming from classical Animate.css, please note that you need to reference the classes as <code>.animated-...</code> instead of <code>.animate__...</code>.</li><li>The animations this package provides are not <em>exactly</em> same as that of Animate.css. We have done some cleaning up to provide you with more consistent animations.</li></ul></div>`,8),e=[o],A=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","lastUpdated":1673487459000}'),t={name:"guide/index.md"},d=s({...t,setup(c){return n(()=>{document.getElementsByClassName("VPImage")[0].classList.add("animate-rubber-band","animate-count-infinite","animate-duration-1s")}),(r,y)=>(l(),a("div",null,e))}});export{A as __pageData,d as default};
