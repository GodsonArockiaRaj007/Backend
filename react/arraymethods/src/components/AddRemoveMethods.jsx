import "../App.css";

const AddRemoveMethods = () => {
  return (
    <div className="container">
      <h1 className="title">Array Add / Remove Methods</h1>

      <div className="big-card">

        {/* push() */}
        <div className="small-card">
          <h3>push()</h3>

          <p>
            Adds one or more elements to the end of an array.
          </p>

          <pre className="code">
{`const arr = [1, 2, 3];

arr.push(4);

console.log(arr);`}
          </pre>

          <div className="output">
            Output: [1, 2, 3, 4]
          </div>
        </div>

        {/* pop() */}
        <div className="small-card">
          <h3>pop()</h3>

          <p>
            Removes the last element from an array.
          </p>

          <pre className="code">
{`const arr = [1, 2, 3];

arr.pop();

console.log(arr);`}
          </pre>

          <div className="output">
            Output: [1, 2]
          </div>
        </div>

        {/* unshift() */}
        <div className="small-card">
          <h3>unshift()</h3>

          <p>
            Adds one or more elements to the beginning of an array.
          </p>

          <pre className="code">
{`const arr = [2, 3, 4];

arr.unshift(1);

console.log(arr);`}
          </pre>

          <div className="output">
            Output: [1, 2, 3, 4]
          </div>
        </div>

        {/* shift() */}
        <div className="small-card">
          <h3>shift()</h3>

          <p>
            Removes the first element from an array.
          </p>

          <pre className="code">
{`const arr = [1, 2, 3];

arr.shift();

console.log(arr);`}
          </pre>

          <div className="output">
            Output: [2, 3]
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddRemoveMethods;