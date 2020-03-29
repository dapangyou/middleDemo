//Page Object

Page({
  data: {

  },
  onLike: function (Event) {
    let behavior = Event.detail.behavior;
    // 接口的调用
  },
  //options(Object)
  onLoad: function (options) {
    // classicModule.getLatest((res) => {});
    let classModel = {
      "content": "人生不能像做菜，把所有的料准备好才下锅",
      "fav_nums": 9,
      "id": 1,
      "index": 8,
      "image": "images/movieIndex.png",
      "like_status": 0,
      "pubdate": "2018-06-22",
      "title": "李安<<饮食男女>>",
      "type": 100
    }
    this.setData({
      classicData: classModel,
      latest: true
    });
  },
  onNext: function () {
    let next = {
      "content": "人生不能像做菜，把所有的料准备好才下锅",
      "fav_nums": 9,
      "id": 1,
      "index": 8,
      "image": "images/movieIndex.png",
      "like_status": 0,
      "pubdate": "2018-06-22",
      "title": "李安<<饮食男女>>",
      "type": 100
    }
    this.setData({
      classicData: next,
      latest: true,
      first: false
    });
  },
  onPrevious: function () {
    let pre = {
      "content": "谁念过 千字文章 秋收冬已藏",
      "fav_nums": 5,
      "image": "images/参商.png",
      "id": 3,
      "index": 7,
      "like_status": 0,
      "pubdate": "2018-06-22",
      "title": "不才《一身诗意千寻瀑》",
      "type": 200,
      "url": "http://m701.music.126.net/20200329135234/3cc756b725f6d4ce64e7146841b207d1/jdyyaac/555c/005b/060e/b604053cba711d4b47f91d3aa48460b7.m4a"
    }
    this.setData({
      classicData: pre,
      latest: false,
      first: true
    });
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  onPageScroll: function () {

  },
  //item(index,pagePath,text)
  onTabItemTap: function (item) {

  }
});