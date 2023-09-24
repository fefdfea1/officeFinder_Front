import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { BackgroundCover } from "../../components/common/BackgroundCover";
import { Title } from "../../components/common/Title";
import { Button } from "../../components/common/Button";
import { MyOfficeListDropDown } from "../../components/common/MyOfficeListDropDown";
import { Reviews } from "../../components/agent/Reviews";
import { Pagination } from "../../components/common/Pagination";
import { fetchReviewsData } from "../../fetch/get/agent";
import type { ReviewData } from "../../type/agentTypes";

export const AllReviews = () => {
  const { paramsId, paramsName } = useParams();
  const navigate = useNavigate();
  const [officeName, setOfficeName] = useState<string>("전체");
  const [officeId, setOfficeId] = useState<number>(Number(paramsId));
  const [page, setPageState] = useState<number>(0);
  console.log(page);

  useEffect(() => {
    const parsedId = Number(paramsId);
    setOfficeId(parsedId);
    setOfficeName(paramsName || "");
  }, [paramsId, paramsName]);

  const handleOfficeChange = (office: string, id: number) => {
    navigate(`/AllReviews/${id}/${office}`);

    setOfficeName(office);
    setOfficeId(id);
  };
  const { data: reviews, isLoading }: { data: any; isLoading: boolean } = useQuery(
    ["reviews", officeId],
    () => fetchReviewsData(officeId),
    {
      retry: 1,
      staleTime: 1 * 60 * 1000,
    },
  );
  const reviewsData = reviews?.content;
  console.log(reviewsData)
  return (
    <>
      <div className="flex justify-end relative">
        <div className="absolute top-[-6px] lg:top-10 right-10 flex z-10">
          <div className="flex">
            <div className="group my-4 ">
              <MyOfficeListDropDown forReview={true} officeName={officeName} onOfficeChange={handleOfficeChange} />
              <hr className="border-primary group-hover:border-transparent" />
            </div>

            <Link to={`/SalesAnalysis/${officeId}/${officeName}`}>
              <Button style="btn btn-primary btn-outline  w-[86px] md:w-40">
                <p>매출보기</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <BackgroundCover>
        <Title>{officeName} 리뷰</Title>
        {/* 본문 */}
        {reviews ? (
          <BackgroundCover margin="m-0" padding="lg:p-8 md:p-4 p-2">
            <h3 className="p-4 text-primary text-base font-bold">Reviews</h3>
            <div className="flex flex-col gap-4">
              {reviewsData.length > 0 ? (
                reviewsData.map((review: ReviewData, index: number) => (
                  <Reviews
                    index={index}
                    customerName={review.customerName}
                    customerImagePath={review.customerImagePath}
                    description={review.description}
                    createdAt={review.createdAt}
                    rate={review.rate}
                  />

                ))
              ) : (
                <p className="text-center font-bold p-8">아직 작성된 리뷰가 없습니다.</p>
              )}
              <div className="flex justify-center mt-4">
                <Pagination itemsPerPage={10} totalItems={reviews.totalPage} setPageState={setPageState} />
              </div>
            </div>
          </BackgroundCover>
        ) : isLoading ? (
          <p>Loading...</p>) : <p className="text-center font-bold pt-8">아직 작성된 리뷰가 없습니다.</p>
        }

        {/* 본문 끝 */}
      </BackgroundCover>
    </>
  );
};
