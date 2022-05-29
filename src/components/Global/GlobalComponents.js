import styled, { css } from "styled-components";

export const AppLogo = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  & > span {
    color: #fd377e;
  }
  ${(props) => {
    if (props.inHome) {
      return css`
        color: #212529;
      `;
    } else {
      return css`
        color: #f8f9fa;
      `;
    }
  }}
`;

export const AppBtn = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  font-weight: 600;

  border: none;
  &::disabled {
    cursor: not-allowed;
    opacity: 0.5;
    text-decoration: line-through;
    &:hover {
      background-color: transparent;
    }
  }
  ${(props) => {
    switch (props.btnColor) {
      case "gray":
        return css`
          color: #868e96;
          background-color: #e9ecef;
          &:hover {
            color: #f8f9fa;
            background-color: #868e96;
          }
          &:active {
            color: #f8f9fa;
            background-color: #fd377e;
          }
        `;
      case "gray-pink":
        return css`
          color: #868e96;
          background-color: #e9ecef;
          &:hover {
            color: #f8f9fa;
            background-color: #fd377e;
          }
        `;
      default:
        return css`
          color: #f8f9fa;
          background-color: #fd377e;
          &:hover {
            background-color: #e34981;
          }
        `;
    }
  }}
  ${(props) => {
    switch (props.btnSize) {
      case "small":
        return css`
          height: 42px;
          padding: 2%;
          border-radius: 7px;
        `;
      default:
        return css`
          height: 54px;
          padding: 3%;
          border-radius: 10px;
        `;
    }
  }}
  ${(props) => {
    if (props.active)
      return css`
        color: #f8f9fa;
        background-color: #fd377e;
      `;
  }}
`;

const formElements = css`
  margin: 3% 0;
  width: 100%;
  padding: 4%;

  color: #868e96;
  font-size: 1rem;

  border: none;
  border-radius: 5px;
  background-color: #f8f9fa;
`;

export const AppInput = styled.input`
  ${formElements}
  &[name="description"] {
    padding: 5%;
  }
  &:focus[type="text"] {
    color: #000;
    outline: 2px solid #000;
    background-color: #fff;
  }
  &:focus[type="number"] {
    color: #000;
    outline: 1px solid #000;
  }
  &:focus[type="password"] {
    color: #000;
    outline: 2px solid #000;
    background-color: #fff;
  }
`;

export const AppSelect = styled.select`
  ${formElements}
  &:focus {
    color: #000;
    outline: 1px solid #000;
  }
`;

export const AppBox = styled.section`
  padding: 2%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px;
  border: 2px solid #e9ecef;
  background-color: #fff;
  ${(props) => {
    switch (props.width) {
      case "half":
        return css`
          width: 50%;
        `;
      default:
        return css`
          width: 100%;
        `;
    }
  }}
`;

export const AppCard = styled.li`
  width: 100%;
  height: 15vh;
  margin-bottom: 5%;
  padding: 2% 3%;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  border-radius: 5px;
  border-left: 5px solid;
  background-color: #f8f9fa;
  ${(props) => {
    switch (props.type) {
      default:
        return css`
          border-color: #03b898;
        `;
      case "saída":
        return css`
          border-color: #e9ecef;
        `;
    }
  }}
`;
