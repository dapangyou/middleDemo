import {
    config
} from '../config.js';
const tips = {
    1: '抱歉！出现了一个错误',
    1005: 'appKey无效',
    3000: '期刊不存在'
}
class HTTP {
    request(params) {
        wx.request({
            url: config.api_base_api + params.url,
            method: params.method,
            data: params.data,
            header: {
                'content-type': 'application/json',
                'appkey': config.appkey
            },
            success: (result) => {
                let code = res.statusCode;
                if (code.startWith('2')) {
                    params.success && params.success(result.data);
                } else {
                    let error_code = res.data.errorCode;
                    this._showError(error_code);
                }
            },
            fail: (err) => {
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