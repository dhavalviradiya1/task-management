import React from "react";

import { HOME_PAGE } from "../../constant/const";
import EditIcon from "../../assets/icons/edit.svg";
import DeleteIcon from "../../assets/icons/delete.svg";
import MarkAsRead from "../../assets/icons/task-done.png";

const Table = ({
  tableData,
  handleChangeMarkAsRead,
  handleEditTask,
  handleDeleteTask,
}) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              {HOME_PAGE.MARK_AS_READ}
            </th>
            <th scope="col" className="px-6 py-3">
              {HOME_PAGE.TITLE}
            </th>
            <th scope="col" className="px-6 py-3">
              {HOME_PAGE.DESCRIPTION}
            </th>
            <th scope="col" className="px-6 py-3">
              {HOME_PAGE.STATUS}
            </th>
            <th scope="col" className="px-6 py-3">
              {HOME_PAGE.ACTION}
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData?.map((taskItem, taskIndex) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={taskIndex}
                >
                  <th scope="row" className="px-6 py-4">
                    {taskItem?.markAsRead ? (
                      <img
                        src={MarkAsRead}
                        alt={HOME_PAGE.NOT_FOUND}
                        className="h-5 w-5"
                      />
                    ) : (
                      <input
                        value="test"
                        type="checkbox"
                        onChange={(e) => handleChangeMarkAsRead(e, taskIndex)}
                      />
                    )}
                  </th>
                  <td className="px-6 py-4">{taskItem?.title}</td>
                  <td className="px-6 py-4">{taskItem?.des}</td>
                  <td className="px-6 py-4">
                    {taskItem?.markAsRead ? (
                      <span className="text-[green]">{HOME_PAGE.DONE}</span>
                    ) : (
                      <span className="text-[orange]">{HOME_PAGE.PENDING}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 flex gap-5">
                    <img
                      src={DeleteIcon}
                      alt={HOME_PAGE.NOT_FOUND}
                      className="h-5 w-5 cursor-pointer"
                      onClick={() => handleDeleteTask(taskIndex)}
                    />
                    <img
                      src={EditIcon}
                      alt={HOME_PAGE.NOT_FOUND}
                      className="h-5 w-5 cursor-pointer"
                      onClick={() => handleEditTask(taskItem, taskIndex)}
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className="flex justify-center w-full">
              {HOME_PAGE.NO_RECORD_FOUND}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
