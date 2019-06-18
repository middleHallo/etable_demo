# etable演示demo

## 一：背景
最近想要捣鼓一个自己的小程序，其中数据展示部分比较多，想用table来做展示，但是微信小程序并没有table组件，于是自己动手捣鼓了一个，勉强能用。

可以看看效果：

![image.png](https://upload-images.jianshu.io/upload_images/9340937-10afd98158b22584.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 二：etable使用介绍

etable的使用很简单，分为 引入、使用、配置等3个阶段

### 1、引入
首先在要使用的页面中的json文件中配置如下：
```
{
  "usingComponents": {
    "etable" : "/compenents/etable/etable"
  }
}
```

### 2、使用
在wxml页面需要用到的地方使用，如下：
```
<view style='padding : 10rpx;'>
  <etable config="{{config}}"></etable>
</view>
```

### 3、配置
配置阶段主要配置config这个对象，这个对象中有这么几个属性，分别是

+ content  etable数据，数组类型，必填
+ titles   etable头部标题，数组类型，必填
+ props    etable每一列对应的数据的key值，
+ columnWidths  etable 每一列的列宽，值类型使用rpx，注意：(titles,props,columnWidths这3个数组的长度需保持一致)
+ border   etable 是否有边框，Boolean类型，默认true
+ stripe   etable 是否斑马纹，Boolean类型，默认true
+ headbgcolor  etable 标题栏的背景颜色，String类型，默认#ffffff(即白色)

如下示例代码：
```
  /**
   * 页面的初始数据
   */
  data: {
    config:{
      content :[],
      titles: ['id', '名字', '年龄', '学校'],
      props : ['id', 'name', 'age', 'school'],
      columnWidths: ['80rpx', '140rpx', '120rpx','390rpx'],
      border: true,
      stripe : true,
      // headcolor : '#dddddd'
    }
  },

  onload:function(){
    // 模拟数据
    let  content = [
      {
        id: 1,
        name: 'pxh',
        age: 13,
        school: '暨南大学计算机'
      },
      {
        id: 2,
        name: 'ap',
        age: 12,
        school: '中山大学'
      },
      {
        id: 3,
        name: 'cf',
        age: 12,
        school: '华南农业大学'
      },
      {
        id: 4,
        name: '林江',
        age: 14,
        school: '上海交通大学'
      }
    ]
    let that = this
    // 此处是模拟网络请求
    setTimeout(function(){
      that.setData({
        'config.content' : content
      })
    },2000)
  }
```

## 三：etable的stripe和border背景颜色修改
想要调整斑马纹的背景颜色，找到etable/etable.wxss中的39-45行，如下，可以自行修改
```
.etable-content-row-bg1{
  background-color: #ffffff;
}

.etable-content-row-bg2{
  background-color: #efefef;
}
```

想要调整border的颜色，需要在etable.etable.wxss中分别找到etable-header-column-border 和 etable-content-column-border这2个类，然后修改对应的颜色值即可，此处不多说了。

## 组件的github地址
[见这里](https://github.com/middleHallo/etable_demo)
