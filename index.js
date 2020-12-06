const getTotalRevenue = arr => {
   let result = 0;
   arr.map(user => result += user.amount);
   return result;
}

