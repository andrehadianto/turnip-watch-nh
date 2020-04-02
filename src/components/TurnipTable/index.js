import React from "react";
import { Table } from "antd";

export const TurnipTable = () => {
  const columns = [
    { title: "Week", dataIndex: "week", key: "week" },
    { title: "Day", dataIndex: "day", key: "day" },
    { title: "Afternoon", dataIndex: "afternoon", key: "afternoon" }
  ];

  const dataTable = [
    { key: "1", week: "Monday", day: 99, afternoon: 87 },
    { key: "2", week: "Tuesday", day: 85, afternoon: 73 },
    { key: "3", week: "Wednesday", day: 70, afternoon: 94 },
    { key: "4", week: "Thursday", day: 99, afternoon: 87 },
    { key: "5", week: "Friday", day: 85, afternoon: 73 },
    { key: "6", week: "Sunday", day: 70, afternoon: 94 }
  ];
  
  return <Table columns={columns} dataSource={dataTable} />;
};
