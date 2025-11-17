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

// console.log(filterByRating(books));


//? ----------Problem-5-------------

type User ={
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (users: User[]) =>{
    return users.filter(user => user.isActive === true)
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
  { id: 4, name: 'Tata', email: 'tata@example.com', isActive: false },
  { id: 5, name: 'Mask', email: 'mask@example.com', isActive: true },
];

// console.log(filterActiveUsers(users));


//? ----------Problem-6-------------

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book:Book) =>{

  const available = book.isAvailable? "yes" : "no";

  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`)
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: false,
};

// printBookDetails(myBook);


//? ----------Problem-7-------------

const getUniqueValues = (array1: (string | number)[], array2: (string | number)[]) =>{
  const result: (string | number)[] = [];

  for(let i = 0; i<array1.length; i++){
    let dupHave = false;

    for(let j =0; j<result.length; j++){
      if (array1[i] === result[j]){
        dupHave = true;
      }
    }
    if (!dupHave){
      result.push(array1[i])
    }
  }

  for(let i = 0; i<array2.length; i++){
    let dupHave = false;

    for(let j =0; j<result.length; j++){
      if (array2[i] === result[j]){
        dupHave = true;
      }
    }
    if (!dupHave){
      result.push(array2[i])
    }
  }
  return result;
}

const array1 = [1, 2, 3, 4, 5,6,8];
const array2 = [3, 4, 5, 6, 7,8,9,10];
console.log(getUniqueValues(array1, array2));