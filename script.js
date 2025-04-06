//1-задание
let person = {
  name: "Dimash",
  age: 18,
  city: "Astana",
  greet: function () {
    console.log("Привет, меня зовут " + this.name + "," + " " + "" + "мне " + this.age + " " + "лет!");
  }
};

console.log(person);

//2-задание 
console.log(person.name, person.age);

let changecity = person;
changecity.city = "Almaty";

person.greet();

//4-задание
const obj1 = { a: 10, b: 20 };
const obj2 = { a: 10, b: 20 };

let obj3 = obj1 == obj2;
console.log(obj3);

let obj4 = obj1 === obj2;
console.log(obj4);

//не будет равен и работать как так они оба в других обектах не смотря на то что у них значение одинаковые ссылки не одинаковые 

let book = {
  title: "Убийство в Восточном экспрессе",
  author: "Агата Кристи",
  details: {
    year: 1934,
    pages: 200
  }
};

console.log(book);

let copybook = Object.assign({}, book);
copybook.details.year = 2025;
console.log(copybook);

//потому что источник от book а мы его копируем с ссылкой и они всязанный это поверхносное копирование а не глубокое 

let calculator = {
  a: 5,
  b: 5,
  sum: function (a, b) {
    return this.a + this.b;
  },
  multiply: function (a, b) {
    return this.a * this.b;
  }

};

console.log(calculator.sum());
console.log(calculator.multiply());

const car = {
  brand: "BMW",
  model: "M5"
}

car.brand = "KIA";
console.log(car);

//потому что const защищает только ссылку на объект, а не сам объект. Внутри по ссылке ты можешь делать что угодно