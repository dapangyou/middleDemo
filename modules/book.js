import {
    HTTP
} from '../utils/http-p.js';
class BookModel extends HTTP {
    getHotList() {
        return this.request({
            url: '',
            data: {},
            method: 'GET'
        })
    }

    search() {}
}