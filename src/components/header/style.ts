import styled from "styled-components";

export const Container = styled.div`
  .container {
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    @media (max-width: 950px) {
      flex-direction: column;
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
