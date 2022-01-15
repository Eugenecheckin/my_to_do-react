import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  color: #4d4d4d;
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;  
  .app{
    width: 100%;
  }
  input::-webkit-input-placeholder {    
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  input::-moz-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  input::input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }
`;

export const LogoWraper = styled.div`    
    top: 0px;
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);    
`;
export const Header = styled.div`  
  background-color:#fff;
  border:none;  
  border-bottom: '1px solid #ededed';  
  .input-task {       
    padding: 16px 16px 16px 60px;   
    outline: none;
    border:none;
    font-size: 24px;
    max-width: 550px;
    width: 100%;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);  
    //border-bottom: ${props => (props.checkAll ? '1px solid #ededed' : 'none')};
    //box-shadow: ${props => (props.checkAll ? 'inset 0 -2px 1px rgb(0 0 0 / 3%)' : 'none')};
  }
  .checkAll {
    position: absolute;
    opacity: 0;
  }
  .labelAll {
    font-size: 22px;
    width: 40px;
    height: 40px;
    background-size: 40px 40px;
    position: absolute;
    margin-top: 30px;    
    transform: rotate(90deg);   
    opacity: ${props => (props.checkAll ? '1' : '.3')};     
  }

`;
