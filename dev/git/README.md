# Git  

## 工具

* [gitignore.io - Create useful .gitignore files for your project](https://www.gitignore.io/)  

## 场景化命令行

```bash 
# 查看README.md的修改历史
git log -p README.mdgit log -S’PATTERN’ 

# 搜索修改符合 stupid 的历史
git log -S'stupid'git add -p 

# 删除database.yml被保存的记录，但是不影响本地文件
git rm --cached database.yml 

# 返回全部master分支的历史记录，包括未被合并到当前分支的提交记录。
git log ..master 

# 返回已合并分支列表或未合并的分支列表。这个命令对合并前检查非常有用。
git branch –merged & git branch –no-merged 

# 远程仓库更换名称，本地如何修改
git remote set-url origin newAddress # 适用于本地和远程的代码没得任何问题，就是远程仓库改了个名称  

```  

## Merge

* no-ff  
在合并的同时会生成一个新的commit，这样，从分支历史上就可以看出分支信息。  

```bash
$ git merge --no-ff -m "merge with no-ff" dev
```

## Commit

### Commit Message

#### Angular 规范

```xml
<type>(<scope>): <subject> // Header
// 空一行
<body>
// 空一行
<footer>
```

Header 是必需的，Body 和 Footer 可以省略。  
不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。避免自动换行影响美观。  

type用于说明 commit 的类别，只允许使用下面7个标识:  
feat：新功能（feature）  
fix：修补bug  
docs：文档（documentation）  
style： 格式（不影响代码运行的变动）  
refactor：重构（即不是新增功能，也不是修改bug的代码变动）  
test：增加测试  
chore：构建过程或辅助工具的变动  

如果type为feat和fix，则该 commit 将肯定出现在 Change log 之中。  
其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。  

scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。  

subject是 commit 目的的简短描述，不超过50个字符  
以动词开头，使用第一人称现在时，比如change，而不是changed或changes  
第一个字母小写  
结尾不加句号（.）  

Body 部分是对本次 commit 的详细描述，可以分成多行。  
两个注意点:  
1. 使用第一人称现在时，比如使用change而不是changed或changes。  
2. 应该说明代码变动的动机，以及与以前行为的对比。  

Footer 部分只用于两种情况：  
1. 不兼容变动  
如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。  
2. 关闭 Issue  
如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。  
可以一次关闭多个 issue 。  

Revert:
有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header。  
如： 
revert: feat(pencil): add 'graphiteWidth' option  
This reverts commit 667ecc1654a317a13331b17617d973392f415f02.  

Body部分的格式是固定的，必须写成This reverts commit <hash>.，其中的hash是被撤销 commit 的 SHA 标识符。  
如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。  
如果两者在不同的发布，那么当前 commit，会出现在 Change log 的Reverts小标题下面。  

#### Commitizen

Commitizen是一个撰写合格 Commit message 的工具。 
npm install -g commitizen  

安装changelog，是生成changelog的工具  
npm install -g conventional-changelog  
npm install -g conventional-changelog-cli  

检验上面两个工具是否安装成功  
npm ls -g -depth=0  

使其支持Angular的Commit message格式  
commitizen init cz-conventional-changelog --save --save-exact  

#### validate-commit-msg

用于检查 Node 项目的 Commit message 是否符合格式。  

#### conventional-changelog

生成 Change log 的工具

## Config

config 配置有system级别 global（用户级别） 和local（当前仓库）  
设置先从system-》global-》local  底层配置会覆盖顶层配置  
分别使用--system/global/local 可以定位到配置文件  

* 查看
```bash
$ git config --system --list
$ git config --global  --list
$ git config --local  --list
```
* 用户信息
```bash
$ git config --global user.email XXX
$ git config --global user.name XXX
```

* git 默认对于文件名大小写是不敏感的
```sh 
$ git config core.ignorecase false
``` 

## 错误

error: you need to resolve your current index first  

退回merge，git reset --merge    
