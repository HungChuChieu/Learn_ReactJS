import Data from "./data.js";
const PostItem = (props) => {
  return (
    <div>
      <img src="" width="300px" alt="" />
      <h1 className="title"></h1>
      <h2 className="slot"></h2>
      <p className="description"></p>
    </div>
  );
};

const App = () => {
  return <PostItem />;
};

export default App;
