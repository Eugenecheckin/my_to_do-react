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
    transition: color 0.4s;
  }  
  input {    
    margin-right: 5px;            
  }
  .check-todo-conteiner { 
    position: relative;
    width: 40px;
    height: 40px;  
    padding : 0;
  }
  .check-todo {
    position: relative;
    z-index: 99;
    opacity: 0;
    width: 40px;
    height: 40px;
  }
  .text-todo {
    font-size: 24px;
    width: 100%;    
    padding-left: 20px;
    text-decoration: ${props => (props.checkEdit ? 'line-through' : 'none')};
    opacity: ${props => (props.checkEdit ? '.3' : '1')};;
  }   
  .labelCheck {
    padding: 0;
    width: 40px;
    height: 40px;
    background-size: 40px 40px;
    position: absolute;
    top : 0;
    left: 0;
    background-repeat: no-repeat;
    background-image: ${props => (props.checkEdit ? 'url(../checked.svg)' : 'url(../unChecked.svg)')};    
  }  
  .label-del {
    top: 8px;
    padding: 0;
    width: 40px;
    height: 40px;
    background-size: 40px 40px;
    color: #cc9a9a;
    position: absolute;
    margin: auto 0;
    font-size: 30px;
    transition: color 0.2s ease-out;
    &:hover {
      color: #af5b5e;
    }
  }
  .remove-todo-conteiner {
    width: 50px;
    height: 60px;   
    visibility: hidden;
  }
  .remove-todo {
    position: absolute;
    visibility: hidden;
    }
  &:hover > .remove-todo-conteiner {
    visibility: visible;
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
  box-sizing: border-box;

`;

export const StyleTaskContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid #ededed;
  .edit-input {    
    padding-left: 14px;
    color: #4d4d4d;
    font-size: 24px;
    outline: none;    
    border: 1px solid #999;
    width: calc(100% - 65px);
    position: absolute;
    top: 0px;
    bottom: 0;
    left: 45px;
    box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 20%);   
  }
    
  `;
