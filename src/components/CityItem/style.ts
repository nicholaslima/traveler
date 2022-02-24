import styled, { css } from "styled-components";

interface ContainerProps {
  isActive: boolean;
}
export const Container = styled.li<ContainerProps>`
  width: 100%;
  height: 306px;
  border-radius: 20px;
  margin-bottom: 32px;
  border: 1px solid var(--gray-transparent);
  list-style: none;
  cursor: pointer;

  ${(props) =>
    props.isActive === false
      ? css`
          filter: opacity(50%);
        `
      : css`
          filter: opacity(100%);
        `}
  .description {
    padding: 25px 27px;
    .title {
      font-family: Barlow;
      font-weight: 600;
      color: var(--dark-blue);
      font-size: 22px;
      line-height: 23px;
      margin-bottom: 7px;
      text-overflow: ellipsis;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
    }
    span {
      font-family: Roboto;
      font-size: 15.2151px;
      line-height: 25px;
      width: 100%;
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
