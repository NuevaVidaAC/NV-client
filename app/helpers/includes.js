import { helper } from '@ember/component/helper';

export function includes(params/*, hash*/) {
	let arr = params[0];
	let item = params[1];
	return arr.includes(item);
}

export default helper(includes);
