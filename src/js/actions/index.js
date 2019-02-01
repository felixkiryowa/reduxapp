
import { ADD_ARTICLE } from '../constants/action-types';

function AddArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}


export default AddArticle;