import styled from 'styled-components';

export const FootContainer = styled.div`
  color: #777;
  padding: 5px 15px;
  height: 20px;
  text-align: center;    
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
      cursor: pointer;
      font-weight: 300px;
    } 
  }
  .flexDivClear {
    width: 117px;
    height: 20px;
  }
  .activeButton {
    font-weight: 300px;
    font-size: 14px;
    border-color: rgba(175, 47, 47, 0.2);
    &:hover {
      cursor: pointer;
    }    
  }
  .false {
    font-weight: 300px;
    font-size: 14px;
    &:hover{
      border-color: #F7EAEA;
      cursor: pointer;
    }
  }
`;

export const ButtonFlexContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .itemLeft {
    font-size: 14px;
    font-weight: 300px;
    
  }
  @media screen and (max-width: 320px) {
      flex-direction: column;
    }
`;

