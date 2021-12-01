import React from 'react';
import { Link, history } from 'umi';
interface AppProps {
  value?: string;
}
const Demo: React.FC<AppProps> = (props: AppProps) => {
  const aaa = () => {
    history.push('/list');
  };
  return (
    <div>
      <div className="" onClick={aaa}>
        page2
      </div>
      <Link to="/list">Go to list page</Link>
    </div>
  );
};
export default Demo;
