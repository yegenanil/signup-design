import styled from "styled-components";
import img from "./assets/Logo.svg";
import userAvatar from "./assets/user-avatar.svg";
import userMail from "./assets/user-email.svg";
import userPassword from "./assets/user-password.svg";
import googleAvatar from "./assets/google.svg";
import facebookAvatar from "./assets/facebook.svg";

const SignupContainer = styled.div`
  background: #ffffff;
  border-radius: 51.74px 0px 0px 51.74px;
  width: 532px;
  height: 754px;
`;

const HeaderGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 74.88px;
  height: 74.79px;
  margin: 36px 28px 58px 34px;
`;

const Title = styled.h4`
  font-weight: 600;
  font-size: 35.4792px;
  line-height: 57px;
  color: #0b4654;
  margin-top: -20px;
`;

const FormGroup = styled.div`
  margin-left: 101px;
`;

const FormTitle = styled.h4`
  font-weight: 600;
  font-size: 29.566px;
  line-height: 47px;
  color: #0b4654;
`;

const FormInputName = styled.input`
  width: 328.92px;
  height: 41.39px;
  border: 1.4783px solid rgba(11, 70, 84, 0.25);
  border-radius: 5.91319px;
  margin-top: 17px;
  background: #ffffff url(${userAvatar}) 10px no-repeat;
  padding-left: 36px;
`;

const FormInputMail = styled.input`
  width: 328.92px;
  height: 41.39px;
  border: 1.4783px solid rgba(11, 70, 84, 0.25);
  border-radius: 5.91319px;
  margin-top: 17px;
  background: #ffffff url(${userMail}) 10px no-repeat;
  padding-left: 36px;
`;

const FormInputPassword = styled.input`
  width: 328.92px;
  height: 41.39px;
  border: 1.4783px solid rgba(11, 70, 84, 0.25);
  border-radius: 5.91319px;
  margin-top: 17px;
  background: #ffffff url(${userPassword}) 10px no-repeat;
  padding-left: 36px;
`;

const FormInputCheckGroup = styled.div`
  display: flex;
`;

const FormInputCheck = styled.input`
  width: 17.74px;
  height: 17.74px;
  border: 0.739149px solid rgba(11, 70, 84, 0.24);
  border-radius: 2.9566px;
  margin-top: 14px;
  cursor: pointer;
`;

const FormInputCheckText = styled.span`
  font-weight: 400;
  font-size: 11.8264px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 14px;
  margin-left: 11px;
`;

const FormSubmitButton = styled.button`
  width: 328.92px;
  height: 41.39px;
  background: #07b464;
  box-shadow: 0px 2.9566px 2.9566px rgba(0, 0, 0, 0.25),
    inset 0px 1.4783px 2.9566px rgba(255, 255, 255, 0.25),
    inset 0px -1.4783px 2.9566px rgba(0, 0, 0, 0.25);
  border-radius: 11.8264px;
  border: none;
  color: #ffffff;
  text-transform: uppercase;
  margin-top: 39px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

const SignupWithGoogleButton = styled.button`
  width: 328.92px;
  height: 41.39px;
  border: 1.4783px solid rgba(11, 70, 84, 0.25);
  border-radius: 11.8264px;
  background: #ffffff url(${googleAvatar}) 95px no-repeat;
  margin-top: 17px;
  font-weight: 400;
  font-size: 11.8264px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1.5px solid #101010;
    color: #101010;
  }
`;

const SignupWithFacebookButton = styled.button`
  width: 328.92px;
  height: 41.39px;
  border: 1.4783px solid rgba(11, 70, 84, 0.25);
  border-radius: 11.8264px;
  background: #ffffff url(${facebookAvatar}) 95px no-repeat;
  margin-top: 17px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 11.8264px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.5);
  padding-left: 26px;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1.5px solid #101010;
    color: #101010;
  }
`;

const LoginLink = styled.a`
  font-weight: 500;
  font-size: 17.7396px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.5);
  margin-left: 143px;
`;

const Signup = () => {
  return (
    <SignupContainer>
      <HeaderGroup>
        <Logo src={img} />
        <Title>Bloopy</Title>
      </HeaderGroup>
      <FormGroup>
        <FormTitle>Create Account</FormTitle>
        <FormInputName required type="text" placeholder="Full Name" />
        <FormInputMail required type="email" placeholder="Email address" />
        <FormInputPassword required type="password" placeholder="Password" />
        <FormInputCheckGroup>
          <FormInputCheck type="checkbox" />
          <FormInputCheckText>
            I agree with <span style={{ color: "#07B464" }}>Terms</span> and{" "}
            <span style={{ color: "#07B464" }}>Privacy</span>
          </FormInputCheckText>
        </FormInputCheckGroup>
        <FormSubmitButton type="submit">sign up</FormSubmitButton>
        <SignupWithGoogleButton>Sign Up with Google</SignupWithGoogleButton>
        <SignupWithFacebookButton>
          Sign Up with Facebook
        </SignupWithFacebookButton>
      </FormGroup>
      <LoginLink>
        Already have an account?{" "}
        <span style={{ color: "#07B464", cursor: "pointer" }}>Log In</span>
      </LoginLink>
    </SignupContainer>
  );
};

export default Signup;
