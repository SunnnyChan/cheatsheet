# Git

## Config
```md
config 配置有system级别 global（用户级别） 和local（当前仓库）
设置先从system-》global-》local  底层配置会覆盖顶层配置
分别使用--system/global/local 可以定位到配置文件
```

* 查看
```md
git config --system --list
git config --global  --list
git config --local  --list
```
* 用户信息
```sh
$ git config --global user.email XXX
$ git config --global user.name XXX
```

* git 默认对于文件名大小写是不敏感的
```sh 
$ git config core.ignorecase false
```

## 