import format from 'date-fns/format';

const dateUtils = {
  // formatDate will return 07-22-1999 for example
  formatDate: date => format(date, 'MM/DD/YYYY'),
};

export default dateUtils;
