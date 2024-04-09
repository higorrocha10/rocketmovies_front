import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 280px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 19px 24px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`
