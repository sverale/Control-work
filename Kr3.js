// Задание №3  Создайте класс Phone с параметрами: список установленных 
// приложений, размер свободной памяти. Создайте конструктор класса. 
// Создайте экземпляр этого класса. Опишите методы installApplcation, 
// который добавляет приложение в список установленных приложений и 
// уменьшает размер оставшейся памяти устройства на объем, занимаемый 
// приложением, метод deleteApplication – удаляет приложение и 
// увеличивает размер оставшейся памяти устройство на тот объем памяти, 
// который был занят этим приложением.


alert("Задание №3")

class Phone {
    apps = "apps"
    memory = "memory"

    constructor(apps, memory) {
        this.apps = apps
        this.memory = memory

        this.list = []
        this.free = []
    }
    


installApplcation(apps, free) {
    this.memory -= free
    this.list.push (apps)
    this.free.push(free)

}


deleteApplication() {
    let i = this.list.indexOf(apps)
    this.list.splice(i, 1)
    this.memory += this.free[i]
    this.free.splice(i, 1)

}
}

alert()
alert()
alert()
alert()































