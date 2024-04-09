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

export const Form = styled.form`
  width: 100%;
  margin-top: 50px;

  > header {
    display: flex;
    flex-direction: column;
    align-items: left;

    h1 {
      font-size: 36px;
      font-weight: 500;
      margin-top: 24px;
    }

    button {
      display: flex;
      align-items: center;
      gap: 5px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
  > div {
    display: flex;
    align-items: center;
    gap: 40px;
    margin: 30px 0px;
  }

  .tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    padding: 14px;
    border-radius: 10px;
  }
`
