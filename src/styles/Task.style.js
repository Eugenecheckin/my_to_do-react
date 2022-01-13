/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const PostItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  font-size: 24px;
  border-bottom: 1px solid; 
  &:last-child{
    border-bottom: 5px solid; 
  }  
`;
