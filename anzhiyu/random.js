var posts=["posts/104d9d61.html","posts/674aadf7.html","posts/3c7ff775.html","posts/5b4f75e0.html","posts/94f2ee5a.html","posts/b22560da.html","posts/3359038b.html","posts/9c01d5dc.html","posts/78276f6b.html","posts/e08e1294.html","posts/ec1a553d.html","posts/6c11a1f5.html","posts/4db4f1c5.html","posts/83dcefb7.html","posts/5c2cce4.html","posts/69304313.html","posts/2c6e0b40.html","posts/510196cc.html","posts/8eba1e10.html","posts/79666db.html","posts/143c1d86.html","posts/adfd0638.html","posts/36447.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}