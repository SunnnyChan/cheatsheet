# Github

   * [搜索](#搜索)
   * [Github 工具](#github-工具)
      * [Github Flavored Markdown 语法介绍](#github-flavored-markdown-语法介绍)
      * [gh-md-toc](#gh-md-toc)
   * [Q&amp;A](#qa)
      * [Github 文件名大小写不敏感](#github-文件名大小写不敏感)

# 构建表格
```text
<table>
        <tr>
            <th></th>
            <th>R</th>
            <th>F</th>
            <th>M</th>
        </tr>
        <tr>
            <th>影响因素</th>
            <th>1. 店铺记忆强度</br>2. 接触机会多少</br>3. 回购周期</th>
            <th>1. 品牌忠诚度</br>2. 店铺熟悉度</br>3. 客户会员等级</br>4. 购买习惯养成</th>
            <th>1. 消费能力</br>产品认可度</th>
        </tr>
        <tr>
            <th>应用场景</th>
            <th>决定接触策略</br>决定接触频次</br>决定刺激粒度</th>
            <th>决定资源投入</br>决定营销优先级</br>决定活动方案</th>
            <th>决定推荐商品</br>决定折扣门槛</br>决定活动方案</th>
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
