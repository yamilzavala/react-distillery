import React, { useState } from "react";

export default function FormPhoneBook(props) {
  const [nameState, setNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("");
  const [phoneState, setPhoneState] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {
      name: nameState,
      lastName: lastNameState.toLowerCase(),
      phone: phoneState,
    };
    props.data(formData);
  }

  return (
    <>
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
