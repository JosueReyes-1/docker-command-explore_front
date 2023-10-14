import React, { useContext, useEffect, useState } from "react";
import { ResponseCommandsContext } from "../contexts/fetchData";
import { get_comands } from "../helpers/get_comands";
import { Dropdown } from "./Dropdown";
import { SectionUsage } from "./SectionUsage";

export const Options = () => {
  //guarda el commando seleccionado
  const [dockerCommands, setDockerCommands] = useState("...");
  //guarda el objeto del elemento seleccionado
  const [filterScenario, setFilterScenario] = useState();
  //guarda el escenario seleccionado
  const [selectionScenario, setSelectionScenario] = useState("...");
  //guarda el example del escenario
  const [exampleCommand, setExampleCommand] = useState(null);

  const { data, setData } = useContext(ResponseCommandsContext);

  useEffect(() => {
    const filteredObjects = data.filter(
      (obj) => obj.Command === dockerCommands
    );
    setFilterScenario(filteredObjects);
  }, [dockerCommands]);

  useEffect(() => {
    if (selectionScenario === "...") {
      return;
    }
    const filteredObjects = data.filter(
      (obj) => obj.Command === dockerCommands
    );
    if (filteredObjects <= 0) {
      console.log("No se encontraron objetos con el comando especificado");
    }
    const example = filteredObjects[0].Example;
    setExampleCommand(example);
  }, [selectionScenario]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get_comands();
        setData(response["body"]["docker_commands"]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col mt-8">
      <h3 className="text-blue-700 font-bold text-xl">I want to</h3>
      <Dropdown
        listSelect={dockerCommands}
        setListSelect={setDockerCommands}
        data={data}
        itemSelect={"Command"}
      />
      {dockerCommands != "..." && (
        <Dropdown
          listSelect={selectionScenario}
          setListSelect={setSelectionScenario}
          data={filterScenario}
          itemSelect={"Scenario"}
        />
      )}
      {exampleCommand != null && (
        <SectionUsage exampleCommand={exampleCommand} />
      )}
    </div>
  );
};
