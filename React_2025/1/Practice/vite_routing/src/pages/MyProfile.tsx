import { Typography } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

export const MyProfile = () => {
  const { userId } = useParams();

  return <Typography.Title level={4}>Мой профиль {userId}</Typography.Title>;
};
