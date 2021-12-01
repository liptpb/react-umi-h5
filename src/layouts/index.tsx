import React from 'react';
interface AppProps {
  value?: string;
}
export default function (props: any) {
  console.log('--------');
  console.log(props);
  if (props.location.pathname === '/login') {
    return <div>{props.children}</div>;
  }

  return (
    <>
      <div />
      {props.children}
      <div />
    </>
  );
}
