Linux
=================

   * [.bashrc](#bashrc)
      * [配置 alias 别名](#配置-alias-别名)
      * [函数化](#函数化)
      * [常用配置](#常用配置)
   * [Centos](#centos)
      * [Yum](#yum)
      * [rpm](#rpm)
   * [tmux](#tmux)
# .bashrc
## 配置 alias 别名
* 设置
```shell
$ touch ~/.bash_aliases

# ~/.bashrc 
if [ -e $HOME/.bash_aliases ]; then
 source $HOME/.bash_aliases
fi
```
* 常用别名
```shell
# 按文件大小排序
alias lt='ls --human-readable --size -1 -S --classify'
alias lt='du -sh * | sort -h' # MacOS、BSD

# 按修改时间排序
alias left='ls -t -1'

# 文件计数
alias count='find . -type f | wc -l'

# 只查看挂载的驱动器
alias mnt='mount | awk -F' ' '{ printf "%s\t%s\n",$1,$3; }' | column -t | egrep ^/dev/ | sort'
alias mnt='mount | grep -E ^/dev | column -t' #MacOS

# grep 历史中查找命令
alias gh='history|grep'

# 创建 Python 虚拟环境
alias ve='python3 -m venv ./venv'
alias va='source ./venv/bin/activate'

# 增加一个复制进度条
alias cpv='rsync -ah --info=progress2'

# 避免意外删除
alias tcn='mv --force -t ~/.local/share/Trash '

# 简化 Git 工作流
alias startgit='cd `git rev-parse --show-toplevel` && git checkout master && git pull' #查找 Git 项目的顶级目录
alias cg='cd `git rev-parse --show-toplevel`' # 将你带到 Git 项目的顶部
```
## 函数化
```bash
touch ~/.bash_functions

# 写.bashrc
if [ -e $HOME/.bash_functions ]; then
 source $HOME/.bash_functions
fi
```
```bash
# 切换目录并同时查看目录内容
function cl() {
 DIR="$*";
 # if no DIR given, go home
 if [ $# -lt 1 ]; then 
 DIR=$HOME;
 fi;
 builtin cd "${DIR}" && \
 # use your preferred ls command
 ls -F --color=auto
}
```
## 常用配置
```sh
export PS1="\[\e[36m\][\[\e[36m\]\u\[\e[0m\]@\h \[\e[32m\]\w\[\e[36m\]]\[\e[0m\]\\$"

alias ll="ls -l "
alias l1="ls -1"
alias essh="ssh blj.elenet.me -l guang.chen"
alias grep="grep -n --color "
alias fgrep="fgrep -n --color "
```

# Centos
```sh
# cat /etc/*release*
```
## Yum
```sh
# 安装实例
# 查找工具所在的软件包
yum  provides  */nslookup
```
```sh
yum list java*
```

```sh
# 常用安装
## tools
yum install -y lsof.x86_64
yum install man
yum install unzip
yum install lrzsz // rz、sz

yum -q install /usr/bin/iostat

yum install bind-utils -y   # nslookup
```
```sh
## Dev
yum install -y git
```
```sh
yum install -y java-1.8.0-openjdk.x86_64
yum install -y python3.x86_64
yum install groovy.noarch
yum install scala.x86_64
```
```sh
# C Dev
yum install install autoconf automake libtool
yum install gdb
```
```sh
# Java Dev
yum -y install maven.noarch
yum install -y java-11-openjdk-devel.x86_64 #jps
```
## rpm

# tmux
* ~/.tmux.conf
```bash
set -g default-terminal "screen-256color" 
```
* Plugins
[Tmux Plugin Manager](https://github.com/tmux-plugins/tpm)
