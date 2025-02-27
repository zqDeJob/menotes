# 需求背景
为了压缩代码，提高浏览器访问速率

# 修改tomcat 配置

## gzip的作用

> gzip目的是为了压缩文件，一般发生在服务器和浏览器之间。

> 当浏览器向服务器请求文件的时候，服务器会将文件压缩成gzip 格式，传输到浏览器后再由浏览器负责解压，这样可以提高传输效率，也可以提高浏览器的响应速度。

即：

> 服务器：压缩

> 浏览器：解压

## tomcat 如何开启gzip

市面上的常见浏览器都会在请求头中添加相关的 Accept-Encoding: gzip,deflate
意味着浏览器的可以提供解压服务，所以我们只需要控制服务器相关的配置即可。

<b>修改server.xml 文件</b>

mc中tomcat下的server.xml是由摸板转换而来，所以需要修改的是

`/usr/lib/ksvd/etc/server_xml.template`

修改完成后实际会生效到：

`/usr/lib/ksvd/etc/apache-tomcat/conf/server.xml`

对server.xml中connector 标签添加相关配置：

```
compression="on"
useSendfile=”false"
compressionMinSize="2048"
compressableMimeType="text/html,text/xml,text/plain,text/css,text/javascript,application/javascript,application/json"
noCompressionUserAgents="gozilla, traviata" 
```

<b>参数说明：</b>

1. <b>compression="on" </b>开启压缩。可选值："on"开启，"off"关闭，"force"任何情况都开启。

2. <b>compressionMinSize="2048"</b>大于2KB的文件才进行压缩。用于指定压缩的最小数据大小，单位B，默认2048B。注意此值的大小，如果配置不合理，产生的后果是小文件压缩后反而变大了，达不到预想的效果。

3. <b>noCompressionUserAgents="gozilla, traviata"</b>，对于这两种浏览器，不进行压缩（我也不知道这两种浏览器是啥，百度上没找到），其值为正则表达式，匹配的UA将不会被压缩，默认空。

4. <b>compressableMimeType="text/html,text/xml,application/javascript,text/css,text/plain,text/json"</b> 会被压缩的MIME类型列表，多个逗号隔，表明支持html、xml、js、css、json等文件格式的压缩（plain为无格式的，但对于具体是什么，我比较概念模糊）。compressableMimeType很重要，它用来告知tomcat要对哪一种文件进行压缩，如果类型指定错误了，肯定是无法压缩的。

## 结果如下：

![图片](/notes/faq/img1.png)

## 重启tomcat服务

进入 `/usr/lib/ksvd/etc/apache-tomcat/bin` 目录下

```
./shutdown.sh 
./startup.sh 
```

检查gzip是否生效
去浏览器查看，请求头中带有gzip的就表示开启成功

![图片](/notes/faq/img2.png)


或者更直接的可以看这里

![图片](/notes/faq/img3.png)

## 遇到的问题

### gzip只有部分生效

https://blog.csdn.net/bwangel/article/details/106277058

检查server.xml

1. 是否添加了 useSendfile=”false"

2. compressionMinSize="2048", 大于2KB的文件才进行压缩