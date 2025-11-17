# What are some differences between interfaces and types in TypeScript?


TypeScript এ ডেটার স্ট্রাকচার বা ধরন নির্ধারণ করার জন্য দুটি প্রধান উপায় রয়েছে: interface এবং type। উভয়ই অবজেক্ট, ফাংশন এবং কমপ্লেক্স ডেটা স্ট্রাকচার ডিফাইন করতে ব্যবহার করা হয়, তবে এগুলোর মধ্যে কিছু সূক্ষ্ম পার্থক্য রয়েছে। সঠিকভাবে বোঝা গেলে কোড আরও পরিষ্কার ও maintainable হয়।

## ১. Interface কি?

Interface ব্যবহার করে আমরা একটি object, class  বা Function  নির্ধারণ করতে পারি। এটি মূলত একটি contract তৈরি করে, যা class বা object অনুসরণ করবে।


## ২. Type কি?

Type keyword ব্যবহার করে আমরা একটি structure বা type define করতে পারি। Type আরও flexible; এটি object, primitive, union, intersection, tuple ইত্যাদির জন্য ব্যবহার করা যায়।


## ৩. কখন কোনটি ব্যবহার করব?
- Interface ব্যবহার:

	Object shape বা API contract define করতে।
	Declaration merging দরকার হলে।
	Class implement করবে এমন structure এর জন্য।

- Type ব্যবহার :

	Union, Intersection, Tuple বা Primitive type দরকার হলে।
	বেশি flexible type define করতে হলে।

## ৪. Practical উদাহরণ

- Interface ব্যবহার

```ts
interface Product {
  id: number;
  name: string;
  price: number;
}
``` 

- Type ব্যবহার (union)
```ts
type Status = "active" | "inactive" | "pending";

const product: Product = { id: 1, name: "Laptop", price: 1000 };
const userStatus: Status = "active";
```

## ৫. উপসংহার

Interface এবং Type দুইটিই object shapes define করতে পারে, তবে ব্যবহার এবং flexibility এ পার্থক্য রয়েছে।
Interface: structured contract এবং class implementation এর জন্য best।
Type: flexible type, union/intersection, বা complex composition এর জন্য best।
সঠিক ব্যবহারে কোড আরও readable, maintainable, এবং scalable হয়।


----------------------------------------------


# What is the use of enums in TypeScript? Provide an example of a numeric and string Enum

Enum (Enumeration) হলো TypeScript-এর একটি বিশেষ ফিচার, যা ব্যবহৃত হয় নির্দিষ্ট কিছু মানকে একটি গ্রুপ বা সেট আকারে সংরক্ষণ করার জন্য।
এটি কোডকে আরও readable, maintainable এবং bug-free করে।

Enums সাধারণত  ব্যবহার করা হয় 

নির্দিষ্ট মানের একটি তালিকা দরকার হলে
যেমন: user role, payment status, direction, order status, ইত্যাদি।


---

##  Numeric Enum (সংখ্যা ভিত্তিক enum)

Numeric enum-এ মানগুলো স্বয়ংক্রিয়ভাবে 0 থেকে শুরু হয়, অথবা দরকার হলে কাস্টম মান দিতে পারেন।

### উদাহরণ:

```ts
enum Direction {
  Up,       // 0
  Down,     // 1
  Left,     // 2
  Right     // 3
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0
```

### কাস্টম সংখ্যা ব্যবহার করে:

```ts
enum Status {
  Success = 1,
  Failed = 2,
  Pending = 3
}
```

---

##  String Enum (স্ট্রিং ভিত্তিক enum)

String enum-এ প্রতিটি মান স্ট্রিং আকারে নির্ধারণ করা হয়, যা debugging এবং readability এর জন্য খুবই উপকারী।

### উদাহরণ:

```ts
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

let currentUser: Role = Role.Admin;
console.log(currentUser); // Output: "ADMIN"
```

---

##  কেন Enum ব্যবহার করবেন?

* কোড আরও readable হয়
* নির্দিষ্ট মানের তালিকা maintain করা সহজ
* ভুল string/value ব্যবহারের সম্ভাবনা কমে
* IDE autocomplete সুবিধা পাওয়া যায়

---

##  উপসংহার

TypeScript-এর enum ফিচার কোডকে আরও পরিষ্কার, সাজানো এবং ভুল-প্রতিরোধী করতে সাহায্য করে। Numeric এবং String enum—উভয়ই বিভিন্ন ক্ষেত্রে উপকারী।
