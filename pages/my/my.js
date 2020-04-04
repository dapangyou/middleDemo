Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: true,
    userInfo: null,
    classics: [],
    myBooksCount: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    this.getMyFavor()
    this.hasGottenUserInfo()
    this.getMyBookCount()
  },

  // onShow:function(options){

  // },

  getMyBookCount() {
    this.setData({
      myBooksCount: 10
    })
  },

  hasGottenUserInfo: function () {
    wx.getSetting({
      success: (data) => {
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (data) => {
              this.setData({
                hasUserInfo: true,
                userInfo: data.userInfo
              })
            }
          })
        } else {
          this.setData({
            hasUserInfo: false
          })
        }
      }
    })
  },

  onGetUserInfo: function (event) {
    let userInfo = event.detail.userInfo
    if (userInfo) {
      this.setData({
        hasUserInfo: true,
        userInfo: userInfo
      })
    }
  },

  getMyFavor: function () {
    const classics = [{
      "content": "人生不能像做菜，把所有的料准备好才下锅",
      "fav_nums": 1,
      "id": 1,
      "image": "/images/《饮食男女》@2x.png",
      "pubdate": "2018-06-22",
      "title": "李安<<饮食男女>>",
      "type": 100
    }, {
      "content": "你陪我步入蝉夏 越过城市喧嚣",
      "fav_nums": 0,
      "id": 3,
      "image": "/images/参商.png",
      "index": 1,
      "like_status": 0,
      "pubdate": "2018-06-22",
      "title": "纸短情长",
      "type": 200,
      "url": "http://music.163.com/song/media/outer/url?id=557581284.mp3"
    }]
    this.setData({
      classics: classics
    })
  },

  onPreviewTap: function (event) {
    wx.navigateTo({
      url: '/pages/classic-detail/index?cid=' + event.detail.cid + '&type=' + event.detail.type
    })
  },
  onJumpToAbout: function (event) {

  },

  onStudy: function (event) {

  },

  onShareAppMessage() {

  }
})