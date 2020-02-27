### 事件传播（三阶段）

* **捕获阶段：**window  => 目标元素
* **目标阶段：**目标元素
* **冒泡阶段：**目标元素 => window

### `preventDefault()`与`stopPropagation()`方法

* `event.preventDefault()`  => 防止元素的默认行为
* `event.stopPropagation()` => 阻止捕获和冒泡阶段中当前事件的进一步传播。
* `event.defaultPrevented`属性。 它返回一个布尔值用来表明是否在特定元素中调用了`event.preventDefault()`。

###  `event.target和event.currentTarget`？？

* **`event.target:`**事件传播中的**目标元素**

* **`event.currentTarget:`**事件传播中**绑定事件的元素**

  ```html
  <div onclick="clickFunc(event)">    
    <div>	          
        <div>          
        		<button>Button</button>        
        </div>    
      </div> 
  </div>
  ```

  ```javascript
  function clickFunc(event) {
    console.log(event.target);              //打印最外层div
    console.log(event.currentTarget);       //打印button
  }
  ```

  



