import "../App.css";

const SearchingMethods = () => {
  return (
    <div className="container">
      <h1 className="title">Array Searching Methods</h1>

      <div className="big-card">

        {/* includes() */}
        <div className="small-card">
          <h3>includes()</h3>

          <p>
            Checks whether an element exists in the array and returns
            true or false.
          </p>

          <div className="code">
{`const arr = [10, 20, 30, 40];

console.log(arr.includes(20));`}
          </div>

          <div className="output">
            Output: true
          </div>
        </div>

        {/* indexOf() */}
        <div className="small-card">
          <h3>indexOf()</h3>

          <p>
            Returns the index of the first occurrence of an element.
          </p>

          <div className="code">
{`const arr = [10, 20, 30, 20];

console.log(arr.indexOf(20));`}
          </div>

          <div className="output">
            Output: 1
          </div>
        </div>

        {/* lastIndexOf() */}
        <div className="small-card">
          <h3>lastIndexOf()</h3>

          <p>
            Returns the index of the last occurrence of an element.
          </p>

          <div className="code">
{`const arr = [10, 20, 30, 20];

console.log(arr.lastIndexOf(20));`}
          </div>

          <div className="output">
            Output: 3
          </div>
        </div>

      </div>
    </div>
  );
};

export default SearchingMethods;