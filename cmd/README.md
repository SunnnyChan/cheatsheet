# 命令行

   * [命令行](#命令行)
      * [进程管理](#进程管理)
      * [文本格式](#文本格式)
      * [文本查询](#文本查询)
      * [目录操作](#目录操作)
      * [文件查找](#文件查找)
      * [文件属性](#文件属性)
      * [文件传输](#文件传输)
      * [文件删除](#文件删除)
      * [压缩解压](#压缩解压)
      * [网络信息](#网络信息)
      * [网络管理](#网络管理)
      * [操作系统](#操作系统)
      * [输入输出](#输入输出)
      * [脚本编程](#脚本编程)
      * [Resource](#resource)

## 进程管理
```bash
lsof -p pid1,pid2 #进程打开的文件
```

## 文本格式
```bash
cat -n file.t 或 nl file.t # 输出文件行号
>filename #清空文件内容或创建空文件 #注意：文件存在会被清空，文件不存在会新建一个名为filename的文件。
```

## 文本查询
```bash
grep "XXX" . -rl  #查询符合包含 “XXX”字符串的文件，输出多行文件名
```

## 目录操作
```bash

```

## 文件查找
```bash
find . -type f #输出多行文件名
find . -type f -print0 #输出文件列表

ls -d */ 或 find -type d -maxdepth 1 #仅列出当前目录下所有的一级子目录

cp filename{,.bak} #快速备份文件

```
## 文件属性
```bash
readlink -f [file path] #获取文件绝对路径

ls -l --time-style '+%Y/%m/%d %H:%M:%S' #修改ls显示的时间格式，也可以修改变量 TIME_STYLE
find . -type f -ls # 查看一个目录树里的文件的大小和修改日期，相当于挨个目录做”ls -l”，而且输出的形式比用”ls -lR”更可读
```
## 文件传输
```bash
rsync -av --exclude "logs/"  /data/dc star@10.3.111.111:/home/deploy
```
## 文件删除
```bash
rm `find ./IPTV -name *.zh` -f      #删除目录下指定文件
ls |grep -v img|grep -v info|xargs rm   #删除指定文件以外的其他文件，例中文件名含有img和info的文件需要保留，其他文件删除。
ls >filelist && vi filelist  再 cat filelist |xargs rm  #适用于需要保留的文件没有特征的情况
> /path/to/file.log 再 rm /path/to/file.log #删除一个大文件
/bin/rm -f "$(tar ztf /path/to/file.tar.gz)" # 删除意外在当前文件夹下解压的文件
```
## 压缩解压
```bash
ls  | grep -E '^[0-9]{1,2}$' | xargs tar -cvf num.tar # 打包所有以两位数字命名的文件

```
## 网络信息
```bash
lsof -i:[port] #通过网络端口号，查找运行进程
```
## 网络管理
```bash
lsof -i 4 #IPv4协议的网络文件
lsof -i 6

```
## 操作系统
```bash
whereis eclipse #查找软件安装

```
## 输入输出
```bash
$df | column -t  #让输出更易读
```
## 脚本编程
```bash
read -a #将读取到的元素存入数组
```
## Resource
* [命令行的艺术](https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md)
 