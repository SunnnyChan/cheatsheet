# Nginx

## sbin/nginx

* nginx -s reload|reopen|stop|quit  
重新加载配置文件|重启|停止|退出

* nginx -t   
测试配置是否有语法错误


## location

### 匹配模式

* location = /uri 　       
= 开头表示精确匹配，只有完全匹配上才能生效

* location ^~ /uri         
^~ 开头对URL路径进行前缀匹配，并且在正则之前

* location ~ pattern       
~开头表示区分大小写的正则匹配

* location ~* pattern      
~*开头表示不区分大小写的正则匹配

* location /uri            
不带任何修饰符，也表示前缀匹配，但是在正则匹配之后

* location /               
通用匹配，任何未匹配到其它 location 的请求都会匹配到，相当于 switch 中的 default

### 匹配优先级

**(location =) > (location 完整路径) > (location ^~ 路径) > (location ~,~* 正则顺序) > (location 部分起始路径) > (/)**

### 匹配规则

先 "=" 前缀指令匹配，如果匹配成功，则停止其他匹配；
普通字符串指令匹配，顺序是从长到短，匹配成功的 location 如果使用^~，则停止其他匹配（正则匹配）；
正则表达式指令匹配，按照配置文件里的顺序，成功就停止其他匹配；
如果第三步中有匹配成功，则使用该结果，否则使用第二步结果。

### 案例
```nginx
location  = / {
  # 精确匹配 / ，主机名后面不能带任何字符串
  [ configuration A ] 
}
location  / {
  # 因为所有的地址都以 / 开头，所以这条规则将匹配到所有请求
  # 但是正则和最长字符串会优先匹配
  [ configuration B ] 
}
location /documents/ {
  # 匹配任何以 /documents/ 开头的地址，匹配符合以后，还要继续往下搜索
  # 只有后面的正则表达式没有匹配到时，这一条才会采用这一条
  [ configuration C ] 
}
location ~ /documents/Abc {
  # 匹配任何以 /documents/ 开头的地址，匹配符合以后，还要继续往下搜索
  # 只有后面的正则表达式没有匹配到时，这一条才会采用这一条
  [ configuration CC ] 
}
location ^~ /images/ {
  # 匹配任何以 /images/ 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条。
  [ configuration D ] 
}
location ~* \.(gif|jpg|jpeg)$ {
  # 匹配所有以 gif,jpg或jpeg 结尾的请求
  # 然而，所有请求 /images/ 下的图片会被 config D 处理，因为 ^~ 到达不了这一条正则
  [ configuration E ] 
}
location /images/ {
  # 字符匹配到 /images/，继续往下，会发现 ^~ 存在
  [ configuration F ] 
}
location /images/abc {
  # 最长字符匹配到 /images/abc，继续往下，会发现 ^~ 存在
  # F与G的放置顺序是没有关系的
  [ configuration G ] 
}
location ~ /images/abc/ {
  # 只有去掉 config D 才有效：先最长匹配 config G 开头的地址，继续往下搜索，匹配到这一条正则，采用
    [ configuration H ] 
}
```

## nginx.conf

```nginx
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    server {
        listen 8099;

        # 静态站点
        location ~ ^/kb|cooking|literature|terms {
                root /home/sunny/site;

                # 解决 uri 末尾未加 “/”
                if (-d $request_filename) {
                        rewrite ^/(.*)([^/])$ $scheme://$host/$1$2/ permanent;
                }

                index index.html index.htm;
        }
        # 反向代理，转发请求
        location / {
                proxy_pass http://127.0.0.1:8090;
        }
    }
}
```
