# 命令 Collections

```json
file {
    file ouput {
        cat - concatenate files and print on the standard output
        head - output the first part of files
        tail - output the last part of files
        tailf - follow the growth of a log file
    }
    file edit {
        join - join lines of two files on a common field
        uniq - remove duplicate lines from a sorted file
        sync - flush filesystem buffers 
        tr - translate or delete characters
        
        dd - convert and copy a file
    }
    file attribute {
        file - determine file type
        du - estimate file space usage
        touch - change file timestamps
        stat - display file or filesystem status
    }
    file name {
        basename - strip directory and suffix from filenames
        dir - list directory contents
    }
    file search{
        find - search for files in a directory hierarchy
        grep, egrep, fgrep - print lines matching a pattern
    }
    file format {
        dos2unix，unix2dos - Windows 和 Linux 文件格式转换
            
    }
    file diff {
        diff - find differences between two files
        comm - compare two sorted files line by line
    }
    file pack {
        gzip, gunzip, zcat - compress or expand files
        zip, zipcloak, zipnote, zipsplit - package and compress (archive) files, unzip - list, test and extract compressed files in a ZIP archive
        
    }
    file encode {
        iconv - Convert encoding of given files from one encoding to another
    }
}
format oupt {
    column - columnate lists
    nl - number lines of files
    strings - print the strings of printable characters in files.
    hexdump - hexdump - ascii, decimal, hexadecimal, octal dump
    xxd - make a hexdump or do the reverse.
        
    tsort - perform topological sort 拓扑排序
}
preocess {
    pstree - display a tree of processes
    killall - kill processes by name 杀死指定名字的进程
    pidof - find the process ID of a running program. 查询运行程序的进程PID
    wait - Wait for the specified process and report its termination status.
    pidstat - Report statistics for Linux tasks.
    
    gdb { 
        strace - trace system calls and signals
        pstack - print a stack trace of a running process
    }
}
jobs {
    at, batch, atq, atrm - queue, examine or delete jobs for later execution
}
statistics {
    wc - print the number of newlines, words, and bytes in files
}
network{
    arp - manipulate the system ARP cache
    route - show / manipulate the IP routing table
    nslookup - query Internet name servers interactively
    ifconfig - configure a network interface

    nc - arbitrary TCP and UDP connections and listens
}
terminal {
    terminal output {
        yes - output a string repeatedly until killed
        echo - display a line of text
        tee - read from standard input and write to standard output and files
    }
    screen - screen manager with VT100/ANSI terminal emulation
    reset，tset - terminal initialization 
    clear - clear the terminal screen
    tty - print the file name of the terminal connected to standard input
    stty - change and print terminal line settings
}
system {
    system load info {
        uptime - Tell how long the system has been running.
        iostat - Report Central Processing Unit (CPU) statistics and input/output statistics for devices, partitions and network filesystems (NFS).
        top - display Linux tasks
        vmstat - Report virtual memory statistics
        monitor {
            watch - execute a program periodically, showing output fullscreen
        }
    }
    os info {
        uname - print system information
        lsb_release - prints certain LSB (Linux Standard Base) and Distribution information 查看当前系统的发行版信息
    }
    user {
        useradd，userdel，usermod - add, delete, modify a user account
        who - show who is logged on
        w - Show who is logged on and what they are doing.
        last, lastb - show listing of last logged in users
        ac -  print statistics about users’ connect time
    }
    authority {
        chgrp - change group ownership
        chmod - change file access permissions
        chown - change file owner and group
        chroot - run command or interactive shell with special root directory
    }     
    system service {
        insmod - simple program to insert a module into the Linux Kernel
        mount， umount - mount/unmount file systems
        chkconfig - updates and queries runlevel information for system services
    }
    hardware info {
        free - Display amount of free and used memory in the system
        dmidecode - 查看硬件信息
        lsmod - program to show the status of modules in the Linux Kernel
    }    
}
utility {
    bc - An arbitrary precision calculator language
    date - print or set the system date and time
    cal - displays a calendar
    hwclock - query and set the hardware clock (RTC)  查询和设置硬件时钟
    tzselect - select a time zone 选择时区
}
shell code {
    system evn {
        env - run a program in a modified environment
        set - set [--abefhkmnptuvxBCHP] [-o option] [arg ...]
    }
    false - do nothing, unsuccessfully
    true - do nothing, successfully
    sleep，usleep - delay for a specified amount of time, sleep some number of microseconds(usleep)
    eval - Read ARGs as input to the shell and execute the resulting command(s).
}
command {
    type - indicate how it would be interpreted if used as a command name.
    complete - specify how arguments are to be completed. bash参数补全功能
    xargs - build and execute command lines from standard input
    exec - Exec FILE, replacing this shell with the specified program.
    cmd search {
        whatis - search the whatis database for complete words.
        which - shows the full path of (shell) commands.
        whereis - locate the binary, source, and manual page files for a command
        apropos -  search the whatis database for strings 根据关键字搜索命令
    }
    help {
        help - BASH_BUILTINS info 显示Bash内建命令的帮助信息
        info - read Info documents
    }
}
C language {
    ar - create, modify, and extract from archives
    ldd - print shared library dependencies
}
```

