import React, { useState, useEffect } from "react";

import Button from "../../Button";
import TextArea from "../../TextArea";
import InputFelid from "../../InputFelid";
import { HOME_PAGE } from "../../../constant/const";

const HandleTaskModal = ({
  isShowModal,
  handleClose,
  modalLabel,
  handleTaskManagement,
  editTaskData,
}) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleTaskSave = () => {
    if (taskName.length !== 0 && taskDescription.length !== 0) {
      handleTaskManagement({
        title: taskName,
        des: taskDescription,
        markAsRead: false,
      });
    }
    setTaskName("");
    setTaskDescription("");
  };

  useEffect(() => {
    setTaskName(editTaskData?.title);
    setTaskDescription(editTaskData?.des);
  }, [editTaskData]);

  return (
    <>
      {isShowModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full">
            <div className="relative my-6 mx-auto max-w-3xl w-2/4">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{modalLabel}</h3>
                  <Button
                    buttonType={"button"}
                    buttonLabel={"✖"}
                    buttonClass={
                      "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    }
                    buttonClick={handleClose}
                  />
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <InputFelid
                    inputLabel={HOME_PAGE.TASK_NAME}
                    inputName={"taskName"}
                    inputType={"text"}
                    inputPlaceholder={HOME_PAGE.TASK_NAME}
                    inputClass={
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }
                    inputLabelClass={
                      "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    }
                    inputOnChange={(e) => setTaskName(e.target.value)}
                    inputValue={taskName}
                  />
                  <TextArea
                    inputLabel={HOME_PAGE.TASK_DESCRIPTION}
                    inputName={"desc"}
                    inputPlaceholder={HOME_PAGE.TASK_DESCRIPTION + "..."}
                    inputClass={
                      "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }
                    inputLabelClass={
                      "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    }
                    inputOnChange={(e) => setTaskDescription(e.target.value)}
                    inputValue={taskDescription}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <Button
                    buttonType={"button"}
                    buttonLabel={HOME_PAGE.CLOSE}
                    buttonClass={
                      "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    }
                    buttonClick={handleClose}
                  />
                  <Button
                    buttonType={"button"}
                    buttonLabel={modalLabel}
                    buttonClass={
                      "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    }
                    buttonClick={handleTaskSave}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default HandleTaskModal;
