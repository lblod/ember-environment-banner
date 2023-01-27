import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default helper(function StringFormat([string]) {
    if(!string) return '';
    return htmlSafe(string);
});