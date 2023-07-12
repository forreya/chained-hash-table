
const hashStrToInt = (key, internalArraySize) => {
  hash = 17
  
  for(let i = 0; i<key.length; i++) {
    return (13 * hash * key.charCodeAt(i)) % internalArraySize
  }

}

class HashTable {

  internalArray = new Array(100)

  setItem = (key,value) => {
    const index = hashStrToInt(key, this.internalArray.length)
    this.internalArray[index] = value
  }

  getItem = (key) => {
    const index = hashStrToInt(key, this.internalArray.length)
    return this.internalArray[index]
  }
}

const myTable = new HashTable
myTable.setItem('Hash Table', '哈希表')

console.log(myTable.getItem('Ordinarily'))