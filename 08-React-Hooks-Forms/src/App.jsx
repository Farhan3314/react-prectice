import TodoMiniProject from "./todoMiniProject/main";
import FormValidation from "./components/FormValidatiom";
import ListsKeys from "./components/ListsKeys";
import FormsControlledComponents from "./components/FormsControlledComponents";

const App = () => {
  return (
    <div>
      <TodoMiniProject />
      <FormValidation />
      <ListsKeys />
      <FormsControlledComponents />
    </div>
  )
}

export default App
