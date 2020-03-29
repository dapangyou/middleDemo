import {
  classicBeh
} from '../classic-beh.js'
const backAudioManager = wx.getBackgroundAudioManager();
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties: {
    src: String,
    musicTitle: String
    // musicSrc: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: "images/player@waitting.png",
    playSrc: "images/player@playing.png",
    // musicSrc: 'http://m801.music.126.net/20200329114000/3fc872a64608c977781b02bdded9b6fe/jdyyaac/555c/005b/060e/b604053cba711d4b47f91d3aa48460b7.m4a',
    musicTitle: '一身诗意千寻瀑'
  },

  detached: function (event) {
    // backAudioManager.stop();
  },

  attached: function (event) {
    this._recoverStatus();
    this._monitorSwitch();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function () {
      if (!this.data.playing) {
        this.setData({
          playing: true
        });
        backAudioManager.src = this.properties.src;
        backAudioManager.title = this.properties.musicTitle
      } else {
        this.setData({
          playing: false
        });
        backAudioManager.pause()
      }

    },
    _recoverStatus: function () {
      if (backAudioManager.paused) {
        this.setData({
          playing: false
        });
        return;
      }
      if (backAudioManager.src === this.properties.src) {
        this.setData({
          playing: true
        });
      }
    },
    _monitorSwitch: function () {
      backAudioManager.onPlay(() => {
        this._recoverStatus();
      })
      backAudioManager.onPause(() => {
        this._recoverStatus();
      })
      backAudioManager.onStop(() => {
        this._recoverStatus();
      })
      backAudioManager.onEnded(() => {
        this._recoverStatus();
      })
    }
  }
})