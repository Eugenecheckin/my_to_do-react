/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyleTask = styled.div`  
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  font-size: 26px;
  label {
    overflow-wrap: anywhere;
    padding: 15px 15px 15px 15px;    
  }  
  input {    
    margin-right: 5px;    
  }

   
`;
export const StyleTaskContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  .edit-input { 
    /*&:hover{
      background-color: black;
    }*/
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50px;
  }
  
`;
