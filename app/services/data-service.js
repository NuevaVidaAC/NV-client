import Service from '@ember/service';
import moment from 'moment';

export default Service.extend({
	date: moment(),
	data: null,
	
});
