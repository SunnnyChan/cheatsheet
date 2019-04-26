# Centos

```sh
# cat /etc/*release*
```

## ~/.bash_profile
```sh
export PS1="\[\e[36m\][\[\e[36m\]\u\[\e[0m\]@\h \[\e[32m\]\w\[\e[36m\]]\[\e[0m\]\\$"

alias ll="ls -l "
alias l1="ls -1"
alias essh="ssh blj.elenet.me -l guang.chen"
alias grep="grep -n --color "
alias fgrep="fgrep -n --color "
```

## Yum
### yum 安装实例
* 查找工具所在的软件包
```sh
yum  provides  */nslookup
```
```sh
yum list java*
```
### 常用安装
```sh
yum install -y git
yum install -y java-1.8.0-openjdk.x86_64
yum install -y python3.x86_64
yum install -y lsof.x86_64
yum -q install /usr/bin/iostat
yum install bind-utils -y   # nslookup
yum install -y java-11-openjdk-devel.x86_64 #jps
yum install man
```