ac -  print statistics about users’ connect time  
apropos -  根据关键字搜索命令  
ar - create, modify, and extract from archives  
arp - manipulate the system ARP cache  
at, batch, atq, atrm - queue, examine or delete jobs for later execution  
basename - strip directory and suffix from filenames  
bc - An arbitrary precision calculator language  
date - print or set the system date and time  
dd - convert and copy a file  
diff - find differences between two files  
dir - list directory contents  
dmidecode - 查看硬件信息  
du - estimate file space usage  
dos2unix，unix2dos - Windows 和 Linux 文件格式转换  
cal - displays a calendar  
cat - concatenate files and print on the standard output  
column - columnate lists  
comm - compare two sorted files line by line  
complete - specify how arguments are to be completed. bash参数补全功能  
chgrp - change group ownership  
chkconfig - updates and queries runlevel information for system services  
chmod - change file access permissions  
chown - change file owner and group  
chroot - run command or interactive shell with special root directory  
clear - clear the terminal screen  
echo - display a line of text  
env - run a program in a modified environment  
exec - Exec FILE, replacing this shell with the specified program.  
eval - Read ARGs as input to the shell and execute the resulting command(s).  
false - do nothing, unsuccessfully  
find - search for files in a directory hierarchy  
free - Display amount of free and used memory in the system  
grep, egrep, fgrep - print lines matching a pattern  
gzip, gunzip, zcat - compress or expand files  
head - output the first part of files  
hexdump - 十六进制查看器  
help - 显示Bash内建命令的帮助信息  
hwclock - query and set the hardware clock (RTC)  查询和设置硬件时钟  
iconv - Convert encoding of given files from one encoding to another  
ifconfig - configure a network interface  
info - read Info documents  
insmod - simple program to insert a module into the Linux Kernel  
iostat - Report Central Processing Unit (CPU) statistics and input/output statistics for devices, partitions and network filesystems (NFS).  
join - join lines of two files on a common field  
killall - kill processes by name 杀死指定名字的进程  
last, lastb - show listing of last logged in users  
lsb_release - prints certain LSB (Linux Standard Base) and Distribution information 查看当前系统的发行版信息  
lsmod - program to show the status of modules in the Linux Kernel  
mount， umount - mount/unmount file systems  
nc - arbitrary TCP and UDP connections and listens  
nl - number lines of files  
nslookup - query Internet name servers interactively  
pidof - find the process ID of a running program. 查询运行程序的进程PID  
pidstat - Report statistics for Linux tasks.  
pstree - display a tree of processes  
pstack - print a stack trace of a running process  
reset，tset - terminal initialization     
tail - output the last part of files  
tailf - follow the growth of a log file  
tee - read from standard input and write to standard output and files  
top - display Linux tasks  
touch - change file timestamps  
true - do nothing, successfully  
tr - translate or delete characters  
tsort - perform topological sort 拓扑排序  
tty - print the file name of the terminal connected to standard input  
type - indicate how it would be interpreted if used as a command name.  
tzselect - select a time zone 选择时区  
route - show / manipulate the IP routing table  
screen - screen manager with VT100/ANSI terminal emulation  
set - set [--abefhkmnptuvxBCHP] [-o option] [arg ...]  
sleep，usleep - delay for a specified amount of time, sleep some number of microseconds(usleep)  
stat - display file or filesystem status  
stty - change and print terminal line settings  
strings - print the strings of printable characters in files.  
strace - trace system calls and signals  
sync - flush filesystem buffers   
uname - print system information  
uniq - remove duplicate lines from a sorted file  
useradd，userdel，usermod - add, delete, modify a user account  
uptime - Tell how long the system has been running.  
vmstat - Report virtual memory statistics  
w - Show who is logged on and what they are doing.  
wait - Wait for the specified process and report its termination status.  
watch - execute a program periodically, showing output fullscreen  
wc - print the number of newlines, words, and bytes in files   
whatis - search the whatis database for complete words.  
whereis - locate the binary, source, and manual page files for a command  
who - show who is logged on  
xargs - build and execute command lines from standard input  
xxd - make a hexdump or do the reverse.  
yes - output a string repeatedly until killed  
zip, zipcloak, zipnote, zipsplit - package and compress (archive) files    
unzip - list, test and extract compressed files in a ZIP archive   
