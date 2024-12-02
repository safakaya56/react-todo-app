import { useState } from "react"
import ListItem from "./components/ListItem";
import List from "./components/List";

export default function App() {

  const [inputValue, setInputValue] = useState([]);
  const [temp, setTemp] = useState({ mission: "add a task", releaseDate: "2024-01-01" });

  function handleAddItem() {
    setInputValue([...inputValue, temp])
    setTemp({ mission: "", releaseDate: "" });
  }

  function handleDeleteItem(index) {
    const updatedList = [...inputValue];
    updatedList.splice(index, 1);
    setInputValue(updatedList);
  }


  return (
    <div style={{ maxWidth: "30rem", margin: "30px auto" }}>
      <div className="container-fluid d-flex justify-content-center py-3 rounded-3 text-white bg-primary">
        <h1>TODO APP</h1>
      </div>
      <div className="mt-4">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="" id="" placeholder="add a task" className="py-1" value={temp.mission} required style={{ width: "240px", height: "40px" }} onChange={(e) => setTemp({ ...temp, mission: e.target.value })} />
          <input type="date" name="" id="" className="ms-4" value={temp.releaseDate} required style={{ height: "40px" }} onChange={(e) => setTemp({ ...temp, releaseDate: e.target.value })} />
          <button className="btn btn-success ms-4" style={{ height: "40px" }} onClick={handleAddItem}>Add</button>
        </form>
      </div>

      <div>
        <List _girdi={inputValue} onDeleteItem={handleDeleteItem} />
      </div>

    </div>
  )
}


