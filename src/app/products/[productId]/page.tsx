const ProductDetail = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <h1>Product Detail {params.productId}</h1>
    </div>
  );
};

export default ProductDetail;
