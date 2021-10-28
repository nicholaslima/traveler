import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 306px;
  border-radius: 20px;
  margin-bottom: 32px;
  border: 1px solid var(--gray-transparent);

  .description {
    padding: 25px 27px;
    .title {
      font-family: Barlow;
      font-weight: 600;
      color: var(--dark-blue);
      font-size: 22.8226px;
      line-height: 23px;
      margin-bottom: 7px;
    }
    span {
      font-family: Roboto;
      font-size: 15.2151px;
      line-height: 25px;
      color: var(--gray);
    }
  }
`;
interface imageProps {
  img: string;
}

export const ImageCity = styled.div<imageProps>`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: content-box;
  width: 100%;
  border-radius: 20px 20px 0 0;
  height: 210px;
`;
