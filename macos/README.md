# MacOS

   * [Hot Key](#hot-key)
   * [Setting](#setting)
   * [.bash_profile](#bash_profile)
   * [Tools](#tools)
      * [brew](#brew)
      
# Hot Key
* Command + Option + Shift + Esc //强制退出程序
* Command + Space -> 输入“Activity Monitor” //打开任务管理器

# Setting

## .bash_profile

```bash
alias ll="ls -G -l "
alias l1="ls -G -1 "
alias grep="grep -n --color "
alias fgrep="fgrep -n --color "
alias which='alias | gwhich --tty-only --read-alias --show-dot --show-tilde'
```

# Tools

## brew
[brew.sh/index_zh-cn](https://brew.sh/index_zh-cn)
```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
```bash
brew install gradle
brew install scala
```

# Q&A

* 应用程序无法启动，如何调试？  

打开finder->应用程序->xxx.app->右键->显示包内容->然后MaxOS->双击Shell脚本

