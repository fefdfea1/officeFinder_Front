import { renderStarRating } from "../../Business/Agent/StarRating"
import { ProfileCircle } from "../common/ProfileCircle";
import type { ReviewData } from "../../type/agentTypes"

export const Reviews = (props: ReviewData) => {
  const starIcons = renderStarRating(props.rate)
  return (
    <>
      <h3 className="p-4 text-primary text-base font-bold">Reviews</h3>
      {/* 리뷰 영역 */}
      <div className="border-b border-solid border-accent p-3">
        <div className="relative">
          <ProfileCircle imgUrl={props.createdAt} useName={props.customerName} />
          <div className="text-base absolute top-6 left-12 flex">
            <span>{props.createdAt}</span>
            <div className="pl-2 flex items-center">
              {starIcons}

              <span className="ml-1">({props.rate})</span>
            </div>
          </div>
        </div>
        <div className="p-2 pl-12 text-base">
          {props.description}
        </div>
      </div>

    </>
  );
}

