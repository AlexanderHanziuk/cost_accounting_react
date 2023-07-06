import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL__COSTS = [];

const App = () => {
  const [costs, setCosts] = useState(INITIAL__COSTS);
  const addCostHandler = (cost) => {
    setCosts((previousCosts) => {
      return [cost, ...previousCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
