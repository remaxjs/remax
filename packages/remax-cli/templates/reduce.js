var tree = [];

function reduce(action) {
  switch (action.type) {
    case 'set':
      set(tree, action.payload.path, action.payload.value);
      return tree;
    case 'splice':
      const value = get(tree, action.payload.path);
      set(
        tree,
        action.payload.path,
        value.splice(
          action.payload.start,
          0,
          action.payload.deleteCount,
          action.payload.item
        )
      );
      return tree;
    default:
      return tree;
  }
}

function getKey(key) {
  var intKey = parseInt(key);
  if (intKey.toString() === key) {
    return intKey;
  }
  return key;
}

function set(obj, path, value) {
  if (typeof path === 'string') {
    path = path.split('.').map(getKey);
  }

  if (path.length === 1) {
    obj[currentPath] = value;
  }

  var nextObj = obj;
  for (var i = 0; i < path.length; i += 1) {
    var currentPath = path[i];
    var currentValue = nextObj[currentPath];

    if (currentValue === void 0) {
      //check if we assume an array
      if (typeof path[i + 1] === 'number') {
        nextObj[currentPath] = [];
      } else {
        nextObj[currentPath] = {};
      }
    }

    if (i === path.length - 1) {
      nextObj[currentPath] = value;
    }

    nextObj = nextObj[currentPath];
  }
}

function get(obj, path) {
  if (typeof path === 'string') {
    path = path.split('.').map(getKey);
  }

  var nextObj;
  for (var i = 0; i < path.length; i += 1) {
    var currentPath = path[i];
    nextObj = obj[currentPath];
  }

  return nextObj;
}

module.exports = {
  reduce: reduce,
};
