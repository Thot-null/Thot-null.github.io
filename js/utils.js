const utils={debounce:function(t,e,n){let o;return function(){const i=this,a=arguments,s=n&&!o;clearTimeout(o),o=setTimeout((function(){o=null,n||t.apply(i,a)}),e),s&&t.apply(i,a)}},throttle:function(t,e,n){let o,i,a,s=0;n||(n={});const l=function(){s=!1===n.leading?0:(new Date).getTime(),o=null,t.apply(i,a),o||(i=a=null)};return function(){const r=(new Date).getTime();s||!1!==n.leading||(s=r);const c=e-(r-s);i=this,a=arguments,c<=0||c>e?(o&&(clearTimeout(o),o=null),s=r,t.apply(i,a),o||(i=a=null)):o||!1===n.trailing||(o=setTimeout(l,c))}},fadeIn:(t,e)=>{t.style.cssText=`display:block;animation: to_show ${e}s`},fadeOut:(t,e)=>{t.addEventListener("animationend",(function e(){t.style.cssText="display: none; animation: '' ",t.removeEventListener("animationend",e)})),t.style.animation=`to_hide ${e}s`},sidebarPaddingR:()=>{const t=window.innerWidth,e=document.body.clientWidth,n=t-e;t!==e&&(document.body.style.paddingRight=n+"px")},snackbarShow:(t,e,n)=>{const o=void 0!==e&&e,i=void 0!==n?n:5e3;document.styleSheets[0].addRule(":root","--heo-snackbar-time:"+i+"ms!important"),Snackbar.show({text:t,showAction:o,duration:i,pos:"top-center"})},copy:async t=>{try{await navigator.clipboard.writeText(t),utils.snackbarShow(GLOBALCONFIG.lang.copy.success,!1,2e3)}catch(t){utils.snackbarShow(GLOBALCONFIG.lang.copy.error,!1,2e3)}},getEleTop:t=>{let e=t.offsetTop,n=t.offsetParent;for(;null!==n;)e+=n.offsetTop,n=n.offsetParent;return e},randomNum:t=>Math.floor(Math.random()*t),timeDiff:(t,e)=>{var n=e.getTime()-t.getTime();return Math.floor(n/864e5)},scrollToDest:(t,e=500)=>{const n=window.pageYOffset,o=document.getElementById("page-header").classList.contains("nav-fixed");if((n>t||o)&&(t-=70),"scrollBehavior"in document.documentElement.style)return void window.scrollTo({top:t,behavior:"smooth"});let i=null;t=+t,window.requestAnimationFrame((function o(a){i=i||a;const s=a-i;n<t?window.scrollTo(0,(t-n)*s/e+n):window.scrollTo(0,n-(n-t)*s/e),s<e?window.requestAnimationFrame(o):window.scrollTo(0,t)}))},siblings:(t,e)=>[...t.parentNode.children].filter((n=>e?n!==t&&n.matches(e):n!==t)),isMobile:()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)};