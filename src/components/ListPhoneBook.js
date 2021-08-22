import React, { useState, useContext } from "react";
import shortid from "shortid";
import Context from "../store/bookePhone-context";
import classes from './ListPhoneBook.module.css'

const fields = ["name", "lastName", "phone"];

export default function ListPhoneBook() {
  const [sorting, setSorting] = useState(false);
  const [filterData, setFiterData] = useState("");
  const phoneBookContext = useContext(Context);

  function handleSorting(fieldName) {
    setSorting((state) => !state);
    if (sorting) {
      ascendentOrden(fieldName);
    } else {
      descendentOrden(fieldName);
    }
  }

  function ascendentOrden(fieldName) {
    phoneBookContext.localData.sort((a, b) => {
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
    phoneBookContext.localData.sort((a, b) => {
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

  let content = '';
  if (phoneBookContext && phoneBookContext.localData) {
      content = filterValues(phoneBookContext.localData, filterData).map((item) => (
        <tr key={shortid.generate()}>
          <td>{item.name}</td>
          <td>{item.lastName}</td>
          <td>{item.phone}</td>
        </tr>
      ));
  } else {
      content = <div>There are no data to show!</div>
  }

  return (
    <>
    <hr/>
      Filter:
      <input
        type="text"
        value={filterData}
        onChange={(e) => {
          setFiterData(e.target.value);
        }}
      />
      <table className={classes.listPhoneData}>
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
          {content}
        </tbody>
      </table>
    </>
  );
}
