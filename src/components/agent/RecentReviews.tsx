import { useQuery } from "react-query";
import { fetchShortReviewsData } from "../../fetch/get/agent";
import { ProfileCircle } from "../common/ProfileCircle";
import { ShortReview, Reviews } from "../../type/agentTypes";
import { DateFormating } from "../../Business/Agent/TimeFormating"

type reviews = {
    officeId: number;
};

export const RecentReviews = (props: reviews) => {
    const { data: reviewsData } = useQuery<ShortReview, Error>(
        ["reviews", props.officeId],
        () => fetchShortReviewsData(props.officeId),
        {
            retry: 1,
        }
    );
    console.log(reviewsData)

    const reviews = reviewsData?.data || [];
    const reviewAmount = reviewsData?.reviewAmount || "0";
    console.log(reviews)
    return (
        <div className="reviews">
            <div className={`w-full shadow-md rounded-xl h-full ${reviews.length === 0 ? "p-8" : "p-4"}`}>
                <p className="text-primary pb-4">Reviews({reviewAmount})</p>
                {reviews.length === 0 ? (
                    <p className="p-2 text-base">아직 리뷰가 없습니다</p>
                ) : (
                    <div>
                        {reviews.map((review: Reviews, index: number) => (
                            <div
                                key={index}
                                className={`relative flex gap-8 text-sm p-4 ${index === 0 && reviews.length > 1 ? 'border-b border-accent border-solid' : null}`}
                            >
                                <div className="flex flex-col min-w-[100px]">
                                    <ProfileCircle imgUrl={review.customerImagePath} useName={review.customerName} />
                                    <p className="absolute left-16 top-10">{DateFormating(review.createdAt)}</p>
                                </div>
                                <div className="text-base">{review.description}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
