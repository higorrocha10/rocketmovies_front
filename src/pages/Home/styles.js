import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 110px auto auto;
  grid-template-areas:
    "header"
    "content";

  main {
    grid-area: content;
    padding: 30px 200px;

    > header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 35px 0px;
      padding: 0px 20px 0px 5px;

      > h1 {
        font-size: 32px;
        font-weight: 500;
      }

      button {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.BLACK};
        padding: 8px 35px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.COLORS.PINK};
        font-weight: 400;

        svg {
          margin-right: 8px;
        }
      }
    }
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  padding-right: 15px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 10px;
  }
`
