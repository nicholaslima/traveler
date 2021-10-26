import styled from "styled-components";

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 25px;

  main {
    width: 329px;
    h1 {
      font-family: Barlow;
      color: var(--dark-blue);
      font-size: 80px;
      font-weight: 600;
      margin-bottom: 40px;
    }
    p {
      font-family: "Heebo";
      font-style: normal;
      color: var(--gray);
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 48px;
    }

    button {
      border-radius: 10px;
      background-color: var(--orange);
      color: var(--white);
      padding: 23px 56px;

      font-family: "Heebo";
      font-weight: 500;
      font-size: 18px;
      border: 0;
    }
  }

  aside {
    ul {
      list-style: none;
      display: grid;
      grid-column-gap: 32px;
      grid-row-gap: 25px;
      grid-template-columns: auto auto;
      li {
        width: 304px;
        height: 306px;
        border-radius: 20px;
        border: 1px solid var(--gray-transparent);
        .img {
          background-image: url("https://s2.glbimg.com/9DtSY6ZLYx173tSW9KZiNcoIbDQ=/620x430/e.glbimg.com/og/ed/f/original/2019/02/15/gettyimages-8454560281.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-origin: content-box;
          width: 100%;
          border-radius: 20px 20px 0 0;
          height: 210px;
        }

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
      }
    }
  }
`;
