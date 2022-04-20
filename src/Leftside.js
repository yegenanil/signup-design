import styled from "styled-components";
import img from "./assets/Sitting.svg";
import vector from "./assets/Vector.svg";

const Container = styled.div``;

const Title = styled.h6`
  display: flex;
  flex-direction: row;
`;

const Text = styled.span`
  font-weight: 500;
  font-size: 20.6962px;
  line-height: 33px;
  color: #0b4654;
  margin: 46px 50px 104px 103px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  opacity: 0.8;

  &:last-child {
    margin: 45px 238px 104px 0;
  }

  &:hover {
    color: #101010;
    opacity: 1;
  }
`;

const ImageGroup = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 371px;
  height: 473px;
  margin: 0 89px 170px 71px;
`;

const Vector = styled.img`
  position: absolute;
  left: 420px;
  bottom: 500px;
`;

const Vector2 = styled.img`
  position: absolute;
  left: 120px;
  bottom: 150px;
`;

const Vector3 = styled.img`
  position: absolute;
  left: 120px;
  bottom: 550px;
`;

const Leftside = () => {
  return (
    <Container>
      <Title>
        <Text>About&nbsp;us</Text>
        <Text>Contact</Text>
      </Title>
      <ImageGroup>
        <Vector src={vector} alt="Sitting" />
        <Vector2 src={vector} alt="Sitting" />
        <Vector3 src={vector} alt="Sitting" />
        <Image src={img} />
      </ImageGroup>
    </Container>
  );
};

export default Leftside;
