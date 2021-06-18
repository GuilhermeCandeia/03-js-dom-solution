# Instructions

<br>

- The public URL to the assessment: https://www.qualified.io/assess/5f7dc7b2bc6341a9eda41419
- Estimated time for this challenge is: **30 min**

<br>

# JS DOM List

<br>

## Context

You have learned the basics of DOM manipulation. One of the concepts that were presented during the lectures was **appending elements to the DOM**.
In this exercise, you will have a chance to check your understanding of it.

<br>

## Getting Started

All your work should be done in the `index.js` file. More specifically, your task is to implement the function `displayUsers`.
The function declaration is already provided in the `index.js` file.

Due to the testing environment setup, you should not change the name of the provided function declaration `displayUsers(users){ }`.

<br>

To begin working you just need to start writing your code inside the function.

<br>

## Your code and submission

To check on your progress and if you are passing the tests, you can click on the `RUN TESTS` button.

In addition to this, you can reference the tests by opening the `index.test.js` file.

**_Hint_**: You may want to reference the test output (in the `Run Output` panel) since there might be some edge cases stated in the tests, that might not be too obvious from instructions.

To submit the current challenge when done, you have to click on the `SUBMIT` button, in the upper right corner.

<br>

### Final Submission

The final submission of the assessment is done in the **REVIEW** panel. There you will be prompted to check your code once again and do a final submission. You can't do any re-submission after this step is done.

<br>

## Tasks & Objectives

Function `displayUsers` receives one argument named `users` which is an array of strings. The function should do the following:

1. Create a new `ul` unordered list element in the DOM
2. Create a new `li` element for each item in the `users` array
3. Add a `class` attribute to each `li` element

<br>

#### 1. Create a new `ul` unordered list element in the DOM

If you take a look at the `index.html` file, you will notice a `<div id="app"></div>` element. In the function `displayUsers` you should:

- Write a query to get this DOM element ( `<div id="app"></div>` ).
- Create a new unordered list element.
- Append the unordered list element to the previously mentioned `<div>` element.

<br>

#### 2. Create a new `li` element for each item in the `users` array

Next, after creating and appending the unordered list to the div, the function `displayUsers` should also create a `<li>` element for each item in the `users` array. To achieve this you should:

- Create a new `li` element for each item in the `users` array.
- Append each created `li` element to the existing unordered list.
- Set the string value of each array item as the content of each `li` element.

To see the contents of the `users` array, you can use `console.log` inside the function:

```js
console.log(users);
```

**Hint**: You should loop through the array and create a new `<li>` for each element.

<br>

#### 3. Add a `class` attribute to each `li` element

Depending whether elements in the `users` array have an **even** or **odd** index number, add a `class` attribute `class="even"` or`class="odd"` to the `li` element.

**Example**:

```html
<li class="even">Angel</li>
<li class="odd">Victor</li>
```

If you need one more hint, check this StackOverflow [article](https://stackoverflow.com/questions/46141450/create-li-from-loop-through-array-and-display-to-html-as-a-list).

<br>

Good luck!

_Your Ironhack team_
