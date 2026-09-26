const permutations = function (array) {
  // Base case:
  // There is exactly one permutation of an empty array:
  // the empty array itself.
  if (array.length === 0) {
    return [[]];
  }

  const result = [];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    // Remove the current element.
    const remaining = array.slice(0, i).concat(array.slice(i + 1));

    // Get all permutations of the remaining elements.
    const smallerPermutations = permutations(remaining);

    // Add the current element to the beginning
    // of each smaller permutation.
    for (const permutation of smallerPermutations) {
      result.push([current, ...permutation]);
    }
  }

  return result;
};
