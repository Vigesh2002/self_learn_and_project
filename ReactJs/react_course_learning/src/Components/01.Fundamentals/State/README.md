Exercise: Mastering useState in React
In this exercise, you’ll learn how to use the useState hook for managing state in various scenarios, including basic usage, arrays, objects, and arrays of objects.

Step 1: Basic Usage of useState
Create a new file called Counter.jsx.
Inside this file, create a functional component called Counter.
Use useState to manage a simple counter state.
Initialize the state with a value of 0.
Create a button to increment the counter by 1 when clicked.
Display the current value of the counter.

Step 2: useState with an Array of Data
Create a new file called TodoList.jsx.
Inside this file, create a functional component called TodoList.
Use useState to manage an array of todo items.
Initialize the state with an empty array.
Create a form to add new todo items to the list.
Display the list of todo items.

Step 3: useState with an Object of Data
Create a new file called Profile.jsx.
Inside this file, create a functional component called Profile.
Use useState to manage an object with user profile information.
Initialize the state with an object containing name and age.
Provide input fields to update the name and age.
Display the updated profile information.

Step 4: useState with an Array of Objects
Create a new file called ShoppingList.jsx.
Inside this file, create a functional component called ShoppingList.
Use useState to manage an array of objects, where each object represents a shopping item with name and quantity.
Initialize the state with an empty array.
Create a form to add new items to the list.
Display the list of shopping items.

Step 5: Render All Components in App.jsx
In your App.jsx file, import the Counter, TodoList, Profile, and ShoppingList components:

import Counter from "./Counter";
import TodoList from "./TodoList";
import Profile from "./Profile";
import ShoppingList from "./ShoppingList";

Inside the App component, render all four components:

function App() {
return (
<div>
<h1>React useState Examples</h1>
<Counter />
<TodoList />
<Profile />
<ShoppingList />
</div>
);
}

export default App;
