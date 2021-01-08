export const getDiff = (startDate, endDate) => {
  let difference = Math.abs(endDate.getTime() - startDate.getTime());

  const MILISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
  const MILISECONDS_IN_HOUR = 1000 * 60 * 60;
  const MILISECONDS_IN_MINUTE = 1000 * 60;
  const MILISECONDS_IN_SECOND = 1000;

  const days = Math.floor(difference / MILISECONDS_IN_DAY);
  difference = Math.floor(difference % MILISECONDS_IN_DAY);

  const hours = Math.floor(difference / MILISECONDS_IN_HOUR);
  difference = Math.floor(difference % MILISECONDS_IN_HOUR);

  const minutes = Math.floor(difference / MILISECONDS_IN_MINUTE);
  difference = Math.floor(difference % MILISECONDS_IN_MINUTE);

  const seconds = difference / MILISECONDS_IN_SECOND;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
