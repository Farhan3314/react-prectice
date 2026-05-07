import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Usama"
        age={25}
        img="https://images.unsplash.com/photo-1773240306707-2a07fc569fde?q=80&w=473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        p="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Card
        user="Zeeshan"
        age={30}
        img="https://plus.unsplash.com/premium_photo-1749010150570-366f704b7c96?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        p="Animi quasi minima repudiandae accusamus maxime quis soluta,"
      />
      <Card
        user="Saem"
        age={18}
        img="https://plus.unsplash.com/premium_photo-1749037390875-20abe4fd53b7?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        p="Animi quasi minima repudiandae accusamus maxime quis soluta,"
      />
      <Card
        user="Rawal"
        age={32}
        img="https://plus.unsplash.com/premium_photo-1658506819452-0236dbc20562?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        p="Animi quasi minima repudiandae accusamus maxime quis soluta,"
      />
    </div>
  );
};

export default App;
