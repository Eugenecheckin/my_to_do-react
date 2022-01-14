/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  background: #f5f5f5;
  color: #4d4d4d;
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  //padding: 4em;
  display: flex;
  align-items: center;
  flex-direction: column;  
  .app{
    width: 100%;
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
  border-bottom: 1px solid #999;
  box-sizing: border-box; 
  .input-task {    
    padding: 16px 16px 16px 60px;   
    border:none;       
  }
  .checkAll {
    position: absolute;
    opacity: 0;
  }
  .labelAll {
    background-image: url(../checkmark.png);
    width: 40px;
    height: 40px;
    background-size: 40px 40px;
    position: absolute;
    background-repeat: no-repeat;
    background-image: ${props => props.checkAll? `url(../checkAlltrue.svg)` : `url(../checkAllfalse.svg)`};    
  }  
`;
