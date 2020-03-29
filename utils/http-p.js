import {
    config
} from '../config.js';
const tips = {
    1: '抱歉！出现了一个错误',
    1005: 'appKey无效',
    3000: '期刊不存在'
}
class HTTP {
    request({
        url,
        data = {},
        method = 'GET'
    }) {
        return new Promise((resolve, reject) => {
            this._request(url, resolve, reject, data, method);
        })
    }
    _request(url, resolve, reject, data = {}, method = 'GET') {
        wx.request({
            url: config.api_base_api + url,
            method: method,
            data: data,
            header: {
                'content-type': 'application/json',
                'appkey': config.appkey
            },
            success: (result) => {
                const code = res.statusCode;
                if (code.startWith('2')) {
                    resolve(res.data);
                } else {
                    reject();
                    const error_code = res.data.errorCode;
                    this._showError(error_code);
                }
            },
            fail: (err) => {
                reject()
                this._showError(err.code);
            }
        });
    }

    _showError(errorCode) {
        if (!errorCode) {
            errorCode = 1;
        }
        wx.showToast({
            title: tips[errorCode],
            icon: 'none',
            image: '',
            duration: 1500,
            mask: false,
            success: (result) => {

            },
            fail: () => {}
        });
    }
}


export {
    HTTP
}