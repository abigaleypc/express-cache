## 一个学习HTTP缓存的过程

针对不同的缓存策略分别从以下各个分支做测试，通过 `git checkout 分支名` 切换到对应功能的example

### 分支 - 策略

* maxage: 采用 强缓存策略 `cache-control` 中的 `max-age` 对缓存文件进行缓存时间长度设置
* expires: 采用 强缓存策略 `expires` 进行有效期缓存

