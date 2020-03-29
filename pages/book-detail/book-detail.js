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
    book: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const bid = options.bid;
    console.log(bid);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
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
      "summary": "众所周知，Linux操作系统的源代码复杂、文档少，对程序员的要求高，要想看懂这些代码并不是一件容易事...",
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