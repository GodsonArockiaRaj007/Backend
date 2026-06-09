import "../App.css";

const ConvertMethods = () => {
  return (
    <div className="container">
      <h1 className="title">Array Convert Methods</h1>

      <div className="big-card">

        {/* join() */}
        <div className="small-card">
          <h3>join()</h3>

          <p>
            Converts all array elements into a string using a specified separator.
          </p>

          <div className="code">
{`const arr = ["HTML", "CSS", "JavaScript"];

const result = arr.join(" - ");

console.log(result);`}
          </div>

          <div className="output">
            Output: HTML - CSS - JavaScript
          </div>
        </div>

        {/* toString() */}
        <div className="small-card">
          <h3>toString()</h3>

          <p>
            Converts an array into a comma-separated string.
          </p>

          <div className="code">
{`const arr = ["HTML", "CSS", "JavaScript"];

const result = arr.toString();

console.log(result);`}
          </div>

          <div className="output">
            Output: HTML,CSS,JavaScript
          </div>
        </div>

      </div>
    </div>
  );
};

export default ConvertMethods;