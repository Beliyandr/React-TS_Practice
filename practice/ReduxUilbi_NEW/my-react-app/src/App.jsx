import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomerAction,
  addManyCustomersAction,
  removeCustomerAction,
} from "./store/customerReducer";
import { fetchCustomers } from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomers = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };

    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (id) => {
    dispatch(removeCustomerAction(id));
  };

  return (
    <>
      <button onClick={() => addCash(Number(prompt()))}>Добавить денег</button>
      <p style={{ fontSize: "3rem" }}>{cash}</p>
      <button onClick={() => getCash(Number(prompt()))}>Забрать денег</button>
      <br />
      <button onClick={() => addCustomers(prompt())}>Добавить клиента</button>
      <button onClick={() => dispatch(fetchCustomers())}>
        Получить клиентов из базы
      </button>

      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <p key={customer.id} onClick={() => removeCustomer(customer.id)}>
              {customer.name}
            </p>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "3rem" }}>Клиенти відсутні</div>
      )}
    </>
  );
}

export default App;
