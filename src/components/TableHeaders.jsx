import React from "react";

const TableHeaders = ({ data, onSort }) => {
  if (data.length === 0) return null;

  const headers = Object.keys(data[0]).filter((key) => key !== "adress");
  const adressHeaders = Object.keys(data[0].adress);
  const handleSort = (key) => {
    onSort(key);
  };

  return (
    <tr>
      {headers.map((header) => (
        <th key={header} onClick={() => handleSort(header)}>
          {header}
        </th>
      ))}
      {adressHeaders.map((header) => (
        <th key={`adress.${header}`} onClick={() => handleSort(`adress.${header}`)}>{`adress.${header}`}</th>
      ))}
    </tr>
  );
};

export default TableHeaders;
