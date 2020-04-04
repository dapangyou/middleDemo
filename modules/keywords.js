class KeywordModel {
    key = 'q'
    maxLength = 10;
    getHistory() {
        const words = wx.getStorageSync(this.key);
        if (!words) {
            return [];
        }
        return words;
    }

    getHot() {}

    addToHistory(keyword) {
        let words = this.getHistory();
        const has = words.includes(keyword);
        if (!has) {
            // 先删除数组末尾的元素 再将新的元素添加到第一位置
            const length = words.length;
            if (length > this.maxLength) {
                words.pop();
            }
            words.unshift(keyword);
            wx.setStorageSync(this.key, words);
        }
    }
}
export {
    KeywordModel
}