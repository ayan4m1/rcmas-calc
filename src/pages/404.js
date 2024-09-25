import { Fragment } from 'react';

import Layout from 'components/Layout';

export function Head() {
  return (
    <Fragment>
      <title>Page Not Found</title>
    </Fragment>
  );
}

export default function NotFoundPage() {
  return (
    <Layout>
      <h1>Page Not Found</h1>
      <p>You just tried to access a page that doesn&#39;t exist!</p>
    </Layout>
  );
}
