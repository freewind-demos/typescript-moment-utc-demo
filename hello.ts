import moment from 'moment';

const date = new Date();

const format = 'YYYY-MM-DD hh:mm:ss SSS';

console.log(moment(date).format(format));
console.log(moment.utc(date).format(format));
