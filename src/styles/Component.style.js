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

  //background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
  //background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
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
  }  
`;
