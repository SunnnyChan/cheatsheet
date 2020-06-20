# Shell

## 版本

### Shell 流派

```text
sh：
burne shell (sh)   
burne again shell (bash)   
```
```text
csh：
c shell (csh)   
tc shell (tcsh)   
korn shell (ksh)    
```

Bash 是在 GNU 项目中开发的，依据 GPL 发布。
csh、tcsh、zsh、ash 和 scsh 都是依据 BSD 或一种类似 BSD 的许可来发布。
Korn shell 可依据 Common Public License 使用。

### 系统安装的 Shell

```bash
$cat /etc/shells
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/bash
/bin/csh
/bin/dash
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
```

# 当前正在使用的Shell

```bash
# 最常用的查看Shell的命令，但不一定能实时反映当前Shell
$ echo $SHELL
/bin/zsh

# 以下用法并不是所有Shell都支持
$ echo $0
-zsh

# 从环境变量查看
$ env | grep SHELL
SHELL=/bin/zsh

# 查看当前进程
$ ps
  PID TTY           TIME CMD
70143 ttys000    0:00.03 /Applications/iTerm.app/Contents/MacOS/iTerm2 --server login -fp sunny
70145 ttys000    0:00.04 -zsh

# 先查看当前Shell的pid，再定位到此Shell进程
$ ps -ef | grep $(echo $$)
  503 70145 70144   0 10:12AM ttys000    0:00.05 -zsh
    0 70204 70145   0 10:22AM ttys000    0:00.00 ps -ef
  503 70206 70145   0 10:22AM ttys000    0:00.00 grep 70145

# 执行一个不存在的命令
$ tom
zsh: command not found: tom
```

# 切换Shell 

```bash
# 需要输入用户密码
$ chsh -s /usr/bin/bash
Changing shell for sunny.
密码：

$ echo $SHELL
/bin/bash

# 重新登录后生效
$ env | grep SHELL
SHELL=/usr/bin/bash

```

## 变量
### 内建变量
#### :sunny: $@与$*  

```bash
#!/usr/bin/env bash
function func1() {
  echo '>> TEST $* OUTPUT: '
  func2 $*
  echo '>> TEST $@ OUTPUT: '
  func2 $@
  echo '>> TEST "$*" OUTPUT: '
  func2 "$*"
  echo '>> TEST "$@" OUTPUT: '
  func2 "$@"
}

function func2() {
  echo '$1 -> '"$1"
  echo '$2 -> '"$2"
  echo '$3 -> '"$3"
}

# Test
func1 "1.1 1.2" "2.1"
```
$*、 $@、 "$*"、 "$@" 作为参数传递的输出：  
```txt
>> TEST $* OUTPUT:
$1 -> 1.1
$2 -> 1.2
$3 -> 2.1
>> TEST $@ OUTPUT:
$1 -> 1.1
$2 -> 1.2
$3 -> 2.1
>> TEST "$*" OUTPUT:
$1 -> 1.1 1.2 2.1
$2 ->
$3 ->
>> TEST "$@" OUTPUT:
$1 -> 1.1 1.2
$2 -> 2.1
$3 ->
```

总结：  

1. $* $@ 无区别，所有参数整体会按照 IFS指定分隔符(默认空格)分割，重新作为参数。  
2. "$*" "$@" 加双引号的引用才有意义，"$*"把参数作为整体传递，"$@" 仍按照原有参数传递。  

### 变量条件替换  

## 数组  

## 函数  

## 控制结构  

### case  

### for  

* Shell中常用的是：   

```bash
for((i=1;i<=10;i++))
for i in $(seq 10)
for i in `ls` 
for i in $(ls *.txt)
for i in $* 
for i in ${arr[@]}
for i in f1 f2 f3 
for i in {1..10}
for i in *.txt
```

for in语句与` `和$( )合用，利用` `或$( ) 将多行合为一行，实际是合为一个字符串数组。  
for num in $(seq 1 100)  

* for 循环中的变量  

```bash
$ cat for_var.sh 
#! /bin/sh -

file_name=/etc/passwd
var=0
for line in 
do
  ((var ++ ))
done < ${file_name}

echo "var: ${var}"
echo "line: ${line}"

$ ./for_var.sh 
var: 0
line: 
```
```bash
$ cat for_var_02.sh 
#! /bin/sh -

file_name=/etc/passwd
var=0
cat ${file_name} | for line in
do
  ((var ++ ))
done 

echo "var: ${var}"
echo "line: ${line}"

$ ./for_var_02.sh 
var: 0
line: 
```
```bash
$ cat for_var_01.sh 
#! /bin/sh -

file_name=/etc/passwd
var=0
IFS=$'\n'
for line in $( cat ${file_name}  )
do
  ((var ++ ))
done 
IFS=$'\n\t '

echo "var: ${var}"
echo "line: ${line}"

$ ./for_var_01.sh 
var: 39
line: code:x:506:508::/home/code:/bin/bash

$ grep -n "code:x:506:508::/home/code:/bin/bash" /etc/passwd
39:code:x:506:508::/home/code:/bin/bash
```
  
### while、until  
* while 形式  

```bash
while 命令/条件
do
      语句
done
```
```bash
until 命令/条件
do
      语句
done
```

