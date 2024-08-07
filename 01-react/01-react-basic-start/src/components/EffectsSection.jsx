import React, { useEffect, useState, useCallback } from "react";
import Button from "./Button/Button";
import { Modal } from "./Modal/Modal";
import useInput from "../hooks/useinput";

export const EffectsSection = () => {
  const input = useInput();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  function openModal() {
    setModal(!modal);
  }

  return (
    <section>
      <h1>Effects</h1>

      <Button onClick={() => setModal(true)}> Откріть информацию</Button>
      <Modal open={modal}>
        <h3>Hello from Modal</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia sit
          pariatur ipsum quibusdam, atque sed maxime aliquid temporibus vitae
          eos provident porro suscipit iusto totam, repellendus mollitia eveniet
          qui? Modi.
        </p>
        <Button
          onClick={() => {
            setModal(false);
          }}
        >
          Close modal
        </Button>
      </Modal>
      <br />
      <br />
      {loading && <p>Loading</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input} />

          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}> {user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
};
