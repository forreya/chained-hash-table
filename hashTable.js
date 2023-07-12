
const hashStrToInt = (key, internalArraySize) => {
  hash = 17
  
  for(let i = 0; i<key.length; i++) {
    return (13 * hash * key.charCodeAt(i)) % internalArraySize
  }

}

class HashTable {

  internalArray = new Array(5)

  setItem = (key,value) => {
    const index = hashStrToInt(key, this.internalArray.length)

    if (this.internalArray[index]) {
      this.internalArray[index].push([key,value])
    } else {
      this.internalArray[index] = [[key,value]]
    }
  }

  getItem = (key) => {
    const index = hashStrToInt(key, this.internalArray.length)
    const arrayElement = this.internalArray[index]

    if (arrayElement && arrayElement.find(key_value => key_value[0] === key)) {
      return arrayElement.find(key_value => key_value[0] === key)[1]
    } else {
      return 'Key does not exist.'
    }
  }
}

const myTable = new HashTable
myTable.setItem('Hash Table', '哈希表')
myTable.setItem('Woah', 'wing')
myTable.setItem('wong', 'wang')
myTable.setItem('who', 'wang')


console.log(myTable.getItem('Hash Table'))