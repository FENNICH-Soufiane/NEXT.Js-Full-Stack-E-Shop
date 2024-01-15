// interface pour un type qui va etre réutiliser ailleurs
interface IParams {
  productId?: string
}


const Product = ({params}: {params: IParams}) => {
  console.log("params : "+ params.productId);
 return <div>Product Page</div>;
};

export default Product;
