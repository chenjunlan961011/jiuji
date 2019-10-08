linux基本指令:
1、查看当前目录：pwd
2、查看目录下的文件：ls
3、进入某个目录：cd
4、创建一个目录：mkdir abc
5、创建一个文件：touch a.html
6、编辑文件：vi文件名 
   （1）写一个i进入编辑模式
   （2）编辑好了，按退出esc;再按：wq回车回到命令行
7、删除一个文件：rm a.html
8、crtl + c：回到命令行
9、清除界面：clear

git指令：
   基本指令：
           1、初始化仓库：git init
           2、自报家门：git config --global user.name "chenjunlan961011"
           3、（1）文件提交到缓存区：git add 文件名
              （2）提交当前目录下所有文件到缓存区：git add .(注意：空文件夹不会被提交)
              （3）忽略某些文件不被git管理：.gitignore
                               a、先在命令行输入touch .gitignore,创建.gitignore文件
                               b、打开.gitignore文件，输入需要被忽略的文件名（如：aa.txt）、文件夹名（如：imglist/）
                               c、保存关闭
           4、文件由缓存区提交到本地仓库：git commit -m"我的主页"
           5、查看状态：git status;如果有显红色的文件名，说明该文件未提交到缓存区
           6、查看日志（版本历史）：git log^
                      （1）查看上一个版本：git reset --hard HEAD^；查看上上一个版本：git reset --hard HEAD^^
                      （2）查看对应的版本：git reset --hard 版本号（前六位数字）
           7、删除文件：git rm 文件名（如cc.txt）

           
   分支管理：
           1、查看分支：git branch
           2、创建分支：git branch 分支名（如：n1）  （创建分支相当于把主干的内容拷贝一份到分支上）
           3、切换到某个分支：git checkout 分支名
              切换（回）到主干：git checkout master
           4、合并分支：git merge 分支名    （只有合并分支才能把分支的内容传到主干上）
           5、删除分支（先切回到主干，由主干删除分支）：git branch -d 分支名
           6、有冲突时查看冲突：git diff     (有冲突|MERGING手动解决，再提交)
git提交及推送：
工作区——>暂存区——>本地仓库——>远程仓库(github.com 服务器 免费 源码托管的平台)
      add      commit        push