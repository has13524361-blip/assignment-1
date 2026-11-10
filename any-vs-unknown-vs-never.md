TypeScript's Type Hierarchy: any, unknown, and never Explained
When I first started learning TypeScript I was confused about any, unknown and never. They all sound like weird edge case types but actually they sit at very important positions in the type system. Understanding them properly will make your code alot safer, trust me.

Let me break down where each one fits.

any – the escape hatch. When you use any you basically telling TypeScript "turn off checking for this". You can do anything with it and no errors will come up.

typescript
let value: any = "hello";
value.toFixed(2); // no error, but crashes at runtime!
value = 42;
value = { name: "bob" };
This is dangerous because you lose all type safety. Its like turning off your seatbelt.

unknown – the safe top type. unknown can hold any value, just like any. But the big difference is you cannot use it until you narrow it down first.

typescript
let value: unknown = "hello";
value.toUpperCase(); // ERROR: Object is of type 'unknown'

if (typeof value === "string") {
  value.toUpperCase(); // now it works, we narrowed it
}
So unknown is like any but forced to be responsible.

never – the bottom type. never means a value that can never happen. Its used for functions that always throw or infinite loops, and it sits at the very bottom of the hierarchy.

typescript
function fail(msg: string): never {
  throw new Error(msg);
}
Now about the hierarchy itself. Think of it top to bottom: unknown is the top type (everything is assignable to it), any is special and fits everywhere (it breaks the rules), and never is the bottom type (it is assignable to everything, but nothing is assignable to it except never).

Why prefer unknown over any? Simple. With any you can accidently call methods that dont exist and get runtime crashes. With unknown the compiler forces you to check the type first, which catches bugs early. So unless you really have no other option (like migrating old JS code), reach for unknown instead. Your future self will thank you.