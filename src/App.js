import "./styles.css";
import propsData from "./data";
import { Button } from "./components/Button";

export default function App() {
  return (
    <div className="App">
      {propsData.map((i) => (
        <a href={i.url} target="_blank" rel="noreferrer">
          <Button
            name={i.name}
            buttonStyle={i.buttonStyle}
            buttonSize={i.buttonSize}
            type={i.button}
            id={i.id}
          />
        </a>
      ))}
    </div>
  );
}
