# Maven

## 依赖

### dependencyManagement  

在dependencyManagement元素中声明所依赖的jar包的版本号等信息，  
那么所有子项目再次引入此依赖jar包时则无需显式的列出版本号。  

Maven 会沿着父子层级向上寻找拥有 dependencyManagement 元素的项目，然后使用它指定的版本号。

* 优点  
当想升级或切换到另一个版本时，只需要在顶层父容器里更新，而不需要逐个修改子项目；  
另外如果某个子项目需要另外的一个版本，只需要声明version即可。

* 注意事项  

dependencyManagement中定义的只是依赖的声明，并不实现引入，因此子项目需要显式的声明需要用的依赖。

### 继承

可以定义项目的父类项目，用于继承父项目的依赖、插件、属性等信息。
继承是包依赖管理的最简单手段。  

### 聚合  

聚合就是module形式。  

```xml
    <modules>
        <module>demo-spring</module>  <!-- Spring 框架 -->
    </modules>
```

在父项目上面打包、编译等操作都会直接操作子模块，而不需要我们在其他项目上一个个打包等操作。  
