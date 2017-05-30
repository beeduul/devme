const arrowFunction = () => {
  const jsVersion = 'es2015 || es6';
  const ele = document.getElementById('app');
  ele.innerHTML = `Hello ${jsVersion}`;
}

module.exports = {
  run: function() {
      arrowFunction();
  }
}
