// var $myName = true
// console.log(typeof($myName));

// console.log(10 + "3");
// console.log(9 - "5"); //BUG
// console.log("java " + "script");
// console.log("Biswajit" - "jit");
// console.log(false - true);
// console.log("" + "");

// Difference between Null and Undefined
// var x = null
// console.log(x);
// console.log(typeof(x));

// var Y;
// console.log(Y);

// What is NaN ?
// NaN is a property of the global Object
// In other Words, it is a varriable in global scope
// The initial value of NaN is Not a Number

// var myPhoneNumber = 7849094023
// var myName = "Biswajit sahoo"

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if (isNaN(myName)){
//     console.log("please enter number")
// }

// isNaN(NaN)
// console.log(isNaN(NaN));

// Expressions 

// console.log(5+20);

// var x = 5
// var y = 5
// console.log(x == y);
// console.log(`Is both the x and y are equal: ${x == y}`);

// console.log("Remainder Operator:" + 81%5);

// postfix
// var num = 13
// var newNum = num++ + 4
// console.log(num);
// console.log(newNum);

// Prefix
// var num = 13
// var newNum = ++num +4
// console.log(num);
// console.log(newNum);



//----------CODEDAMN--------//


// const myAge = 10003
// console.log(myAge);

// const bigIntNumber = 111111111111111111111111111111
// console.log(bigIntNumber);

// const myAge = 19
// // console.log(typeof(myAge));
// const myUpdatedAge = myAge ** 5  // == 19 ^ n 5
// console.log(myUpdatedAge);


// const myFriendsAge = [19, 23, 25, 18]
// const sum = myFriendsAge[0] + myFriendsAge[1] + myFriendsAge[2] + myFriendsAge[3]
// console.log('Sum of my friends age is:', sum);

// const totalFriends = 4
// console.log("Total no. of friends is:", totalFriends);

// const average = sum / totalFriends
// console.log("Average is:", average);

// let myAge = 19
// --myAge
// console.log(myAge);

// const myAge = 19
// let sum = 100
// let totalCount = 5

// function addsToMyAge(incrementBy, multiplyBy){
//     // console.log(incrementBy);
//     // console.log(multiplyBy);
//     // return (myAge + incrementBy) * multiplyBy
//     sum = sum + 100
//     return
//     totalCount = totalCount + 6
// }

// let myNewAge = addsToMyAge(5, 2)
// // addsToMyAge(7)
// // console.log(myAge, myNewAge);
// console.log(sum, totalCount);

// let myAge = 19
// let sum = 200
// let totalCount = 300

// function printAllVarriables(){
//     console.log("My Age is:", myAge);
//     console.log("SUM is:", sum);
//     console.log("TotalCount:", totalCount);
// }
// printAllVarriables()

// function shouldIGetALicense(age){
//     if (age > 18){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(shouldIGetALicense(5));

// function shouldIGetALicense(age){
//     if (age > 18){
//         console.log("This person is above 18");
//         // return
//     } else {
//         console.log("This person is below 18");
//     }
// }
// shouldIGetALicense(50)

// function shouldIGetALicense(age, bribe){
//         if (age > 18){
//             console.log("This person is above 18");
//             // return
//         } else {
//             if (bribe > 100){
//                 console.log("You Pass");
//             } else {
//                 console.log("This person is below 18");
//             }
//         }
//     }
//     shouldIGetALicense(10, 101)

// function shouldIGetALicenseV2(age, bribe){
//     if ((age <= 18 && bribe > 100) || bribe > 500){
//         console.log("You Pass");
//         return
//     } else if (age >= 18) {
//             console.log("This person is above 18");
//         // } else {
//         //     console.log("This person is below 18");
//         // }
//     } else if (bribe <= 100){
//         console.log("This Person is below 18");
//     }
// }
// shouldIGetALicenseV2(18, 20000)

// let myFriends = ["default"]
// function addMyFriends(friends) {
//     myFriends.unshift(friends)
//     console.log(myFriends);
// }
// addMyFriends("Biswajit")
// addMyFriends("xyz")
// addMyFriends(73)
// const lastValue = myFriends.pop()
// myFriends.pop()
// myFriends.pop()
// myFriends.pop()

// console.log("Final Array:", myFriends, lastValue);
// console.log(myFriends[1])
// console.log(myFriends.length);
// myFriends[3] = undefined
// console.log(myFriends);
// myFriends[1] = "lemon"
// console.log("Final Array:", myFriends);

// for(let i=0;i<10;i++){
//     // console.log(i ** 2);
//     myFriends.unshift(i)
// }
// console.log(myFriends);

// let evenNumber = []
// let oddNumber = []
// for(let i=0;i<10;i++){
//     if(i % 2 === 0) {
//         evenNumber.push(i)
//     } else {
//         oddNumber.push(i)
//     }
// }
// console.log(evenNumber, oddNumber);

// function skipNumber(number){
//     let evenNumber = []

//     for(let i=0;i<20;i++){
//         if(i % 2 === 0 && i != number) {
//                 evenNumber.push(i)
//         }
//     }
//     return evenNumber
// }
// console.log(skipNumber(10));

// function skipNumber(number){
//     let evenNumber = []

//     for(let i=0;i<20;i++){
//         if(i % 2 === 1){
//             continue
//         }
//         if (i === number) {
//             continue
//         }
//         evenNumber.push(i)
//     }
//     return evenNumber
// }
// console.log(skipNumber(2));

// function breakNumber(number){
//     let evenNumber = []
//     for (let i=0;i<20;i++){
//         if(i === number){
//             break
//             // return evenNumber
//         } 
//         // return evenNumber
//         if(i % 2 === 0){
//             evenNumber.push(i)
//         }
//     }
// console.log('Final number length is:', evenNumber.length);
//     return evenNumber
// }
// console.log(breakNumber(14));

// console.log(1 === '1');
// console.log('10' == 10);

// const myObject = {
//     'keyname': {
//         'keyname2.1': "biswajit"
//     },
//     'keyname2': 'value2'
// }
// console.log(myObject['keyname']['keyname2.1']);


// const myProfile = {
//     name: 'Biswajit',
//     age: 19
// }
// const myProfile2 = {
//     name: 'Biswa',
//     age: 18
// }
// function mutate(obj){
//     // console.log(obj.age);
//     obj.age++
// }
// mutate(myProfile);
// console.log(myProfile);

// function primitiveMutate(primitive) {
//     primitive++
//     console.log(primitive);
// }
// let num = 100
// primitiveMutate(num)
// console.log(num);


// function x() {


//     if(true) {
//         const hello = 'world' 
//         console.log(hello);
//     }
//     console.log(hello);
// }

// x()

// function x() {
//     let i=0
//     for(;i<10;i++) {
//         console.log(i ** 2);
//     }
//     console.log(i);
// }
// x()


// const myAge = 19
// if (true) {
//     const myAge = 24
//     function printMyAge() {
//         let myAge
//         console.log(myAge);
//     }
//     printMyAge()
// }

// console.log(document);

// const heading = document.querySelector('.xyz')
// heading.innerText = 'Hello Biswajit'
// console.log(heading);

// const Items = document.querySelectorAll('ul li')
// for(let i=0;i<Items.length;i++){
//     const listItem = Items[i]
//     listItem.innerText = 'biswajit'
// }
// console.log(Items);

// // const para = document.querySelector('#para')
// // // para.innerText = 'biswajit'
// // const para1 = document.getElementById('para')
// // // para.innerText = 'bisbhjwhd'

// const ul = document.querySelector('ul')
// // console.log(para);
// const li = ul.querySelector('li')
// console.log(li);


// ----------- DOM ------------//


// const incrementBtn = document.querySelector('#increment')
// const decrementBtn = document.querySelector('#decrement')
// // console.log(incrementBtn);
// const counterEl = document.getElementById('counter')
// const ulElement = document.getElementById('list-items')

// let counter = 0
// function incrementCounter(){
//     console.log('Run');
//     counter++
//     counterEl.innerText = counter

//     // create an element
//     const li = document.createElement('li')
//     const b = document.createElement('b')
//     li.setAttribute('data-counter', counter)
//     if(counter % 2 === 0) {
//         // li.setAttribute('class', 'red')
//         li.style.background = 'greenyellow'
//         li.style.padding = '10px'
//     }
//     else{
//         // li.setAttribute('class', 'yellow')
//         li.style.background = 'cyan'
//         li.style.padding = '20px'
//     }
//     li.innerHTML = '<b>Sentence</b>' + counter
//     // const textNode = document.createTextNode('Sentence')
//     // b.appendChild(textNode)
//     // const textNode2 = document.createTextNode(counter)

//     li.appendChild(b)
//     li.appendChild(textNode2)
//     // append that element
//     ulElement.appendChild(li)
// }

// function decrementCounter(){
//     // console.log('Run');
//     // const counterEl = document.getElementById('counter')

//     const li = document.querySelector('[data-counter="'+counter+'"]')

//     const number = parseInt(li.getAttribute('data-counter'))
//     if(number % 2 === 0){
//     li.remove()
// }
//     counter--
//     counterEl.innerText = counter
// }
 
// incrementBtn.addEventListener('click', incrementCounter)
// decrementBtn.addEventListener('click', decrementCounter)


// const arr1 = [1,2,3]
// const arr2 = [4,7,8]

// const arr3 = [...arr1, ...arr2]
// console.log(arr3);

// const arr1 = [{
//     name: 'Biswa'
// }]
// const arr2 = [{
//     age: 19
// }]

// const arr3 = [...arr1, ...arr2]
// console.log(arr3);

// const obj1 = {
//     name: 'Biswajit'
// }
// const obj2 = {
//     name: 'mnjkwsnd',
//     age: 19
// }

// const obj3 = {
//     ...obj1,
//     ...obj2
// }
// console.log(obj3);

// function likeThis() {

// }

// const functionLikeThis = (arg) => {
//     return arg ** 2
// }
// console.log(functionLikeThis(20))

// const btn = document.getElementById('increment') 

// btn.addEventListener('click', () =>{
//     console.log('Clicked');
// })

// const arr = [1,2,3,4,5]

// const newMappedArray_forEq = []
// for(i=0;i<arr.length;i++){
//     const el = arr[i]

//     newMappedArray_forEq.push(el ** 2)
// }


// const newMappedArray = arr.map(element => element ** 2)
// // console.log(arr, newMappedArray_forEq);
// // console.log(newMappedArray);

// const filteredArray = arr.filter(element => element <3)
// console.log(arr, filteredArray);


// const friends = [{
//     name: 'x',
//     age: 18
// },
// {
//     name: 'y',
//     age: 19
// },
// {
//     name: 'z',
//     age: 20
// }]

// const filteredArray = friends.filter(element => element.age>19)
// console.log(friends, filteredArray);

// const findX = friends.find(friends => friends.name === 'x')
// console.log(findX);

// friends.forEach(friends =>{
//     console.log(friends);
// })


// const person = {
//     name: 'Biswajit',
//     age: 19
// }
// const aboutMe = 'My name is '+person.name+' and Iam '+person.age+' years old'
// console.log(aboutMe);

// const aboutMeLatest = `My name is ${person.name} and Iam ${person.age} years old`
// console.log(aboutMeLatest);