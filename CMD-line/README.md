# Linux Command Line

## File
***目录搜索***
```sh
$ grep "XXX" . -rl //查询符合包含 “XXX”字符串的文件，输出多行文件名

```
***文件搜索***
```sh
$ find . -type f //输出多行文件名
$ find . -type f -print0 //输出文件列表
```
***文件管理***
```sh
$ readlink -f [file path] //获取文件绝对路径
```

## Text


## Network
```sh
$ lsof -i:[port] //通过网络端口号，查找运行进程（哪个进程占用了该端口）
```

## Softerware Management
```md
$ whereis eclipse // 查找软件安装
eclipse: /usr/bin/eclipse /usr/lib/eclipse /usr/share/eclipse
```
## OS




