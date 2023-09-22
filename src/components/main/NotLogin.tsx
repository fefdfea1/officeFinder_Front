import { Link } from "react-router-dom"
import { BiSearchAlt, BiSolidChat } from "react-icons/bi"
import { FaHandshakeSimple } from "react-icons/fa6"
import styled from '@emotion/styled';

export const NotLogin = () => {

    return (
        <>
            <BackgroundImageContainer className="hero overflow-hidden max-w-none">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2/3">
                        <h1 className="mb-5 text-[32px] font-bold hover:text-base-100">로그인해서 모든 서비스를 시작해보세요.</h1>
                        <div className="w-full flex flex-col gap-4 ">
                            <div className="flex gap-8 hover:text-base-100">
                                <BiSearchAlt className="text-3xl" />
                                <p className="flex items-center justify-center">공유 오피스를 다양한 옵션으로 검색하고</p>
                            </div>
                            <div className="flex gap-8 hover:text-base-100">
                                <BiSolidChat className="text-3xl" />
                                <p className="">채팅으로 바로 문의하고</p>
                            </div>
                            <div className="flex gap-8 hover:text-base-100 drag">
                                <FaHandshakeSimple className="text-3xl" />
                                <p className="">간편하게 예약하세요.</p>
                            </div>
                            <Link to="/Login" >
                                <button className="btn btn-primary w-32 mx-auto">바로 시작하기</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </BackgroundImageContainer>
        </>
    )
}

const BackgroundImageContainer = styled.div`
  background-image: url("officeImg/basicImage.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width : 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;