1：时间对象（https://developer.mozilla.org/zhCN/docs/Web/JavaScript/Reference/Global_Objects）
  基本对象：
  （1）：Object：
           对象初始化：
new Object()：以构造函数形式来调用
 Object.create()方法： const me = Object.create(person);        person：现有的对象
字面量标记（初始化标记）初始化对象：var a = {}
属性：
1，Object.length                  返回对象长度
2，Object.prototype            可以为所有 Object 类型的对象添加属性。
3，Object.assign(目标对象，...源对象) 通过复制一个或多个对象来创建一个新的对象。返回目标对象
4，Object.entries()返回给定对象自身可枚举属性的 [key, value] 数组。（类似for...in ，但区别在于 for-in 循环也枚举原型链中的属性）