import styled from "styled-components"

import { Link } from "react-router-dom"

export const Container = styled.header`
  grid-area: header;
  height: 116px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 200px;

  > h1 {
    font-size: 30px;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-bottom: 8px;
  }
`
export const Brand = styled(Link)`
  margin-bottom: 8px;

  > h1 {
    font-size: 30px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Search = styled.div`
  flex: 1;
  margin: 0px 64px;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    transition: all 0.3s;

    &:hover {
      filter: brightness(0.8);
      transition: all 0.3s;
      cursor: pointer;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 20px;

    button {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      align-self: end;
      background: none;
      border: none;
      transition: all 0.3s;

      &:hover {
        color: ${({ theme }) => theme.COLORS.PINK};
        transition: all 0.3s;
      }
    }
  }
`
