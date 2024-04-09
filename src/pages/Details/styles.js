import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    padding: 30px 200px;
  }
`

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  height: 100vh;
  overflow-y: scroll;
  margin-top: 45px;
  padding-right: 20px;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 10px;
  }

  > header {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;

    button {
      display: flex;
      align-items: center;
      gap: 5px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    .title {
      display: flex;
      align-items: center;
      gap: 40px;

      h1 {
        font-size: 36px;
        font-weight: 500;
      }

      button {
        border: none;
        padding: 8px 35px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.BLACK};
      }
    }

    .datos {
      display: flex;
      align-items: center;
      gap: 20px;

      img {
        height: 20px;
        width: 20px;
        margin-right: 8px;
        border-radius: 50%;
      }

      span {
        display: flex;
        align-items: center;

        svg {
          color: ${({ theme }) => theme.COLORS.PINK};
          margin: 0px 8px;
          font-size: 20px;
        }
      }
    }
  }
  > p {
    font-size: 16px;
    margin: 40px 0px;
    text-align: justify;
  }
`
