module.exports.customSort = Array.prototype.customSort = function () {
  for (i = 0; i < this.length; i++) {
    for (j = 0; j < this.length; j++) {
      if (this[j] > this[j + 1]) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
};
