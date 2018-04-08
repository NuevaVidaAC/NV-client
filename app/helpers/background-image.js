import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function backgroundImage(params/*, hash*/) {
	var [url, defaultImage] = params;

	return htmlSafe(`background-image: url(${url || defaultImage});`);
}

export default helper(backgroundImage);
