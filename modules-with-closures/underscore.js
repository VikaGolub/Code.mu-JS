// ex2
(function () {
  function clone(arg) {
    const result = arg;
    return result;
  }

  function has(obj, key) {
    const res = obj.hasOwnProperty(key);
    return res;
  }

  function isEmpty(arg) {
    return arg.length > 0;
  }

  function isArguments() {
    return arguments.length > 0;
  }

  function without(arg) {
    let arr = [];
    for (let i = 0; i < arg.length; i++) {
      !arr.includes(arg[i]) ? arr.push(arg[i]) : null;
    }
    return arr;
  }

  window.underscore = { clone, has, isEmpty, isArguments, without };
})();
