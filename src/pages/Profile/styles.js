import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
    padding: 0px 144px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    button {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: -80px auto;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  width: 186px;
  height: 186px;
  margin: 0px auto 64px;

  > img {
    width: 100%;
    display: block;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 7px;
    right: 7px;
    width: 48px;
    height: 48px;
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
      transition: all 0.3s;
    }

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }
`
