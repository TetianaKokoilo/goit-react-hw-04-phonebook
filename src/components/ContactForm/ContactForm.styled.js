
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  width: 350px;
  height: 45px;
  border-radius: 30px;
  padding-left: 20px;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #555555;
  border: 0.5px solid #000000;

  &:hover,
  &:focus {
    border: 2px solid #3346ab;
  }
`;

export const StyledName = styled.h2`
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const StyledFormButton = styled.button`
  margin-top: 30px;
  width: 349px;
  height: 50px;
  background: #3346ab;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  color: #ffffff;
  font-size: 17px;
  line-height: 20px;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #405df8;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
    transition: 1s;
  }
`;
