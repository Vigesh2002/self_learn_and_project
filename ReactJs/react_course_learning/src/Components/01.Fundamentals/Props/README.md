Exercise: Using Props in React Components
In this exercise, you will learn how to pass and use props in React components to make them dynamic and reusable.

Step 1: Create a Person Component
Create a new file called Person.jsx.

Inside this file, create a functional component called Person.

This component should accept props and render:

A <h2> element that displays the person's name.
A <p> element that displays the person's age.
Use props.name and props.age to display the dynamic values passed from the parent component.

Step 2: Create a Product Component
Create a new file called Product.jsx.

Inside this file, create a functional component called Product.

This component should accept props and render:

A <h2> element that displays the product's name.
A <p> element that displays the product's price.
Use props.name and props.price to display the values passed from the parent component.

Step 3: Pass Props from App.jsx
In your App.jsx file, import the Person and Product components:

import Person from "./Person";
import Product from "./Product";
Inside the App component, pass dynamic data as props to both Person and Product components:

Pass name and age as props to the Person component.
Pass name and price as props to the Product component.