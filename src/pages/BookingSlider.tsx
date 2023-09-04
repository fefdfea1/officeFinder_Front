import { ReactNode } from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";

type BookingSliderType = {

  children: ReactNode;
  setting: settingType;
};

type settingType = {
  [key: string]: boolean | number;
};

export const SlickSlider = ({ children, setting }: BookingSliderType) => {
  return <SliderContainer {...setting}>{children}</SliderContainer>;

};

const SliderContainer = styled(Slider)`
  & .slick-arrow {
    z-index: 1;
  }

  @media (min-width: 360px) {
    & .slick-prev {
      left: 1%;
    }

    & .slick-next {
      right: 1%;
    }

    @media (min-width: 768px) {
      & .slick-prev {
        left: 17%;
      }
      & .slick-next {
        right: 17%;
      }
    }

  @media (min-width: 1280px) {
    & .slick-prev {
      left: 1%;
    }

    & .slick-next {
      right: 1%;
    }
  }



`;

