# What are some differences between interfaces and types in TypeScript?


TypeScript এ ডেটার স্ট্রাকচার বা ধরন নির্ধারণ করার জন্য দুটি প্রধান উপায় রয়েছে: interface এবং type। উভয়ই অবজেক্ট, ফাংশন এবং কমপ্লেক্স ডেটা স্ট্রাকচার ডিফাইন করতে ব্যবহার করা হয়, তবে এগুলোর মধ্যে কিছু সূক্ষ্ম পার্থক্য রয়েছে। সঠিকভাবে বোঝা গেলে কোড আরও পরিষ্কার ও maintainable হয়।

**১. Interface কি?**

Interface ব্যবহার করে আমরা একটি object, class  বা Function  নির্ধারণ করতে পারি। এটি মূলত একটি contract তৈরি করে, যা class বা object অনুসরণ করবে।


**২. Type কি?**

Type keyword ব্যবহার করে আমরা একটি structure বা type define করতে পারি। Type আরও flexible; এটি object, primitive, union, intersection, tuple ইত্যাদির জন্য ব্যবহার করা যায়।


**৩. কখন কোনটি ব্যবহার করব?**
- Interface ব্যবহার:

	Object shape বা API contract define করতে।
	Declaration merging দরকার হলে।
	Class implement করবে এমন structure এর জন্য।

- Type ব্যবহার :

	Union, Intersection, Tuple বা Primitive type দরকার হলে।
	বেশি flexible type define করতে হলে।

**৪. Practical উদাহরণ**

- Interface ব্যবহার
interface Product {
  id: number;
  name: string;
  price: number;
}

- Type ব্যবহার (union)
type Status = "active" | "inactive" | "pending";

const product: Product = { id: 1, name: "Laptop", price: 1000 };
const userStatus: Status = "active";

**৫. উপসংহার**

Interface এবং Type দুইটিই object shapes define করতে পারে, তবে ব্যবহার এবং flexibility এ পার্থক্য রয়েছে।
Interface: structured contract এবং class implementation এর জন্য best।
Type: flexible type, union/intersection, বা complex composition এর জন্য best।
সঠিক ব্যবহারে কোড আরও readable, maintainable, এবং scalable হয়।