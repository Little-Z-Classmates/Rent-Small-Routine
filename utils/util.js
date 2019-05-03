const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 深度深拷贝
var deepCopy = function(obj) {
  var result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object') {
              result[key] = deepCopy(obj[key]);   //递归复制
          } else {
              result[key] = obj[key];
          }
      }
  }
  return result;
}

module.exports = {
  formatTime: formatTime,
  deepCopy : deepCopy
}
