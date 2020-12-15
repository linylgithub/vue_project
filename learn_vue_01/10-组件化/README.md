### 组件的使用分成三个步骤
- 创建组件构造器
- 注册组件
- 使用组件

```flow
st=>start: 调用Vue.extend()方法创建组件构造器
e=>end: 在Vue实例的作用域范围内使用组件
op1=>operation: 调用Vue.component()方法注册组件

st->op1->e
```


