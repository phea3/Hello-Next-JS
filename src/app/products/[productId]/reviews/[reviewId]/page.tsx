import { notFound } from "next/navigation";

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Review detail {params.reviewId} in product {params.productId}
      </h1>
    </div>
  );
};

export default ReviewDetail;
