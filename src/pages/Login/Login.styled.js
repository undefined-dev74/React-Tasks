import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: inherit;
  border-radius: 10px;
  background-color: #c8e3d4;
  padding: 20px;
  height: 640px;
`;
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
  padding: 12px 15px;
`;

export const TeamplateContainer = styled.div`
  background-color: #113cfc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 12px;
  border-top-right-radius: 12px;
`;

export const LoginHeadings = styled.div`
  margin: 0 auto;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    color: #bbbfca;
    font-size: 14px;
    text-align: left;

    span > a {
      font-weight: 600;
      text-decoration: none;
      color: #113cfc;
      font-size: 16px;
    }
  }
`;

export const LoginHeader = styled.div`
  h4 {
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 24px;
    margin: 0;
  }

  p {
  }
`;
export const LoginForm = styled.form`
  height: 250px;
  display: flex;
  flex-direction: column;
`;

export const LoginIcons = styled.div``;

export const SignUpIcons = styled.li``;
