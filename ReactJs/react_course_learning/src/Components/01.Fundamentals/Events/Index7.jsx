import React from "react";

const Index7 = () => {
  const [value, setValue] = React.useState("");

  const handleClick = () => {
    console.log("Button clicked!");
  };

  const handleCopy = () => {
    console.log("Don't copy my text!");
  };

  const handleMouseOver = () => {
    console.log("Hovering over the paragraph!, Mouse over event triggered!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log(value);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Enter Pressed");
    }
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p onCopy={handleCopy}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
        perferendis voluptatibus illo alias. Porro incidunt distinctio tempore
        vitae! Aperiam, placeat?
      </p>

      <p onMouseMove={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolor
        aspernatur ratione quae eum tempore eos? Non esse ratione laboriosam
        perferendis vero ex consectetur magnam aperiam porro impedit totam
        commodi error sequi repellendus, quas sint? Facere deserunt, delectus,
        rem cum illo ex ab, commodi eos voluptate culpa perspiciatis repellat
        beatae?
      </p>

      <div
        onMouseEnter={() => console.log("Mouse entered")}
        onMouseLeave={() => console.log("Mouse left")}
        style={{ padding: "20px", border: "1px solid black" }}
      >
        Hover Over Me
      </div>

      <br />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
          onFocus={() => console.log("Input focused")}
          onBlur={() => console.log("Input blurred")}
          onCopy={() => console.log("Text copied!")}
          onPaste={() => console.log("Text pasted!")}
        />
        <button type="submit">Submit</button>
      </form>

      <br />

      <input type="text" onKeyDown={handleKeyDown} />

      <div
        onTouchStart={() => console.log("Touch started")}
        onTouchEnd={() => console.log("Touch ended")}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "lightblue",
        }}
      />
    </div>
  );
};

export default Index7;
