---
title: 前端应该知道的Nginx相关知识
date: 2022-03-03
categories:
 - nginx
tags:
 - nginx
---

## 前言

本文整理了 Nginx 常见的命令与配置，希望各位看官对 HTTP 有一定了解并能看懂基础的正则表达式；建议配合笔者的 [《20分钟，巩固你的HTTP知识体系》](https://juejin.cn/post/7052224696867094536) 这篇文章一同食用。

![other38.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/60b020fcfb2f4e75a8c5d53255814884~tplv-k3u1fbpfcp-watermark.awebp?)

## 基础命令

👉 列出 **nginx** 相关软件包

```
yum list | grep nginx
```

- **yum list**：列出所有软件清单
- **yum list installed**：列出已安装软件清单 -- 检测系统中是否安装某个软件
- **grep**：用于查找文件中符合条件的字符串

👉 安装 **nginx**

```
yum install nginx
```

👉 查看 **nginx** 版本信息

```
nginx -v
```

👉  列出 nginx 相关目录

```
rpm -ql nginx
```

👉 全格式显示所有 **nginx** 运行进程

```
ps -ef | grep nginx
```

- **ps**：列出系统中当前运行的进程
- **-ef**：-e 显示所有，-f 全格式显示，也可使用 **aux**，两者显示风格不同

👉 开机自启

```
# 设置开机自启
systemctl enable nginx

# 关闭开机自启
systemctl disable nginx
```

可用 **reboot** 重启服务器，配合 **ps -ef | grep nginx** 进行测试

👉 启动 & 停止 & 重启 & 重载

```
# 启动 nginx
systemctl start nginx ｜ nginx

# 停止 nginx
systemctl stop nginx | nginx -s stop

# 重启 nginx
systemctl restart nginx | nginx -s reopen

# 重载 nginx，更改 nginx 配置后需执行
systemctl reload nginx | nginx -s reload
```

👉 杀死单个进程

```
kill -9 PID（进程ID）
```

👉  查看 nginx 最终配置

```
nginx -T
```

👉  检查配置项是否有问题，每次更改完先检查后重载

```
# 当前目录下
nginx -t

# 不在当前目录
nginx -t -c <配置路径>
```

## 配置文件

**nginx.conf** 文件默认配置

![nginx1.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b0f5bf94ac4a4a479b8e59249bb1b4ed~tplv-k3u1fbpfcp-watermark.awebp?)

**上文日志格式中所涉及变量含义如下：**

| 变量                  | 含义                         |
| --------------------- | ---------------------------- |
| $remote_addr          | 客户端地址                   |
| $remote_user          | 已经过验证的用户名           |
| $time_local           | 通用日志格式的本地时间       |
| $request              | 完整的原始的请求行           |
| $status               | 下发给客户端的响应码         |
| $body_bytes_sent      | 下发给客户端的字节数         |
| $http_referer         | 当前请求上一次页面访问的地址 |
| $http_user_agent      | 客户端agent信息              |
| $http_x_forwarded_for | 获得用户ip                   |

## 静态资源配置

```
server {
  listen 80;
  server_name static.deeruby.com;

  location /static {
    root /home;
    # alias /home/static;

    autoindex on;             # 开启静态资源目录
    autoindex_exact_size off; # 文件单位 -- on：字节      off：KB、MB、GB
    autoindex_localtime off;  # 时间格式 -- on：服务器时间 off：GMT时间
    autoindex_format html;    # 目录格式
  }
}
```

访问 [static.deeruby.com/static/othe…](https://link.juejin.cn?target=http%3A%2F%2Fstatic.deeruby.com%2Fstatic%2Fother18.png) 成功，即配置成功

👉  **root 与 alias 区别**

- 图中静态资源所在目录为：**/home/static**；root 查找静态资源的路径为其填写路径拼接 location 路径，alias 则直接寻找其填写路径；
- alias 只能用于 location 中；

👉  **autoindex**

开启 **autoindex** 可访问文件根目录

![nginx3.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bbd444007a9745a99c912fd887b825d1~tplv-k3u1fbpfcp-watermark.awebp?)

## 反向代理

👉 我们在服务器上跑一个 node 项目，配置用 **域名** 来代替 **ip + 端口** 访问

```
server {
  listen       80;
  server_name  nginx.deeruby.com;
  location / {
    proxy_pass http://127.0.0.1:3002;
  }
}
```

其含义为用户访问 nginx.deeruby.com‾\underline{nginx.deeruby.com}nginx.deeruby.com 的时候，将其反向代理到 127.0.0.1:3002‾\underline{127.0.0.1:3002}127.0.0.1:3002 上

👉 解决跨域

tips：实际工作中，解决跨域一般为后端配置 CORS，详见笔者 [20分钟，巩固你的HTTP知识体系](https://juejin.cn/post/7052224696867094536#heading-3) 这篇文章中 **HTTP请求方法** 里 **Options** 部分

**hosts 配置**

```
127.0.0.1       nginx.deeruby.com
```

**nginx 配置**

```
server {
  listen       80;
  server_name  nginx.deeruby.com;

  location / {
    proxy_pass http://127.0.0.1:8080;
  }
  
   location /api {
      proxy_pass http://127.0.0.1:3002;
      proxy_set_header Host $host;
  }
}
```

其含义为用户访问 nginx.deeruby.com‾\underline{nginx.deeruby.com}nginx.deeruby.com 的时候，将其反向代理到 127.0.0.1:8080‾\underline{127.0.0.1:8080}127.0.0.1:8080 上（前端部分）；访问 nginx.deeruby.com/api‾\underline{nginx.deeruby.com/api}nginx.deeruby.com/api 的时候，将其反向代理到 127.0.0.1:3002/api‾\underline{127.0.0.1:3002/api}127.0.0.1:3002/api 上（后端部分）；此时前后端同域，以此解决跨域问题。

`proxy_set_header Host $host;`：用来在后端获取用户发送过来的请求头，我们看图说话，第一行输出为没配置该指令，第二行为配置了该指令

![nginx4.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4fade2add07f489b8bb389c414f45eb5~tplv-k3u1fbpfcp-watermark.awebp?)

## HTTPS

**配置HTTPS**

```
server {
  listen 443 ssl;                                      # 采用443端口，开启ssl
  listen [::]:443 ssl;
  server_name sso.deeruby.com;

  # 证书配置
  ssl_certificate /etc/nginx/ssl/sso/full_chain.pem;   # pem 文件路径
  ssl_certificate_key /etc/nginx/ssl/sso/private.key;  # key 文件路径

  ssl_session_cache shared:SSL:1m;                     # 共享缓存大小
  ssl_session_timeout 5m;                              # 超时时间
  ssl_ciphers HIGH:!aNULL:!MD5;                        # 加密算法
  ssl_prefer_server_ciphers on;                        # 优先采取服务器算法

  location / {
    proxy_pass http://127.0.0.1:3002;
  }
}
```

👉 访问 HTTP 自动跳转至 HTTPS

```
server {
  listen       80;
  server_name  sso.deeruby.com;
  rewrite ^(.*) https://$server_name$1 permanent;
}
```

**rewrite**

```
rewrite   <regex>    <replacement>       [flag]
            正则       跳转后的内容   rewrite支持的flag标记
            
[flag]：permanent -- 301 永久重定向；redirect -- 302 临时重定向；
```

故上文配置表示将当前路径永久重定向到 https://sso.deeruby.com/路径‾\underline{ https://sso.deeruby.com/路径 }https://sso.deeruby.com/路径 上

## 图片防盗链

**引言：referer请求头用于识别访问来源，以此来配置防盗链。**

**valid_referers**：设置可访问资源的规则，其不允许的规则 **$invalid_referer** 值为1，对不允许的规则返回403。

| 字段         | 含义                                |
| ------------ | ----------------------------------- |
| none         | 允许没有 referer 字段的请求访问资源 |
| blocked      | 允许非 HTTP(S) 开头的请求访问资源   |
| server_names | 允许指定域名 / IP 访问资源          |
| [string]     | 正则匹配定义可访问资源的网址        |

```
location ~/static/.*\.(jpg|jpeg|png|gif|webp)$ {
  root /home;
  valid_referers *.deeruby.com;
  if ($invalid_referer) {
    return 403;
  }
}
```

上述配置表示只有 ∗.deeruby.com*.deeruby.com∗.deeruby.com 可访问该资源，否则403报错

## 访问限制

```
location /static {
  root /home;
  allow 39.xxx.xxx.xxx;  # allow 允许
  deny all;              # deny  拒绝
}
```

表示允许 39.xxx.xxx.xxx 访问该目录，禁止其它所有 IP 访问，其生效顺序为谁先触发谁起作用。

## 禁用请求方法

仅允许使用 GET、POST、HEAD、OPTIONS 这四种请求，使用其余请求返回403

```
if ($request_method !~ ^(GET|POST|HEAD|OPTIONS)$) {
  return 403;
}
```

## 缓存

```
expires 7d;  # 缓存7天
expires -1;  # 不缓存
```

将动态文件与静态文件分别配置，对静态文件设置缓存即为动静分离

## PC端和移动端使用不同项目

```
location / {
  root /home/static/pc;
  if ($http_user_agent ~* '(mobile|android|iphone|ipod|phone)') {
    root /home/static/mobile;
  }
  index index.html;
}
```

注意：条件语句中不能使用别名，若有需求，可采取折中方案，重定向移动端网址

## 负载均衡

```
upstream backserver {              # 存放负载均衡所需变量
  ip_hash;                         # 根据用户访问 IP 的 hash 分配，这样每个访客固定访问一个后端服务，可有效解决动态网页存在的 session 共享问题
  # fair;                          # 根据页面大小和加载时间长短智能地进行负载均衡，响应时间短的优先分配
  server 127.0.0.1:9090; 
  server 127.0.0.1:8080 weight=2;  # 加权，权重越大，被访问概率越大
  server 127.0.0.1:7070 down;      # 该 server 不参与负载均衡
  server 127.0.0.1:6060 backup;    # 其余 server 均不可用时，使用这个
}
server {
  location / {
    proxy_pass http://backserver;  # 接入负载均衡相关配置
    proxy_redirect default;
  }
}
```

## 限速限流

**limit_conn 连接频率限制**：TCP连接

```
limit_conn_zone $binary_remote_addr zone=conname:10m;
server {
   limit_conn conname 3;  # 每个 IP 只能发起3个连接
}
```

**limit_req 请求频率限制**：API请求

```
limit_req_zone $binary_remtoe_addr zone=conname:1m rate=10r/s;
server {
   limit_req zone=conname burst=5 nodelay;  # 最大请求数为5，且超过的请求不延迟
}
```

| 内容                | 含义                                   |
| ------------------- | -------------------------------------- |
| $binary_remote_addr | 这里填写的是限流对象，我们采用客户端IP |
| zone=conname        | 给共享空间设置名称为：conname          |
| 10m                 | 空间大小：10兆                         |
| rate                | 速率，上述表示每秒最多发起10个请求     |
| limit_conn          | 限制每个name对应的连接数               |
| limit_req           | 限制每个name对应的请求数               |

```
server {
   limit_rate_after 10m;  # 前10兆大小不限速
   limit_rate 100k;       # 限速为 100KB/秒
}
```

这里可用 ab 命令进行压测

ab -n[number] -c[number] -k url

| 字段 | 含义             |
| ---- | ---------------- |
| -n   | 一共发送多少请求 |
| -c   | 同时发送多少请求 |
| -k   | keep-alive       |

# 其它

开启gzip

```
gzip on;
```