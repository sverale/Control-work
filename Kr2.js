// // Задание №2 . Создайте класс Person с параметрами имя, возраст, рост, вес, 
// национальность, пол (true – мальчик, false - девочка). Создайте 2 объекта 
// этого класса с различными параметрами. Создайте метод say, который 
// конкатенирует параметр «имя» второго объекта и строку, переданную в 
// данный метод. Создайте методы height и weight maneger-ы, которые бы 
// управляли соответствующими параметрами объектов. 

alert("Задание №2")

class Person  {
        name = "name"
        age = "age"
        height = "height"
        weight = "weight"
        national = "national"
        sex = "sex"
}
    
//////////////////////////////////

function Speak(name, phrase) {
    // добавьте type и phrase в this
    this.name = name;
    this.phrase = phrase;
  }
  
  const kris = new Speak('kris', 'hello');
  const bob = new Speak('bob', 'bay');


//   const kris = new Person('Kris', 18, 160, 50, 'rus', 'false')
//     const bob = new Person('Bob', 22, 180, 80, 'franc', 'true')
  
  bob.say(); // fox says woopwoopwoop
  kris.say(); // T-rex says ЯAWR
  
  // метод можно добавить в прототип
  Speak.prototype.say = function () {
    console.log( `name.name` + `phrase`);
  }; 

//////////////////////////////////////





// const kris = {
//         name: 'Kris',
//         age : '18',
//         height : '160',
//         weight: '50',
//         national : 'rus',
//         sex : 'false',
// }

// const bob = {
//     name: 'Bob',
//     age : '22',
//     height : '170',
//     weight: '80',
//     national : 'franc',
//     sex : 'true',
// }





































