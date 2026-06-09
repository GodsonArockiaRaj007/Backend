import "./App.css";

import CreationMethods from "./components/CreationMethods";
import SearchingMethods from "./components/SearchingMethods";
import AddRemoveMethods from "./components/AddRemoveMethods";
import CopyMethods from "./components/CopyMethods";
import ConvertMethods from "./components/ConvertMethods";
import SortMethods from "./components/SortMethods";
import IterationMethods from "./components/IterationMethods";
import HigherOrderMethods from "./components/HigherOrderMethods";

function App() {
  return (
    <div className="app">
      <h1 className="main-title">JavaScript Array Methods</h1>

      <CreationMethods />
      <SearchingMethods />
      <AddRemoveMethods />
      <CopyMethods />
      <ConvertMethods />
      <SortMethods />
      <IterationMethods />
      <HigherOrderMethods />
    </div>
  );
}

export default App;