# qiankun-base 为主应用
# qiankun-vue 为子应用
```
主应用中micro/app.js 中配置各个子应用，entry中配置子应用的进入路径
注：上线以后，entry中的配置路径与activeRule配置的激活路径不能相同，否者会导致资源拉取完成，页面加载找不到从而白屏
```
# 4.主要配置配置：
```
vue.config.js
mian.js
micro/index.js
micro/apps.js
```
# 子应用配置
```
vue.config.js ----- configureWebpack/output/(library|libraryTarget|jsonpFunction)
mian.js
micro/actions.js
micro/public-path.js
```
# nginx 配置
```
主应用配置 可单独访问
 location /qiankun_base {
      root /usr/local/nginx/html/;
      try_files $uri $uri/ @router_qiankun_base;
      index  index.html;
  }
   location @router_qiankun_base{
    rewrite ^.*$ /qiankun_base/index.html last;
  }
子应用配置 可单独访问
  location /qiankun_vue {
      root /usr/local/nginx/html/;
      try_files $uri $uri/ @router_qiankun_vue;
      index  index.html;
  }
   location @router_qiankun_vue{
    rewrite ^.*$ /qiankun_vue/index.html last;
  }
```
 # 依照主应用中 entry 的配置（模板中配置的是qiankun_sub） 进入子应用的配置;且下面的配置适用与同服务器以及跨域服务器(需要配置目标服务器域名及地址）
 ```
  location /qiankun_sub {
    proxy_pass http://localhost/qiankun_vue;
    proxy_set_header Host $host:$server_port;
  }
  ```
