import Quiz from "./components/Quiz";
import Axios from "axios";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy";

const App = () => {
  let items = ["car", "fruit", "place", "name"];
  const handSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Quiz items={items} heading="Things" onSelectItem={handSelectItem} />
    </div>
  );
};

export default App;
