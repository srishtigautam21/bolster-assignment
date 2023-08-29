import "./App.css";
import ImageComponent from "./component/ImageComponent";
import { data } from "./data";

function App() {
  data.map((item) =>
    console.log(item.image2.split("-")[1].includes("correct"))
  );
  return (
    <div className='App'>
      <div>Timer</div>
      <ImageComponent data={data} />
    </div>
  );
}

export default App;
