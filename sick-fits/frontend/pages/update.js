import UpdateProduct from '../components/UpdateProduct.js';

export default function UpdatePage({ query }) {
  console.log(query);
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
}
