import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 306px;
        border-radius: 20px;
        margin-bottom: 32px;
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

`;
