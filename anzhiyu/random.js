var posts=["posts/3c7ff775.html","posts/9c01d5dc.html","posts/b22560da.html","posts/e08e1294.html","posts/ec1a553d.html","posts/83dcefb7.html","posts/2e221b6.html","posts/5c2cce4.html","posts/4db4f1c5.html","posts/69304313.html","posts/8eba1e10.html","posts/2c6e0b40.html","posts/c094656d.html","posts/79666db.html","posts/cc4a862b.html","posts/143c1d86.html","posts/adfd0638.html","posts/abccfe92.html","posts/36447.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}