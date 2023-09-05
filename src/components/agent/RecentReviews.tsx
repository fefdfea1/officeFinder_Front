import { ProfileCircle } from "../common/ProfileCircle"

export const RecentReviews = () => {

    return (
        <>
            <div className="reviews">

                <div className="flex text-sm pb-4">
                    <ProfileCircle />

                    <div>  첫 번째 리뷰 내용입니다.</div>
                </div>
                <div className="flex text-sm pb-4">
                    <ProfileCircle />

                    <div> 두 번째 리뷰 내용입니다.</div>
                </div>
            </div>
        </>
    )
}