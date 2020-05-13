var tree = {
  root: {
    children: [],
  },
  lastActionId: -1,
};

function reduce(action) {
  if (action.id === tree.lastActionId) {
    return tree;
  }

  tree.lastActionId = action.id;

  switch (action.type) {
    case 'clear':
      tree.root = {
        children: [],
      };
      return tree;
    case 'splice':
      for (var i = 0; i < action.payload.length; i += 1) {
        var value = get(tree, action.payload[i].path);
        if (action.payload[i].item) {
          value.splice(action.payload[i].start, action.payload[i].deleteCount, action.payload[i].item);
        } else {
          value.splice(action.payload[i].start, action.payload[i].deleteCount);
        }
        set(tree, action.payload[i].path, value);
      }
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
    obj[path[0]] = value;
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

  var nextObj = obj;
  for (var i = 0; i < path.length; i += 1) {
    var currentPath = path[i];
    nextObj = nextObj[currentPath];
    if (nextObj === void 0) {
      if (currentPath === 'children') {
        nextObj = [];
      } else {
        nextObj = {};
      }
    }
  }

  return nextObj;
}

module.exports = {
  reduce: reduce,
};
