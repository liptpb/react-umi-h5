import styles from './index.less';

import { Button, Empty } from 'antd-mobile';

export default function IndexPage() {
  return (
    <div>
      <Button color="primary" onClick={backClick}>
        返回主页
      </Button>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
