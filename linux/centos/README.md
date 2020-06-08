# Centos

   * [Centos](#centos)
      * [yum](#yum)
      * [rpm](#rpm)

```sh
# cat /etc/*release*
```

## yum
```sh
# 安装实例
# 查找工具所在的软件包
yum  provides  */nslookup
```
```sh
yum list java*
```

```sh
# 常用安装
## tools
yum install -y lsof.x86_64
yum install man
yum install unzip
yum install lrzsz // rz、sz

yum -q install /usr/bin/iostat

yum install bind-utils -y   # nslookup
```
```sh
## Dev
yum install -y git
```
```sh
yum install -y java-1.8.0-openjdk.x86_64
yum install -y python3.x86_64
yum install groovy.noarch
yum install scala.x86_64
```
```sh
# C Dev
yum install install autoconf automake libtool
yum install gdb
```
```sh
# Java Dev
yum -y install maven.noarch
yum install -y java-11-openjdk-devel.x86_64 #jps
```

* 非 root 安装

```bash
$yum list 'openresty*'
$yumdownloader openresty.x86_64 --nogpgcheck
$ rpm2cpio openresty-1.15.8.3-1.el7.x86_64.rpm |cpio -idvm
```

## rpm