import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body {
    background-color: ${(props) => props.theme.colors.black2};
    color: ${(props) => props.theme.colors.white};
  }
  button {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    padding: 16px;
    border-radius: 8px;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
    transition: all 1s;

    &:hover{
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
  input {
    border: none;
    min-height: 27px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.black3};
    border-radius: 4px;
    padding-left: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    ::webkit-input-placeholder {
      color: #4b4747;
      font-size: 12px;
      font-weight: 500;
    }
    &:focus {
      border: none;
      outline: none;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: ${(props) => props.theme.colors.white};
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${(props) => props.theme.colors.white};
    ::-webkit-input-placeholder {
      color: #4b4747;
      font-size: 12px;
      font-weight: 500;
    }
  }
`;