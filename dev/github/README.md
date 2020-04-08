# Github

   * [搜索](#搜索)
   * [Github 工具](#github-工具)
      * [Github Flavored Markdown 语法介绍](#github-flavored-markdown-语法介绍)
      * [gh-md-toc](#gh-md-toc)
   * [Q&amp;A](#qa)
      * [Github 文件名大小写不敏感](#github-文件名大小写不敏感)

# 构建表格

```text
<style>
     table {border-style: solid; border-width: 1px; min-height: 25px; line-height: 25px;}   
     tr {border-style: double; border-width: 1px;}
     td {border-style: double; border-width: 1px; font-size:15px;}
</style>
<table>
        <tr >
            <th>埋点方式</th>
            <th>客户端埋点</th>
            <th>服务端埋点</th>
        </tr>
        <tr>
            <th>优势</th>
            <td>1.可以详细采集用户行为</br>2.可以完整采集用户本地设备标识</td>
            <td>1.可以准确采集业务操作状态和结果</br>2.数据完整上报可靠性更好</td>
        </tr>
        <tr>
            <th>劣势</th>
            <td>1.数据的上报受到网络环境影响</br>2.相同业务场景客户端入口较多时容易产生埋点遗漏</td>
            <td>1.不能直接获取用户行为数据，埋点也比较难系统化去做</td>
        </tr>
</table>
```

# Hotkey
* 快捷键: t 和 w
```text
源码浏览页面，按t可以快速进入模糊文件名搜索模式。
仓库主页，按w可以快速进行分支过滤
任意GitHub页面中，按?展示当前页面可用的快捷键
```
* 忽略空格: ?w=1  - 在任意的diff URL添加?w=1用来整理缩进
* 按范围过滤提交记录: master@{time}..master

# 搜索
* in:name 仓库名搜索
* in:descripton
* in:readme

* stars:>3000
* stars: 10..20
* fork:>3000

* language:java

* pushed:>2019-01-03
* license:apache-2.0

* user:sunnnychan
* user:joshlong language:java
* org:spring-cloud


# Github 工具
## Github Flavored Markdown 语法介绍
[Github 地址](https://github.com/guodongxiaren/README)
## gh-md-toc
[Github 地址](https://github.com/ekalinin/github-markdown-toc)
```sh 
gh-md-toc README.md  
```
# Q&A
## Github 文件名大小写不敏感
```md
默认情况下如果你本地把文件夹小写的修改成大写的，然后提交，会导致github上存在一份大写的和一份小写的文件夹。

* 要删除掉 Github 上的小写文件，需要做的是:
本地执行 git rm -r --cached . 
然后重新 git push
```
