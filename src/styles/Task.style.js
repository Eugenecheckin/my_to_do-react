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

export const StyleEdit = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 40px;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
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
    left: 40px;
  }
  
  
`;
export const StyleButton = styled.div`
  button{
    color: #777;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  } 
  .clearButton {
    border: none;
    &:hover{
      text-decoration: underline;
    }
  }
  .activeButton {
    border-color: rgba(175, 47, 47, 0.2);         
    
}

`;

export const ButtonFlexContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FootContainer = styled.div`
  div {
    color: #777;
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
  }  
}
`;
