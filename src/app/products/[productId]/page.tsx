import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolver) => {
    setTimeout(() => {
      resolver(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetail = ({ params }: Props) => {
  return (
    <div>
      <h1>Product Detail {params.productId}</h1>
    </div>
  );
};

export default ProductDetail;
