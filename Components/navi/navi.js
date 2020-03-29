// Components/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    first: Boolean,
    latest: Boolean,
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftSrc: 'imges/triangle@left.png',
    leftDisSrc: 'imges/triangle.dis@left.png',
    rightSrc: 'imges/triangle@right.png',
    rightDisSrc: 'imges/triangle.dis@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft: function (event) {
      if (!this.properties.lastest) {
        this.triggerEvent('left', {}, {});
      }
    },
    onRight: function (event) {
      if (!this.properties.first) {
        this.triggerEvent('right', {}, {});
      }
    }
  }
})