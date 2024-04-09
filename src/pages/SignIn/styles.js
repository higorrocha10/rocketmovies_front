import styled from "styled-components"
import BackgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0px 134px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 48px;
    font-weight: bold;
    line-height: 55px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 35px;
  }

  > h2 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 40px;
    text-align: center;
  }

  .register {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-top: 42px;
    gap: 10px;
  }

  .register button {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Background = styled.div`
  flex: 1;
  background: linear-gradient(rgba(0, 1, 3, 0.423), rgba(0, 0, 0, 0.423)),
    url(${BackgroundImg});
  background-size: cover;
  background-position: center center;
`
