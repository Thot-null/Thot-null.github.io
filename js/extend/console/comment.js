const changeContent=e=>(""===e||(e=e.replace(/<img.*?src="(.*?)"?[^\>]+>|<a[^>]+?href=["']?([^"']+)["']?[^>]*>([^<]+)<\/a>|<pre><code>.*?<\/pre>|<[^>]+>/g,((e,n,t,a)=>n?"[图片]":t?"[链接]":a?"[代码]":""))).length>150&&(e=e.substring(0,150)+"..."),e),getComment=()=>{const e=document.querySelector("#card-newest-comments .aside-list");twikoo.getRecentComments({envId:GLOBALCONFIG.comment.twikooUrl,region:"",pageSize:6,includeReply:!0}).then((function(e){const n=e.map((e=>{return{content:(n=e.comment,""===n||(n=n.replace(/<img.*?src="(.*?)"?[^\>]+>|<a[^>]+?href=["']?([^"']+)["']?[^>]*>([^<]+)<\/a>|<pre><code>.*?<\/pre>|<[^>]+>/g,((e,n,t,a)=>n?"[图片]":t?"[链接]":a?"[代码]":""))).length>150&&(n=n.substring(0,150)+"..."),n),avatar:e.avatar,nick:e.nick,url:`${e.url}#${e.id}`,date:new Date(e.created).toISOString()};var n}));generateHtml(n)})).catch((function(n){e.innerHTML="无法获取评论，请确认相关配置是否正确"}))},generateHtml=e=>{const n=document.querySelector("#card-newest-comments .aside-list");let t=e.length?e.map((e=>`\n    <div class='aside-list-item'>\n      <a href='${e.url}' class='thumbnail'>\n        <img src='${e.avatar}' alt='${e.nick}'>\n        <div class='name'><span>${e.nick}</span></div>\n      </a>\n      <div class='content'>\n        <a class='comment' href='${e.url}'>${e.content}</a>\n        <time class="datetime" datetime="${e.date}"></time>\n      </div>\n    </div>\n  `)).join(""):"没有评论";n.innerHTML=t,window.lazyLoadInstance&&window.lazyLoadInstance.update(),window.pjax&&window.pjax.refresh(n),chageTimeFormate()},newestCommentInit=()=>{document.querySelector("#card-newest-comments .aside-list")&&getComment()};