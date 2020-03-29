import {
    HTTP
} from '../utils/http.js'

class LikeModel extends HTTP {
    like(behivior, artId, category) {
        let url = behivior == 'like' ? 'like' : ''
        this.request({
            url: '',

        });
    }
}