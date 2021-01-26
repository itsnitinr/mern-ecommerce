import { useParams } from 'react-router-dom';

const OrderDetailsPage = () => {
  const orderId = useParams().id;

  return <h1>{orderId}</h1>;
};

export default OrderDetailsPage;
