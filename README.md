# arrayToggle

Return an Array with a value included/removed, with optional forcing.

I made this function because I found one of the most annoying situations I've
run into with Arrays, is toggling values.. but also being able to force whether
the value stays present or not.

Example:
```typescript
const list = [1, 2, 3];
const toggled = arrayToggle(list, 2);

console.log(toggled);
# [1, 3]
```

The third argument of arrayToggle allows forcing the value's state within the
Array, in an event where its membership may be governed by some other value,
such as a checkbox being checked or not.

Example:
```typescript
const list = [1, 2, 3];
const toggled = arrayToggle(list, 2, true);

console.log(toggled);
# [1, 2, 3]
```
