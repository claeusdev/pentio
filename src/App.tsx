import axios from "axios";
import { useEffect, useState } from "react";
import Api from "src/api"
import Application from "src/components/App";

function App() {
  const [state, setstate] = useState()
  useEffect(() => {
    async function getProduct() {
      const response = await new Api().getPayroll()
      console.log("RES", { response })
    }
    getProduct();
  }, []);
  return (
    <div className="App">
      <Application />
    </div>
  );
}

export default App;
