import { Fragment } from 'react';
import { Card } from 'react-bootstrap';

import Layout from 'components/Layout';

export function Head() {
  return (
    <Fragment>
      <title>Home</title>
    </Fragment>
  );
}

export default function IndexPage() {
  return (
    <Layout>
      <Card body>
        <h1>RCMAS Calculator</h1>
        <p>This site provides a free, accurate RCMAS-2 test calculator.</p>
      </Card>
    </Layout>
  );
}
