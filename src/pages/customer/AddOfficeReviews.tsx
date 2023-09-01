import { useState } from "react";
import { changeCommentHandler } from "../../Business/Reviews/ReviewsChangeComment";
import { OfficeProfile } from "./AddOfficeReviewsOfficeCompo";

export const AddOfficeReviews = () => {
  const [textAreaCount, setCount] = useState<string>("");

  return (
    <div className="pt-20 sm:px-6">
      <OfficeProfile />
      <form
        name="myform"
        id="myform"
        method="post"
        action="./save"
        className="flex justify-end flex-col mt-8 mb-8 sm:mt-0"
      >
        <div className="w-44 p-4 rating rating-md rating-half shadow-xl rounded-full ml-auto mb-4 relative sm:ml-0 lg:mt-8">
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-2" />
        </div>
        <div className="w-full relative">
          <textarea
            name="Comment"
            cols={30}
            rows={10}
            placeholder="사용한 오피스가 어땠는지 평가해주세요."
            className="placeholder:text-primary p-4 w-full border border-primary"
            style={{ resize: "none" }}
            onChange={e => {
              changeCommentHandler(e, textAreaCount, setCount);
            }}
            value={textAreaCount}
          ></textarea>
          <span className="absolute bottom-4 right-20 text-accent">{`${textAreaCount.length}/600`}</span>
        </div>
      </form>
      <div className="mb-8">
        <button className="w-64 btn btn-primary block ml-auto">작성완료</button>
      </div>
    </div>
  );
};
