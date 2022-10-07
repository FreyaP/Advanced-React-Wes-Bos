// reusable page for /product/[id]

import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {
  return <SingleProduct id={query.id} />;
}
