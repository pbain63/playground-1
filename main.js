const permutations = function (array) {
  if (array.length === 0) {
    return [[]];
  }

  const result = [];
  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    const remaining = array.slice(0, i).concat(array.slice(i + 1));

    const smallerPermutations = permutations(remaining);

    for (const permutation of smallerPermutations) {
      result.push([current, ...permutation]);
    }
  }

  return result;
};

module.exports = permutations;
