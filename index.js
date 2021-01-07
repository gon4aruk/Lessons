export const getDiff = (startDate, endDate) => {
  let diff = Math.abs(endDate.getTime() - startDate.getTime());

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff = Math.floor(diff % (1000 * 60 * 60 * 24));

  const hours = Math.floor(diff / (1000 * 3600));
  diff = Math.floor(diff % (1000 * 60 * 60));

  const minutes = Math.floor(diff / (1000 * 60));
  diff = Math.floor(diff % (1000 * 60));

  const seconds = diff / 1000;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
