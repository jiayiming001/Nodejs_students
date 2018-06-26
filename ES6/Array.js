/**
 * Array.from()
 */
let arrlike = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    length: 4
};

console.log(Array.from(arrlike)); //将类数组转化为数组类型, argumnets是类数组
console.log(Array.from('hello')); //将字符串每个字符变成数组元素
console.log(Array.from(arrlike, (x) => x + '1'));//可以接受第二个参数,该参数类似map方法,对转化后的数组的每个元素进行处理


/**
 * Array.of()
 */

console.log(Array.of(1, 3, 7, 9));//将一组值转化为数组

/** 
 * 数组实例方法:copyWithin()
 * 作用:在数组内部将指定位置的成员复制的其他位置(会覆盖原有成员)
*/
console.log([1,2,3,4,5].copyWithin(0, 3, 5)); 

/** 
 * 数组实例方法: find()
 * 作用: 找到第一个符合条件的数组成员,方法的参数为一个回调函数,所有数组成员依次传入回调函数执行,直到找到第一个返回值为true的成员,然后返回该成员,如果没有的话,返回undefined;
 * 
 * 数组实例方法: findIndex()
 * 作用: 接受三个参数: 当前值 当前位置 原数组,没有符合条件的就返回-1, 有就返回该数组成员
*/

console.log([1, 2, 3, 4, 5].find(x => x > 3));
console.log([1, 2, 3, 4, 5].findIndex((value, index, arr) => {
    return value > 2;
}));
