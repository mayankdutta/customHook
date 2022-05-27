import { useState } from "react";
import User from "./User";
import Comments from "./Comments";
import Hook from "./Hook";
import Post from "./Post";

function App() {
  const [choice, setChoice] = useState("user");
  // const user = Hook("");
  const comments = Hook("https://jsonplaceholder.typicode.com/comments");
  const post = Hook("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => setChoice("user")}> User</button>
      <button onClick={() => setChoice("comment")}>Comments</button>
      <button onClick={() => setChoice("post")}>Posts</button>
      <table>
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>Body</td>
        </tr>
        {/* {choice === "user" && <User user={user} />} */}
        {choice === "comment" && <Comments comments={comments} />}
        {choice === "post" && <Post post={post} />}
      </table>
    </>
  );
}

export default App;
