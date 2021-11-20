import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 10px;
  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    @media (max-width: 950px) {
      flex-direction: column;
    }
    h1 {
      font-family: Barlow;
      font-weight: 600;
      font-size: 36px;
      line-height: 46px;
      color: var(--dark-blue);
      @media (max-width: 950px) {
        margin-bottom: 45px;
      }
    }
    .search {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 30%;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--gray-transparent);
      box-sizing: padding-box;
      @media (max-width: 950px) {
        width: 70%;
      }
    }
  }
  ul {
    display: grid;
    grid-column-gap: 34px;
    grid-template-columns: 24% 24% 24% 24%;
    margin-top: 40px;

    @media (max-width: 1000px) {
      grid-template-columns: 30% 30% 30%;
    }
    @media (max-width: 750px) {
      grid-template-columns: 45% 45%;
    }
  }
`;

interface propsSearch {
  active: boolean;
}

export const SearchButton = styled.p<propsSearch>`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: var(--gray-light);
  font-size: 16px;
  line-height: 26px;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      color: var(--dark-blue);
      position: relative;
      &:after {
        content: "";
        height: 2px;
        border-radius: 10px;
        left: 0;
        width: 100%;
        margin-top: 10px;
        position: absolute;
        bottom: -10px;
        background: var(--orange);
      }
    `}
`;
