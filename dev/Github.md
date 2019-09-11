# Github Handbook

## 搜索
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

## 问题
```md
默认情况下如果你本地把文件夹小写的修改成大写的，然后提交，会导致github上存在一份大写的和一份小写的文件夹。

* 要删除掉github上的小写文件，需要做的是:
本地执行 git rm -r --cached . 
然后重新 git push
```
## Github 工具
* [Github Flavored Markdown 语法介绍](https://github.com/guodongxiaren/README)
* [gh-md-toc](https://github.com/ekalinin/github-markdown-toc)
```sh 
gh-md-toc README.md  
```