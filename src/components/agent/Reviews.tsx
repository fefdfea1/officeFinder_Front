import { renderStarRating } from "../../Business/Agent/StarRating"
import { ProfileCircle } from "../common/ProfileCircle";
import type { ReviewData } from "../../type/agentTypes"

export const Reviews = (props: ReviewData) => {
  const starIcons = renderStarRating(props.rate)
  console.log(props)
  return (
    <>

      {/* 리뷰 영역 */}
      <div className="border-b border-solid border-accent p-3" key={props.index}>
        <div className="relative">
          <ProfileCircle imgUrl={props.customerImagePath} useName={props.customerName} />
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

