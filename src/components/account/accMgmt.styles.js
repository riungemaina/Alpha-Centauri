import styled from "styled-components";
import { Icons } from "../icons.styles";

export const Wrapper = styled.div`
  margin: 30px;
  padding: 20px;
  background-color: white;
  border-radius: var(--borderRadius);
  box-shadow: var(--levelOneDropShadow);
  transition: var(--smoothTransition);
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  height: auto;
`;

export const DeleteBtn = styled.button`
  background-color: red;
  color: #fff;
  border: none;
  border-radius: var(--borderRadius);
  outline: none;
  padding: 7px 25px;
  margin: 10px;
  transition: var(--smoothTransition);

  &:hover {
    cursor: pointer;
    box-shadow: var(--levelTwoDropShadow);
  }
`;

export const SectionTitle = styled.h2`
  border-bottom: solid 1px #aaa;
  padding: 5px 0;
  margin: 20px 0 10px;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const Label = styled.label`
  margin: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  transition: var(--smoothTransition);
  margin: 10px 0;
  border-bottom: 1px solid #fff;
  width: 300px;

  &.checkbox {
    margin-left: 20px;
    width: auto;
  }
  &:focus {
    border-bottom: 1px solid #aaa;
  }
`;

export const InnerLabel = styled.span`
  display: inline-block;
  min-width: 170px;
`;

export const Google = styled(Icons.Google)`
  margin: 10px 20px 0;
`;

export const SaveBtn = styled.input`
  border: none;
  color: white;
  background-color: green;
  padding: 7px 25px;
  margin: 10px;
  border-radius: var(--borderRadius);
  transition: var(--smoothTransition);

  &:hover {
    cursor: pointer;
    box-shadow: var(--levelTwoDropShadow);
  }
`;

export const AltMpesaNumber = styled.div`
  display: ${(props) => (props.mpesaPhone === "true" ? "none" : "block")};
`;
