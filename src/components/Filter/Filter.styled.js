import styled from "styled-components";

export const StyledLabel = styled.label`
color: #777777;
font-style: italic;
font-weight: 600;
font-size: 16px;
line-height: 26px;
`
export const StyledFilterInput = styled.input`
  width: 180px;
  height: 25px;
  border-radius: 5px;
  padding-left: 10px;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #555555;
  border: 0.5px solid #000000;
  margin-left: 15px;
  &:hover,
  &:focus {
    border: 2px solid #3346ab;
  }
`