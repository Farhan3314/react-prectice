import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card
        user="Usama"
        age={25}
        img="https://images.unsplash.com/photo-1773240306707-2a07fc569fde?q=80&w=473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        p="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
    </div>
  );
};

export default App;
