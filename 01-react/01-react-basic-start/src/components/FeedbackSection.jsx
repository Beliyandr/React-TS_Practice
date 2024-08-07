import React, { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  const input = useRef();

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setShow(true);
    }
  }

  return (
    <div>
      <h3>Input Value : {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        className="control"
        onKeyDown={handleKeyDown}
        // value={value}
        // onChange={(e) => {
        //   setValue(e.target.value);
        // }}
      />
    </div>
  );
}

export const FeedbackSection = () => {
  const [form, setForm] = useState({
    name: "",
    hasError: true,
    reason: "help",
  });

  // const [name, setName] = useState("");
  // const [reason, setReason] = useState("help");
  // const [hasError, setHasError] = useState(true);

  function handleNameChange(event) {
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0);

    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: !event.target.value,
    }));
  }

  // function toggleError() {
  //   setHasError((prevState) => !prevState);
  //   setHasError(!hasError);
  // }

  return (
    <section>
      <h3>Feedback_1</h3>

      {/* <Button onClick={toggleError}>Toggle Error</Button> */}

      <form action="">
        <label htmlFor="name">Ваше имя</label>
        <input
          id="name"
          type="text"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          value={form.reason}
          onChange={(event) => {
            setForm((prev) => ({
              ...prev,
              reason: event.target.value,
            }));
          }}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <pre>
          {/* <br />
          Name: {form.name}
          <br />
          <br />
          Reason: {form.reason}
          <br /> */}
          {JSON.stringify(form, null, 2)}
        </pre>

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>
      </form>
      <br />
      <hr />
      <br />
      <StateVsRef></StateVsRef>
    </section>
  );
};
