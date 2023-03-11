import styled from 'styled-components';

export const StyledText = styled.p`
  text-align: center;
`;
export const StyledList = styled.ul`
  padding-left: 15px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  color: #555555;
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 10px;
`;
export const StyledContactButton = styled.button`
  background: #ffffff;
  color: #405df8;
  width: 80px;
  height: 25px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  border: 0.5px solid #dddddd;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #405df8;
    color: #ffffff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
    transition: 1s;
  }
`;
