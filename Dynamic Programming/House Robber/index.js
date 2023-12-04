var rob = function (nums) {
  if (nums.length <= 2) {
    return nums[0];
  } else {
    let money = 0;
    for (let i = 0; i < nums.length; i = i + 2) {
      money += nums[i];
    }
    return money;
  }
};

console.log(rob([1, 2, 3, 1]));
