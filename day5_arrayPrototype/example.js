// Array: some, every, includes, reverse, flat, filter, join, forEach, reduce methods
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 22]
// some 
Array.prototype.customSome = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return true
        }
    }
    return false
}
// console.log(arr.customSome((element)=>element%2===0))

//every
Array.prototype.customEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false
        }
    }
    return true
}
// console.log(arr.customEvery((param)=>param%2===0));

//filter
Array.prototype.customFilter = function (cb) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {

            newArr.push(this[i])
        }
    }
    return newArr
}
// console.log(arr.customFilter((event)=>event>3 && event<=10));

//reverse
Array.prototype.customReverse = function (cb) {
    let myArr = []
    for (let j = 0; j < this.length; j++) {
        myArr.unshift(this[j])
    }
    return myArr
}
// console.log(arr.customReverse(arr));

//OR
Array.prototype.customReverse2 = function (call) {
    let myArr = []
    for (let i = this.length - 1; i >= 0; i--) {
        myArr.push(this[i])
    }
    return myArr
}
// console.log(arr.customReverse2(arr));

//includes
Array.prototype.customIncludes = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb === this[i]) {
            return true
        }
    }
    return false
}
// console.log(arr.customIncludes(5));

//forEach
Array.prototype.customForEach = function (callBack) {
    for (let a = 0; a < this.length; a++) {
        callBack(this[a], a, this)
    }
}
// arr.customForEach((element)=>console.log(element));


//join
Array.prototype.customJoin = function (sep) {
    let list = ""
    for (let i = 0; i < this.length; i++) {
        if (!(this[i] === this[this.length - 1])) {
            list += `${this[i]+sep}`
        } else {
            list += `${this[i]}`
        }
    }
    return list
}
// console.log(arr.customJoin(''));

//reduce
Array.prototype.customReduce=function(cb, ac=this[0]){
    for(let i=0;i<this.length;i++){
        const param=this[i]
        ac=cb(ac,param,i,this)

    }
    return ac
}
console.log(arr.customReduce((v1,v2)=>{
    return v1+v2}));

    //flat
    const fArr=[2,2,[3,2],[[5,8]]]
    Array.prototype.customFlat=function(){
        let flatArr=[]
        for(let i=0;i<this.length;i++){
            if(Array.isArray(this[i])){
                flatArr=flatArr.concat(this[i].customFlat())
            }else{
                flatArr.push(this[i])
            }
        }
        return flatArr
    }
    console.log(fArr.customFlat());