import React, { useState, useContext } from "react";
import Context from "../store/bookePhone-context";

export default function FormPhoneBook() {
  const [nameState, setNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("");
  const [phoneState, setPhoneState] = useState("");
  const phoneBookContext = useContext(Context);

  function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {
      name: nameState,
      lastName: lastNameState.toLowerCase(),
      phone: phoneState,
    };
    phoneBookContext.addPhoneBook(formData);
  }

  return (
    <>
      <h4>Add phone data</h4>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={nameState}
            onChange={(e) => {
              setNameState(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={lastNameState}
            onChange={(e) => {
              setLastNameState(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="text"
            value={phoneState}
            onChange={(e) => {
              setPhoneState(e.target.value);
            }}
          />
        </div>

        <div>
            <button type='submit'>Enviar</button>
        </div>
      </form>
    </>
  );
}
