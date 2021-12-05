import React from "react";
interface Props {
  name: string;
  messageCount: number;
}
type HeaderProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
export const Header = (props: HeaderProps) => {
  //in some cases, there are not data of messageCount. 
  //So, to avoid the undefined data, you can declare it 0.
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn
        ? `Welcome ${props.name}! You have ${messageCount} unread msg`
        : "Welcome Guest"}
    </div>
  );
};
