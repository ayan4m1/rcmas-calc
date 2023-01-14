import { Card } from 'react-bootstrap';

import Layout from '~components/Layout';
import SEO from '~components/SEO';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Card body>
        <h1>RCMAS Calculator</h1>
        <p>This site provides a free, accurate RCMAS-2 test calculator.</p>
      </Card>
    </Layout>
  );
}
