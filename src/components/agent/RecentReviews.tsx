import { useQuery } from "react-query";
import { fetchShortReviewsData } from "../../fetch/get/agent";
import { ProfileCircle } from "../common/ProfileCircle";
import { ShortReview, Reviews } from "../../type/agentTypes";

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

    const reviews = reviewsData?.data || [];
    const reviewAmount = reviewsData?.reviewAmount || "0";

    return (
        <div className="reviews">
            <div className={`w-full shadow-md rounded-xl h-full ${reviews.length === 0 ? "p-8" : "p-4"}`}>
                <p className="text-primary pb-4">Reviews({reviewAmount})</p>
                {reviews.length === 0 ? (
                    <p className="p-2 text-base">아직 리뷰가 없습니다</p>
                ) : (
                    <div>
                        {reviews.map((review: Reviews, index: number) => (
                            <div key={index} className="flex text-sm pb-4">
                                <ProfileCircle />
                                <div>{review.description}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
