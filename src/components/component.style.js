import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  background-color: #333;
  position: fixed;
  top: 0;
  overflow: hidden;
  width: 100vw;
  height: 4rem;
  box-shadow: 0px 3px #888888;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  width: 150px;
  height: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 0.5rem;
  color: #ffffff;
  font-size: 20px;
  font-weight: bolder;
`;

export const GetUserButton = styled.button`
  border-radius: 4px;
  cursor: pointer;
  float: right;
  margin: 0.5rem;
  background-color: #47cf73;
  padding: 10px;
  border: solid transparent;
  font-size: 1rem;

  &:hover {
    background-color: hsl(139.6153846154deg 59.0909090909% 34.5098039216%);
    color: #ffffff;
  }
`;

export const HomeImage = styled.img`
  border: 1rem;
  height: 50vh;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  padding: 1.5rem;
`;

export const CardStyled = styled.div`
  border-radius: 10px;
  padding: 1rem;
  margin: 0.5rem;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
`;

export const Name = styled.div`
  font-weight: bolder;
`;

export const Email = styled.a`
  font-size: small;
  text-decoration: none;
  color: hsl(139.6153846154deg 59.0909090909% 34.5098039216%);
`;

export const LoaderStyle = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotation = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Ring = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;

  &:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #510077;
    border-color: #510077 transparent #510077 transparent;
    animation-name: ${rotation};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
  }
`;

export const Footer = styled.footer`
  font-weight: bolder;
  background-color: #333;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2rem;
  text-align: center;
  color: #fff;
`;
