Exercise: Rendering Multiple Components and Nesting Components
In this exercise, you will learn how to create multiple components and render one component inside another.

Step 1: Create a Header Component
Create a new file called Header.jsx.
Inside this file, create a functional component named Header.
The Header component should return a <header> element with the following:
A <h1> element with the text "Welcome to My Website!"
A <nav> element containing three links (<a>) with the text "Home", "About", and "Contact".
Step 2: Create a Footer Component
Create a new file called Footer.jsx.
Inside this file, create a functional component named Footer.
The Footer component should return a <footer> element with a <p> containing the text "© 2024 My Website".
Step 3: Create a MainContent Component
Create a new file called MainContent.jsx.
Inside this file, create a functional component named MainContent.
The MainContent component should return a <main> element containing:
A <h2> element with the text "Main Content".
A <p> element with any text of your choice.
Step 4: Render Components Inside App.jsx
In your App.jsx file, import the Header, MainContent, and Footer components:

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
Inside the App component's return statement, render the three components inside a single <div>, in the following order:

Header
MainContent
Footer
Your App.jsx should look like this:

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;