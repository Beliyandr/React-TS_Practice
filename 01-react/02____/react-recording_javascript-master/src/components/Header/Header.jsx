import cn from "classnames";

import { SORT_FIELD } from "../../constants";

export const Header = ({ sortfield, sortBy, filterBy, query }) => {
  return (
    <header>
      <button
        onClick={() => {
          sortBy("");
          filterBy("");
        }}
      >
        Reset
      </button>
      <button>Reverse</button>
      <input
        value={query}
        type="text"
        onChange={(event) => {
          filterBy(event.target.value);
        }}
      />
      <div>
        Sort by:
        <button
          onClick={() => sortBy(SORT_FIELD.ID)}
          className={cn({ active: sortfield === SORT_FIELD.ID })}
        >
          id
        </button>
        <button
          onClick={() => sortBy(SORT_FIELD.NAME)}
          className={cn({ active: sortfield === SORT_FIELD.NAME })}
        >
          name
        </button>
        <button
          onClick={() => sortBy(SORT_FIELD.COLOR)}
          className={cn({ active: sortfield === SORT_FIELD.COLOR })}
        >
          color
        </button>
      </div>
    </header>
  );
};
