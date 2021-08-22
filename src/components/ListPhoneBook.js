import React, { useState, useEffect } from "react";
import shortid from "shortid";

const fields = ["name", "lastName", "phone"];

export default function ListPhoneBook({ data }) {
  const [localData, setLocalData] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [filterData, setFiterData] = useState("");

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  function handleSorting(fieldName) {
    setSorting((state) => !state);
    if (sorting) {
      ascendentOrden(fieldName);
    } else {
      descendentOrden(fieldName);
    }
  }

  function ascendentOrden(fieldName) {
    localData.sort((a, b) => {
      if (a[fieldName].toLowerCase() > b[fieldName].toLowerCase()) {
        return 1;
      } else if (a[fieldName].toLowerCase() < b[fieldName].toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  function descendentOrden(fieldName) {
    localData.sort((a, b) => {
      if (a[fieldName].toLowerCase() < b[fieldName]) {
        return 1;
      } else if (a[fieldName].toLowerCase() > b[fieldName].toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  function filterValues(state, fiterText) {
    return state.filter((item) => {
      return Object.values(item).some((s) =>
        ("" + s).toLowerCase().includes(fiterText)
      );
    });
  }

  return (
    <>
      Filter:
      <input
        type="text"
        value={filterData}
        onChange={(e) => {
          setFiterData(e.target.value);
        }}
      />
      <table>
        <thead>
          <tr>
            {fields.map((field) => (
              <th onClick={() => handleSorting(field)} key={shortid.generate()}>
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterValues(localData, filterData).map((item) => (
            <tr key={shortid.generate()}>
              <td>{item.name}</td>
              <td>{item.lastName}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
