// Components/search/search.js
import {
  KeywordModel
} from '../../modules/keywords'

const keywordModel = new KeywordModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    more: {
      type: String,
      observer: '_loadmore'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    hotWords: []
  },
  attached() {
    const historyWords = keywordModel.getHistory();
    const hotWords = [
      "Fluent Python",
      "Python",
      "小程序Java核心编程",
      "慕课网7七月",
      "微信小程序开发入门与实践",
      "C++"
    ]
    this.setData({
      historyWords,
      hotWords,
      bookArray: [],
      searching: false
    });
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(event) {
      this.triggerEvent('cancel', {}, {});
    },
    onConfirm(event) {
      this.setData({
        searching: true
      });
      const word = event.detail.value;
      keywordModel.addToHistory(word);
      const bookArray = [{
          "author": [
            "Luciano Ramalho"
          ],
          "binding": "Paperback",
          "category": "编程",
          "id": 195,
          "image": "https://img3.doubanio.com/lpic/s27935775.jpg",
          "images": {
            "large": "https://img3.doubanio.com/lpic/s27935775.jpg"
          },
          "isbn": "9781491946008",
          "pages": "768",
          "price": "USD 39.99",
          "pubdate": "2015-8-20",
          "publisher": "O'Reilly Media",
          "subtitle": "",
          "summary": "Learn how to write idiomatic, effective Python code by leveraging its best features"
        },
        {
          "author": [
            "【英】大卫•加里夫",
            "David Gariff"
          ],
          "binding": "精装",
          "category": "艺术史",
          "id": 44307,
          "image": "https://img3.doubanio.com/lpic/s27145681.jpg",
          "images": {
            "large": "https://img3.doubanio.com/lpic/s27145681.jpg"
          },
          "isbn": "9787511719164",
          "pages": "192",
          "price": "98.00元",
          "pubdate": "2014-1",
          "publisher": "中央编译出版社",
          "subtitle": "名画密码与大师传承",
          "summary": "《艺术谱系》一书以独特的视角构建出一部通俗易懂的西方艺术发展史",
          "translator": [
            "徐效军"
          ]
        }
      ]
      this.setData({
        bookArray
      })
    },
    onDelete(event) {
      this.setData({
        searching: false
      });
    },
    _loadmore() {

    }
  }
})