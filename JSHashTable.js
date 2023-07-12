
const hashStrToInt = (key, internalArraySize) => {
  hash = 17
  
  for(let i = 0; i<key.length; i++) {
    hash = (13 * hash * key.charCodeAt(i)) % internalArraySize
  }
  return hash
}

class HashTable {

  internalArray = new Array(5)
  itemCount = 0

  resize = () => {
    const newInternalArray = new Array(this.internalArray.length * 2)
    console.log(newInternalArray)
    this.internalArray.forEach((item) => {
      if (item) {
        item.forEach(([key,value]) => {
          const index = hashStrToInt(key, newInternalArray.length)
  
          if (newInternalArray[index]) {
            newInternalArray[index].push([key,value])
          } else {
            newInternalArray[index] = [[key,value]]
          }
        })
      }
    })
    this.internalArray = newInternalArray
  }

  setItem = (key,value) => {
    const resizeFactor = 0.8
    const loadFactor = this.itemCount/this.internalArray.length
    this.itemCount ++ 
    if (loadFactor > resizeFactor) {
      this.resize()
    }

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

const myTable = new HashTable()
myTable.setItem('Hash Table', '哈希表')

console.log(myTable.getItem('Hash Table'))