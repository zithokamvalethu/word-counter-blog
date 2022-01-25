import "./App.css";
import React, { useState } from "react";

function App() {
  const [blog, setBlog] = useState({
    words: "",
    length: 0,
  });
  const [blogList, setBlogList] = useState([]);

  const handleChange = (e) => {
    setBlog({
      words: e.target.value,
      length: e.target.value.trim().split(" ").length,
    });
    // console.log("kamva", e.target.value.trim().split(" ").length);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let { words, length } = blog;
    if (words.length > 150) {
      alert("Exceeded word limit");
    } else if (length === 0) {
      alert("you need to type something");
    } else {
      setBlogList([...blogList, blog]);
    }
  };

  return (
    <div className="form-container">
      <h1>MY BLOG:</h1>
      <div className="text">
        <textarea
          className="form-control z-depth-1"
          rows="7"
          placeholder="Write something here..."
          type="text"
          value={blog.words}
          onChange={(e) => handleChange(e)}
        />{" "}
      </div>
      <br />
      <button className="btn btn-dark" onClick={handleSubmit} type="submit">
        Submit
      </button>
      {blogList.map((value) => {
        return (
          <div className="table-container">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Word Count</th>
                  <th scope="col">Blog Text</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{value.length}</td>
                  <td>{value.words}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default App;
