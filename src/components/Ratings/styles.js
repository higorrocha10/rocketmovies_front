import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    width: 24px;
    height: 24px;
  }
`
