import { Layout } from '../layout';
import { PageHeader } from '..';

export const Products = () => {
  return (
    <Layout>
      <PageHeader
        title="Наши IT-решения"
        breadcrumbs={[{ title: 'Главная', link: '/' }, { title: 'Решения' }]}
      />
      <div className="h-screen">Some products</div>
    </Layout>
  );
};
