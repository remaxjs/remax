var tree = {
  r: {
    c: [],
  },
};

function reduce(action) {
  // console.log(JSON.stringify(action));
  action.type
  switch (action.type) {
    // splice
    case 'splice':
      // action.payload
      var payload = action.payload;
      for (var i = 0; i < payload.length; i += 1) {
        var path = payload[i][0];
        var start = payload[i][1];
        var deleteCount = payload[i][2];
        var payloadItem = payload[i][3];
        // payload.path
        var value = get(tree, path);
        // payload.item
        // if (payload[i].ie) {
          var item = getItem(payloadItem)
          if (item) {
          value.splice(
            // payload.start
            start,
            // payload.deleteCount
            deleteCount,
            // payload.item
            item
          );
          } else {
          value.splice(
            // payload.start
            start,
            // payload.deleteCount
            deleteCount,
          );
          }
        // } else {
        //   value.splice(payload[i].s, payload[i].d);
        // }
        set(tree, path, value);
      }
      return tree;
    default:
      return tree;
  }
}

function getItem(item) {
  if (!item) {
    return undefined;
  }
          var newItem = {
            i: item[0],
            t: item[1],
            p: item[2],
            c: item[3] ? item[3].map(function(i) {
              var newI = getItem(i);

              return newI;
            }) : [],
            te: item[4] || undefined,
          }

          return newItem;
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

  var nextObj = obj;
  for (var i = 0; i < path.length; i += 1) {
    var currentPath = path[i];
    nextObj = nextObj[currentPath];
    if (nextObj === void 0) {
      // children
      if (currentPath === 'c') {
        nextObj = [];
      } else {
        nextObj = {};
      }
    }
  }

  return nextObj;
}

<% if (target === 'alipay') { %>
export default  {
  reduce
}
<% } else { %>
module.exports = {
  reduce: reduce,
};
<% } %>
