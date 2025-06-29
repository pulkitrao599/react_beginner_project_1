//import ListGroup from "./components/ListGroup";

//import Alert from "./components/Alert";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  {
    /*const handleSelectItem = (item: string) => {
    console.log(item);
  };*/
  }
  //let items = ["New York", "San Franscisco", "Tokyo", "Ahmedabad", "Surat"];
  return (
    <div>
      {/*<ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />*/}
      {/*<Alert>
        Hello <span> World!!! </span>
      </Alert>*/}
      {alertVisible && (
        <Alert onCLose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onCLick={() => setAlertVisibility(true)}>My Button!!</Button>
    </div>
  );
}

export default App;
