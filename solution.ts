//?--------- problem-1-------------

const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }

  return value;
};

// console.log(formatValue('rocky'));
// console.log(formatValue(1));
// console.log(formatValue(false));

//?-----------problem-2--------------

const getLength = (value: string | number[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }

  return value;
};

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

//?---------- Problem-3--------------
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// const person1 = new Person("John Doe", 30);
// console.log(person1.getDetails());

// const person2 = new Person("Alice", 25);
// console.log(person2.getDetails());

// const person3 = new Person("Rocky", 26);
// console.log(person3.getDetails());


//? -------Problem-4--------------

type Item = {
    title: string;
    rating: number;
}

const filterByRating = (item: Item[]) =>{
    return item.filter(item => item.rating >=4)
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
  { title: 'Book d', rating: 4.0 },
  { title: 'Book e', rating: 3.9 },
];

console.log(filterByRating(books));