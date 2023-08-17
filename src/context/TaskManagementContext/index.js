import React, { useState, createContext } from "react";

import { TASK_DATA } from "../../constant/const";

const UseTaskManagementContext = createContext(undefined);
const DispatchTaskManagementContext = createContext(undefined);

const TaskManagementContext = ({ children }) => {
  const [taskManagementData, setTaskManagementData] = useState(TASK_DATA);
  return (
    <UseTaskManagementContext.Provider value={taskManagementData}>
      <DispatchTaskManagementContext.Provider value={setTaskManagementData}>
        {children}
      </DispatchTaskManagementContext.Provider>
    </UseTaskManagementContext.Provider>
  );
};

export { UseTaskManagementContext, DispatchTaskManagementContext };
export default TaskManagementContext;
