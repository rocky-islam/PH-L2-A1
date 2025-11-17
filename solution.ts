

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



const getLength = (value: string | number[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }

  return value;
};


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


const getUniqueValues = (array1: (string | number)[], array2: (string | number)[]) =>{
  const result: (string | number)[] = [];

  for(let i = 0; i<array1.length; i++){
    result[result.length] = array1[i];
  }

  for(let i = 0; i<array2.length; i++){
    let dupHave = false;

    for(let j =0; j<result.length; j++){
      if (array2[i] === result[j]){
        dupHave = true;
      }
    }
    if (!dupHave){
      result[result.length] = array2[i];
    }
  }
  return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];



type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number =>{
  if (products.length ===0) {
    return 0;
  }

  return products.map(product =>{
    const totalPrice = product.price * product.quantity;

    if(product.discount !== undefined){
      const discountPrice = (totalPrice*product.discount)/100;

      return totalPrice - discountPrice;
    }
    return totalPrice;
  }).reduce((totalPrice, currentPrice) =>{
    return totalPrice + currentPrice;
  },0)
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];


