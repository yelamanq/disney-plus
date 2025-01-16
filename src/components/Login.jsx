import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  display: flex;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  right: 0;
  left: 0;
  position: absolute;
  background-image: url("/images/login-background.jpg");
  z-index: -1;
  height: 100%;
`;

const CTA = styled.div`
  max-width: 750px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  width: 100%;
  margin-bottom: 16px;
  max-width: 750px;
  display: block;
  min-height: 1px;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 16px;
  letter-spacing: 1.5px;
  font-size: 22px;
  padding: 16.5px 0px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: #f9f9f9;
  font-size: 14px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.2px;
`;

const CTALogoTwo = styled.img`
  max-width: 750px;
  margin-bottom: 20px;
  width: 100%;
`;

export default Login;
