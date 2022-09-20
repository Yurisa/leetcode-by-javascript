var sort = function (arr) {
  let len = arr.length;
  for (let i = Math.floor((len -1) / 2); i >= 0; i--) {
    heapify(arr, i, len - 1);
  }

  for (let i = len - 1; i >= 0; i--) {
    swap(arr, 0, len -1)
    len--
    heapify(arr, 0, len - 1);
  }
  return arr;
};

function heapify(arr, i, j) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let k = i;

  if (left <= j && arr[k] < arr[left]) {
    k = left;
  }

  if (right <= j && arr[k] < arr[right]) {
    k = right;
  }

  if (k !== i) {
    swap(arr, i, k);
    heapify(arr, k, j);
  }
}

function getLeft(i) {
  return 2 * i + 1;
}

function getRight(i) {
  return 2 * i - 1;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(sort([5, 6, 4, 5, 9, 0]));
