Exercise: Props Destructuring in React Components
In this exercise, you will learn how to use destructuring to simplify how you access props in React components.

Step 1: Create a Person Component with Props Destructuring
Create a new file called Person.jsx.
Inside this file, create a functional component called Person.
Destructure the name and age props directly in the function parameters and render:
A <h2> element that displays the person's name.
A <p> element that displays the person's age.
Step 2: Create a Product Component with Props Destructuring
Create a new file called Product.jsx.
Inside this file, create a functional component called Product.
Destructure the name and price props in the function parameters and render:
A <h2> element that displays the product's name.
A <p> element that displays the product's price.
Step 3: Pass Props from App.jsx
In your App.jsx file, import the Person and Product components:

import Person from "./Person";
import Product from "./Product";
Inside the App component, pass the name and age props to the Person component, and name and price props to the Product component.

Example:

function App() {
  return (
    <div>
      {/* Passing props to Person */}
      <Person name="John Doe" age={28} />
      <Person name="Jane Smith" age={32} />

      {/* Passing props to Product */}
      <Product name="Laptop" price="$1200" />
      <Product name="Smartphone" price="$699" />
    </div>
  );
}

export default App;