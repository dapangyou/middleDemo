import {
    HTTP
} from '../utils/http.js'
class Classic extends HTTP {
    getLatest(sCallBack) {
        this.request({
            url: '',
            success: (res) => {
                sCallBack(res);
            }
        });
    }

    _getKey(index) {
        let key = 'classic-' + index;
        return key;
    }
}
export {
    Classic
}