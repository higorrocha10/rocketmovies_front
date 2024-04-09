import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border: none;
  border-radius: 15px;
  padding: 22px;
  margin-bottom: 26px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 8px 0px 15px;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: justify;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`