unitl 循环不常用，但如果在等待一个事件的发生时，until就可以很好地发挥作用  

```bash
until who | grep "$user" > /dev/null
do
   sleep 30
done
以上代码，实现等待某个用户登录。
```

* while 循环中的变量  

```bash
$ cat while_var.sh 
#! /bin/sh -

file_name=/etc/passwd
var=0
while read line 
do
  ((var ++ ))
done < ${file_name}

echo "var: ${var}"
echo "line: ${line}"

$ ./while_var.sh 
var: 39
line: 
```

```bash
$ cat while_var_01.sh 
#! /bin/sh -

file_name=/etc/passwd
var=0

cat ${file_name} | while read line_var
do
  ((var ++ ))
done 

echo "var: ${var}"
echo "line: ${line_var}"

$ ./while_var_01.sh 
var: 0
line: 
```

```bash
$ cat while_var_02.sh 
#! /bin/sh -

file_name=/etc/passwd
var=0
exec 3<"${file_name}"
while read -u3 line 
do
  ((var ++ ))
done 
exec 3<&-

echo "var: ${var}"
echo "line: ${line}"

$ ./while_var_02.sh 
var: 39
line: 
```

注：使用管道，会产生子进程，while循环再子进程中执行，变量的改变，不会影响父进程。  

### for/while 逐行处理文件  

* cat while read line
```bash
function cat_while_read_line
{
  cat ${INFILE} | while read LINE
  do
    echo "${LINE}" >> ${OUTFILE}
  done
}
```
* while read LINE buttom  
```bash
while read LINE
do
  echo "${LINE}" >> ${OUTFILE}
done  <  ${INFILE} 
```

此方法是逐行处理文件中，效率最高的  

* for LINE cat FILE  
```bash
for LINE in `cat ${INFILE}`
do
  echo "${LINE}" >> ${OUTFILE}
done
```

* while read line FD IN  

```bash
exec  3<${INFILE}
while read -u3 LINE
do
    echo "${LINE}" >> ${OUTFILE}
done
exec 3<&-
```
```bash
exec 3<&0
exec 0<${INFILE}
while read LINE
do
    echo "${LINE}" >> ${OUTFILE}
done
exec 0<&3
exec 3<&-
```

read默认从标准输入读取，方法1可能会存在一个问题，即循环体中如果存在从标准输入读取的命令。  
会导致本该只有read读取的输入，被该命令读取了。  
这里将文件关联到文件描述符3，read从文件描述符3中读取。  
  
### for/while 逐行处理命令输出  

```bash
while read LINE
do
  echo "${LINE}" 
done  <  <(command)
```

两个左尖括号之间有空格  
<(command) 符号表示执行命令，并把命令输出指向循环底部。  

```bash
while read LINE
do
  echo "${LINE}" 
done  <<EOF
$(command)
EOF
```

使用here document方法重定向输入。  

# Here Doc  

```txt
shell脚本程序中，向一条命令传递输入的一种特殊方法是使用here文档。
一个here document就是一段带有特殊目的的代码段。
```

* 格式：  

```md
COMMAND <<SpecialString
...
SpecialString 用来界定命令序列的范围，
是一个特殊的字符序列，用来界定命令序列的范围，可自定义，但不能出现在传递命令的文档内容中。
```

* 应用   
```txt
主要用于有大量文本输入的情况
```

* 注意  

```txt
1. 某些工具是不能放入here document中运行的。
2. 结尾的limit string, 就是here document最后一行的limit string, 
    必须从第一个字符开始，它的前面不能够有任何前置的空白。
    而在这个limit string后边的空白也会引起异常，空白将会阻止limit string的识别。
3. 对于那些使用"here document"，并且非常复杂的任务, 
    最好考虑使用expect脚本语言，这种语言就是为了达到向交互程序添加输入的目的而量身定做的。
```

## 数据运算  

## Shell 解释过程  

## 大括号扩展  

```bash
# 形式上有一个可选的前缀，其后是一组包含在大括号中的用逗号分隔的字符串或者是序列表达式，最后是一个可选的后缀。
$ echo a{b,c}e
abe ace

$ echo {a..e}
a b c d e

$ echo {1..-1}
1 0 -1

# 嵌套，每个扩展字符串的结果是不排序的，依然按照从左到右的顺序依次扩展
$ echo a{{b,c,d}a,{e,f,g}b,h}i
abai acai adai aebi afbi agbi ahi

$ echo {a,b{1..3},c}
a b1 b2 b3 c

# Bash 4.0 中在大括号扩展中引入了增量的功能  
$ echo {2..10..2}
2 4 6 8 10  

# 如果扩展中的序列表达式中的数字是整数，并且有前导0时，  
# Bash 会试图让每个生产的量都含有同样多的位数，如果位数不同就会在前面补0  

$ echo {002..10..2}
002 004 006 008 010

# 注意：
# 大括号扩展在其他所有扩展之前进行，在其他扩展中的特殊字符都被保留下来。
# 为了防止被认为是大括号的一部分，“{”或者“,”可以用反斜杠转义。
# 为了避免与参数扩展冲突，大括号扩展不会识别字符串中的“${”
```

## 远程执行  

```bash
ssh user@remoteNode “cd /home ; ls”
```
