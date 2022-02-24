import styled from "styled-components";

export const Container = styled.div`
  .container {
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 10px 35px 10px;

    .block-logo {
      display: flex;
      align-items: center;
      gap: 34px;

      .btn-voltar {
        border: 1px solid var(--gray-transparent);
        padding: 12px 14px;
        border-radius: 15px;
        svg {
          color: var(--gray);
        }
      }
    }

    @media (max-width: 950px) {
      flex-direction: column;
    }

    p {
      color: var(--gray-light);
      font-size: 20px;
      font-family: Barlow;
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
