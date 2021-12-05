import React from "react";
type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map(({ first, last }) => {
        return (
          <h2>
            {first}, {last}
          </h2>
        );
      })}
    </div>
  );
};
