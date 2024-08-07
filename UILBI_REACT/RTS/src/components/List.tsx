import React from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

// export const List: React.FC<ListProps> = ({ items, children }) => {
//   return <div>List</div>;
// };

export default function List<T>(props: ListProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
}
