// // Задание №2 . Создайте класс Person с параметрами имя, возраст, рост, вес, 
// национальность, пол (true – мальчик, false - девочка). Создайте 2 объекта 
// этого класса с различными параметрами. Создайте метод say, который 
// конкатенирует параметр «имя» второго объекта и строку, переданную в 
// данный метод. Создайте методы height и weight maneger-ы, которые бы 
// управляли соответствующими параметрами объектов. 

alert("Задание №2")

class Person  {
    constructor(name, age, height, weight, national, sex){
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
        this.national = national
        this.sex = sex
    }
    speak(name, phrase) {
        alert(phrase + " " + name.name)
    }

    heightManager(number) {
        this.height += number
    }

    weightManager(number) {
        this.weight += number
    }
}

let people = new Person("Kris", 18, 160, 50, "rus", false)
let people2 = new Person("Bob", 2, 180, 80, "rus", true)

console.log(people)








































