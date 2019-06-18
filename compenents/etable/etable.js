// compenents/etable.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    config : {
      type : Object,
      value :{
        content: {
          type : Array,
          value : []
        },
        titles: {
          type: Array,
          value: []
        },
        columnWidths: {
          type: Array,
          value: []
        },
        border: {
          type: Boolean,
          value: true
        },
        stripe: {
          type: Boolean,
          value: true
        },
        headbgcolor :{
          type : String,
          value : '#ffffff'
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
  },

  /**
   * 声明周期函数
   */
  pageLifetimes:{
    
  }
})
