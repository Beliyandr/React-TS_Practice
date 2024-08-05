import React, { useState } from "react";
import Button from "./Button/Button";

export const FeedbackSection = () => {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <section>
      <h3>Feedback_1</h3>

      <form action="">
        <label htmlFor="name">Ваше имя</label>
        <input
          id="name"
          type="text"
          className="control"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          value={reason}
          onChange={(event) => {
            setReason(event.target.value);
          }}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <Button> Отправить</Button>
      </form>
    </section>
  );
};
