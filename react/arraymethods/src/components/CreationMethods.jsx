import "../App.css";

const CreationMethods = () => {
  return (
    <div className="container">
      <h1 className="title">Array Creation Methods</h1>

      <div className="big-card">

        <div className="small-card">
          <h3>Array Literal</h3>

          <p>Creates an array using square brackets.</p>

          <pre className="code">
{`const arr = [1, 2, 3];

console.log(arr);`}
          </pre>

          <div className="output">
            Output: [1, 2, 3]
          </div>
        </div>

        <div className="small-card">
          <h3>Array Constructor</h3>

          <p>Creates an array using the Array constructor.</p>

          <pre className="code">
{`const arr = new Array(1, 2, 3);

console.log(arr);`}
          </pre>

          <div className="output">
            Output: [1, 2, 3]
          </div>
        </div>

        <div className="small-card">
          <h3>Array.from()</h3>

          <p>Creates an array from an iterable object.</p>

          <pre className="code">
{`const arr = Array.from("HELLO");

console.log(arr);`}
          </pre>

          <div className="output">
            Output: ['H','E','L','L','O']
          </div>
        </div>

        <div className="small-card">
          <h3>Array.of()</h3>

          <p>Creates an array from the given arguments.</p>

          <pre className="code">
{`const arr = Array.of(5);

console.log(arr);`}
          </pre>

          <div className="output">
            Output: [5]
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreationMethods;