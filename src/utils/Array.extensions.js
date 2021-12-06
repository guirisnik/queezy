const identity = x => x

Array.prototype.copy = function copy() {
  return this.map(identity)
}

Array.prototype.shuffle = function shuffle() {
  for (let index = this.length; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * index)
    this.swap(--index, randomIndex)
  }

  return this
}

Array.prototype.swap = function swap(indexA, indexB) {
  const a = this[indexA]
  this[indexA] = this[indexB]
  this[indexB] = a
  return new Promise((resolve, reject) => resolve(this))
}
