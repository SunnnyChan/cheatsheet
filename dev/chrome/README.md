# Chrome

   * [截屏](#截屏)
   * [extensions](#extensions)

## Debug JS

Chrome F12 打开调试界面后， 点击 Sources 页面。  
右边就可以设置断点，单步调试。  

例如可以选择右边Event Listener Breakpoints 选项，选中 mouse 里面的 click 或其他事件。  
这样你点击页面上的按钮就会触发断点，js会停在你点击的事件位置上。  

# 截屏

1. Ctrl+Shift+I（Windows）/F12 或者 Alt+Command+I（Mac）  
2. Ctrl+Shift +P(Windows) 或 Command+Shift+P(Mac)  
3. 输入"Screen"  
  ◆ 整个网页：Capture full size screenshot  
  ◆ 节点网页：Capture node screenshot  
  ◆ 当前屏幕：Capture screenshot  

# extensions  

* install extension  

```bash
mv extension.crx extension.zip
unzip extension.zip
```

扩展程序 -> 开发者模式 -> 加载已解压的扩展程序  

```txt
* Octotree
* Github file icons
* OneTab
```
