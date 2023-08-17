import React, { useState, useContext } from "react";

import Table from "../../common/Table";
import Button from "../../common/Button";
import {
  DispatchTaskManagementContext,
  UseTaskManagementContext,
} from "../../context/TaskManagementContext";
import HandleTaskModal from "../../common/Modal/HandleTaskModal";
import { HOME_PAGE } from "../../constant/const";

const TodoList = () => {
  const taskData = useContext(UseTaskManagementContext);
  const dispatchTaskManagementContext = useContext(
    DispatchTaskManagementContext
  );

  const [isOpenHandleTaskModal, setIsOpenHandleTaskModal] = useState(false);
  const [modalLabel, setModalLabel] = useState(HOME_PAGE.ADD_TASK);
  const [isTaskAdd, setIsTaskAdd] = useState(true);
  const [editTaskData, setEditTaskData] = useState();
  const [editTaskIndex, setEditTaskIndex] = useState(-1);

  const HandleCloseTaskModal = () => {
    setIsOpenHandleTaskModal(false);
  };

  const handleAddTask = () => {
    setIsOpenHandleTaskModal(true);
    setModalLabel(HOME_PAGE.ADD_TASK);
    setIsTaskAdd(true);
  };

  const handleTaskManagement = (data) => {
    const taskDataTemp = [...taskData];
    if (isTaskAdd) {
      taskDataTemp.push(data);
      dispatchTaskManagementContext(taskDataTemp);
    } else {
      taskDataTemp[editTaskIndex].title = data.title;
      taskDataTemp[editTaskIndex].des = data.des;
      taskDataTemp[editTaskIndex].markAsRead = data.markAsRead;
      dispatchTaskManagementContext(taskDataTemp);
    }
    HandleCloseTaskModal();
  };

  const handleEditTask = (taskItem, taskIndex) => {
    setIsTaskAdd(false);
    setModalLabel(HOME_PAGE.EDIT_TASK);
    setIsOpenHandleTaskModal(true);
    setEditTaskData(taskItem);
    setEditTaskIndex(taskIndex);
  };

  const handleDeleteTask = (taskIndex) => {
    const taskDataDeleted = [...taskData];
    taskDataDeleted.splice(taskIndex, 1);
    dispatchTaskManagementContext(taskDataDeleted);
  };

  const handleClearAllTask = () => {
    dispatchTaskManagementContext([]);
  };

  const handleChangeMarkAsRead = (e, taskIndex) => {
    const taskDataRead = [...taskData];
    taskDataRead[taskIndex].markAsRead = e.target.checked;
    dispatchTaskManagementContext(taskDataRead);
  };

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-medium text-2xl">Task Management</h1>
        <div className="flex">
          <Button
            buttonType="button"
            buttonLabel={HOME_PAGE.ADD_TASK}
            buttonClass={
              "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            }
            buttonClick={handleAddTask}
          />
          <Button
            buttonType="button"
            buttonLabel={HOME_PAGE.CLEAR_ALL}
            buttonClass={
              "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            }
            buttonClick={handleClearAllTask}
          />
        </div>
      </div>
      <Table
        tableData={taskData}
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
        handleChangeMarkAsRead={handleChangeMarkAsRead}
      />
      <HandleTaskModal
        isShowModal={isOpenHandleTaskModal}
        handleClose={HandleCloseTaskModal}
        modalLabel={modalLabel}
        handleTaskManagement={handleTaskManagement}
        editTaskData={!isTaskAdd && editTaskData}
      />
    </>
  );
};

export default TodoList;
