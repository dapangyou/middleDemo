// pages/book-detail/book-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commons: [],
    detail: null,
    likeStatus: false,
    likeCount: 0,
    book: {},
    // 评论输入框
    posting: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const bid = options.bid;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // wx.showLoading();
    let tempCommons = {
      "comment": [{
          "content": "welcome",
          "nums": 1
        },
        {
          "content": "testing",
          "nums": 1
        },
        {
          "content": "亚历山大",
          "nums": 1
        },
        {
          "content": "林徽因",
          "nums": 1
        },
        {
          "content": "coding",
          "nums": 1
        },
        {
          "content": "取名字真的好难",
          "nums": 1
        }
      ],
      "book_id": 1
    }
    let likeStatus = {
      "fav_nums": 0,
      "id": 1,
      "like_status": 0
    }
    let book = {
      "author": [
        "Wolfgang Mauerer"
      ],
      "binding": "平装",
      "category": "算法",
      "id": 6980,
      "image": "https://img1.doubanio.com/lpic/s4368169.jpg",
      "images": {
        "large": "https://img1.doubanio.com/lpic/s4368169.jpg"
      },
      "isbn": "9787115227430",
      "pages": "1038",
      "price": "149.00元",
      "pubdate": "201005",
      "publisher": "人民邮电出版社",
      "subtitle": "全球开源社区集体智慧结晶，领略Linux内核的绝美风光",
      "summary": `JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格`,
      "title": "深入Linux内核架构",
      "translator": [
        "郭旭"
      ]
    }
    this.setData({
      commons: tempCommons.comment,
      likeCount: likeStatus.fav_nums,
      likeStatus: likeStatus.like_status,
      book: book
    });
  },

  onFakePost(event) {
    this.setData({
      posting: true
    })
  },

  onCancel(event) {
    this.setData({
      posting: false
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})