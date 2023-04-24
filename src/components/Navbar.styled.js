import styled from "styled-components";

export const Nav = styled.div`
  padding: 1rem 3rem;
  font-size: 20px;
  background-color: white;

  .logo {
    text-align:center;
    font-weight: 700;
    font-family: 'Festive', cursive;
    font-size: 40px;
    color: #0c14ad;
    text-shadow: 2px 2px 2px #e5e7eb;
    
  }

  .btn {
    border: 1px solid #0c14ad;
    color: #0c14ad;
    background-color: white;
    border-radius: 2px;
    font-size: 18px;
    height: fit-content;
    cursor: pointer;
    &:hover {
      background-color: #0c14ad;
      color: white;
    }
  }
  .get-user-btn {
    vertical-align: middle;
    padding: 5px 12px;
    margin-top: 10px;
  }
`;