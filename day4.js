let arr = [1,2,3,4,5,6,7,8,9,10,112,34,54,67,87,90,12];

function myNumber(number) {
    let newNumber = number.filter(number => number > 10)
    return newNumber
}

console.log(myNumber(arr))