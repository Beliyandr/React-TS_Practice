import { Button, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Delivery = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography.Title level={4}>Доставка</Typography.Title>
      <Button onClick={() => navigate(-1)}>Назад</Button>
    </>
  );
};
