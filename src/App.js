/**
 * @author ankit. sriv1996@gmail.com
 * date: 16/62021
 */
import "./App.css";
import Main from "./components/Main/main";
import Table from "./components/table/table";
import Company from "./components/Company/Company";
import Customer from "./components/Customer/Customer";
import Primary from "./components/Primary/Primary";

function App() {
  return (
    <div className="App">
      <Main />
      <Table />
      <Company />
      <Customer />
      <Primary />
    </div>
  );
}

export default App;
