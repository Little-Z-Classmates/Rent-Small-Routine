// components/filterFrame/filterFrame.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    filterTitleArr : Array,        // 传过来的Title值 
    currentSelectTitleId : Number, // 传递过来的 Title id
    filterTitleSort:Object,        // 传递过来的 排序对象
    filterFrameFixedFlag:Boolean,  // 传递过来的 是否固定定位标识符 
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
    // 点击进行切换
    toggleCurrentSelectTitle(event){
      var index = event.currentTarget.dataset['index'];
      var oldId = this.properties.currentSelectTitleId
      if( index == oldId ){
        this.triggerEvent('setCurrentSelectTitleId', -1)
        this.triggerEvent('setFilterTitleSort', false)
      }else{
        this.triggerEvent('setFilterTitleSort', false)
        this.triggerEvent('setCurrentSelectTitleId', index)
      }
    },
    // 点击排序 图标进行切换
    toggleFilterTitleSort(){
      var filterTitleSortFlag = this.properties.filterTitleSort.flag
      if(!filterTitleSortFlag){
        this.triggerEvent('setCurrentSelectTitleId', -1)
        this.triggerEvent('setFilterTitleSort', true)
      }else{
        this.triggerEvent('setFilterTitleSort', false)
      }
    }
  },

  // 在组件定义时的选项中启用多slot支持
  options: {
    multipleSlots: true 
  },
})
