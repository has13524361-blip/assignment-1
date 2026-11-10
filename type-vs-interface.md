Type Aliases vs Interface in TypeScript – Whats the Real Difference?
So I been using TypeScript for a while now and one question that keeps coming up in code reviews and interviews is: when do you use a type and when do you use an interface? Honestly at first I thought they were the same thing, just two ways to do the same job. But there are actually some real differences that matter.

Let me show you the basics first:

typescript
// type alias
type User = {
  name: string;
  age: number;
};

// interface
interface User {
  name: string;
  age: number;
}
Both of these look identical and in most cases they behave the same. But here is where things get interesting.

Difference 1: Declaration merging. Interfaces can be declared multiple times and they merge together. Types cannot do this – if you declare a type twice you get an error.

typescript
interface User {
  name: string;
}

interface User {
  age: number;
}
// this works, User now has both name and age

type User = { name: string };
type User = { age: number };
// ERROR: Duplicate identifier
Difference 2: What they can represent. Interfaces can only describe object shapes. Types are more flexible – you can use them for unions, primitives, tuples and more.

typescript
type ID = string | number;  // unions - only possible with type
type Point = [number, number];  // tuples
type Name = string;  // primitive alias
Difference 3: Extending. Both can extend, but syntax is different. Interface uses extends keyword while type uses & intersection.

So when should you pick one? My rule of thumb: use interface for public APIs and object shapes that might need extending or declaration merging (like if you publishing a library). Use type when you need unions, tuples, or just want a quick alias for something complex.

Honestly, in day to day code most teams pick one and stick with it for consistency. But knowing the differences will save you from weird bugs later. Hope this helped someone out there.