// Components/like/like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 暴露在外面的属性
    count: {
      type: Number,
      value: 10
    },
    like: {
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgSrc: "images/like@dis.png",
    likeSrc: "images/like.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {

    onLike: function () {
      let like = this.properties.like;
      let count = this.properties.count;
      count = like ? count - 1 : count + 1;
      this.setData({
        like: !like,
        count: count
      });

      let behavior = this.properties.like ? 'like' : 'cancel'
      this.triggerEvent('like', {
        behavior: behavior
      }, {});
    }

  }
})