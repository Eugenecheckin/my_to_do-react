/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyleTask = styled.div`  
  position: relative;
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
    
  .check-todo {
    position: absolute;
    opacity: 0;
  }   
  .labelCheck {
    width: 40px;
    height: 40px;
    background-size: 40px 40px;
    position: absolute;
    background-repeat: no-repeat;
    background-image: ${props => props.checkEdit? `url(../checkAlltrue.svg)` : `url(../checkAllfalse.svg)`};    
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
    width: calc(100% - 40px);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 40px;
  }
  `;

export const StyleButton = styled.div`
  button{
    color: #777;
    background-color: #fff;
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
    color: #777;
    padding: 5px 15px;
    height: 20px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    background-color: white;
    height: 100%;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 50px;
      overflow: hidden;
      box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgb(0 0 0 / 20%);
    }
`;
