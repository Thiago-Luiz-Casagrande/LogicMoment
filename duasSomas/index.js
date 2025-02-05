function EncontrarIndicesSoma(nums, alvo) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === alvo) {
        return [i, j];
      }
    }
  }
  return null;
}
