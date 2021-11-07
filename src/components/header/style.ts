import styled, { css } from "styled-components";

interface headerProps {
  typeHeader: boolean;
}

export const Container = styled.div<headerProps>`
  ${(props) =>
    props.typeHeader &&
    css`
      background-color: var(--white);
      border-bottom: 1px solid var(--gray-transparent);
    `}

  .container {
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 10px 35px 10px;

    @media (max-width: 950px) {
      flex-direction: column;
    }

    .search {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: var(--white-blue);
      border: 1px solid var(--gray-transparent);
      border-radius: 10px;
      padding: 11px 16px;
      width: 416px;
      @media (max-width: 950px) {
        margin-top: 20px;
      }
      input {
        font-family: Heebo;
        font-weight: normal;
        border: 0;
        outline: none;
        font-size: 16px;
        color: var(--gray-light);
        background: var(--white-blue);
      }
    }

    button {
      border-radius: 10px;
      padding: 11px 32px;
      color: var(--blue);
      background-color: var(--blue-low);
      font-family: "Heebo";
      font-weight: 500;
      border: 0;
      font-size: 1rem;
      @media (max-width: 950px) {
        margin-top: 20px;
      }
    }
  }
`;
