const getDiff = (startDate, endDate) => {
  let diff = (endDate.getTime() - startDate.getTime()) / 1000;

  const days = Math.floor(diff / (60 * 60 * 24));
  diff -= days * 60 * 60 * 24;

  const hours = Math.floor(diff / 3600);
  diff -= hours * 3600;

  const minutes = Math.floor(diff / 60);
  diff -= minutes * 60;

  const seconds = diff;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

console.log(
  getDiff(new Date(2019, 0, 1, 20, 30), new Date(2020, 0, 1, 20, 30))
);
