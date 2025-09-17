import { Button, Typography } from "antd";
import React from "react";
import { useSearchParams } from "react-router-dom";

export const Orders = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get("sort") || "desc";

  return (
    <>
      <Typography.Title level={4}>
        Заказы, Установленная сортировка {sort}
      </Typography.Title>
      <Button onClick={() => setSearchParams({ sort: "asc" })}>
        Сортировать по возрастанию
      </Button>
    </>
  );
};
