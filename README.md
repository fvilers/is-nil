# is-nil

A TypeScript type guard that validates if the given value is nil

## Installation

```
npm install @fvilers/is-nil
```

or

```
yarn add @fvilers/is-nil
```

## Usage

```ts
import { isNil, isNotNil } from "@fvilers/is-nil";

const variable: string | null = "This is a string";

if (isNil(variable)) {
  console.log("Variable is null");
} else {
  // From here, variable is strongly typed as a non null string
  console.log("Variable is a string with length of", variable.length);
}

if (isNotNil(variable)) {
  // From here, variable is strongly typed as a non null string
  console.log("Variable is a string with length of", variable.length);
} else {
  console.log("Variable is null");
}
```

It will output:

```
Variable is a string with length of 16
Variable is a string with length of 16
```
