import styled from '@emotion/styled';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/css';

export const sink = keyframes`
  from, 0%,  to {
    transform: translate3d(0,-500px,0);
  }
  100% {
    transform: translate3d(0, 0px, 0);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(33, 33, 33, 0.12);
  z-index: 1200;
  @media (min-width: 768px) {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ModalWindow = styled.div`
  top: 80px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  background-color: #fff;
  padding: 40px 20px;
  min-height: 100%;
  max-height: 100%;
  z-index: 1201;
  @media (min-width: 768px) {
    top: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 672px;
    height: 573px;
    min-height: 573px;
    max-height: 573px;
  }
`;

export const ContainerBtnCloseModalMobile = styled.div`
  position: relative;
  top: 80px;
  height: 40px;
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const BtnCloseModalMobile = styled.button`
  padding-left: 20px;
  padding-right: 50%;
  background-color: inherit;
  border: none;
`;

export const ListNotEat = styled.ol`
  padding-left: 20px;
  width: 280px;
  margin-bottom: 40px;
`;
export const ListNotEatItem = styled.li`
  font-family: 'Verdana';
  list-style-type: decimal;
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  margin-bottom: 15px;

  color: #9b9faa;
  :last-child {
    margin-bottom: 0px;
  }
`;

export const Title = styled.p`
  font-family: VerdanaBold;
  font-size: 18px;
  line-height: 26px;
  color: #212121;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    width: 450px;
    font-size: 26px;
    line-height: 32px;
    text-align: center;
  }
`;

export const DailyRate = styled.div`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #264061;
  margin-bottom: 32px;
`;

export const Kcal = styled.span`
  font-size: 24px;
  letter-spacing: 0;
`;

export const TitleNotEat = styled.p`
  display: block;
  max-width: 280px;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #212121;
  width: 100%;
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
  margin-bottom: 20px;
`;
export const BtnCloseModal = styled.button`
  display: none;
  position: absolute;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  top: 20px;
  right: 20px;
  transform: translate(30%, -30%);
  z-index: 1220;
  overflow: hidden;
  @media (min-width: 768px) {
    display: block;
  }
`;
export const ImgClose = styled(IoCloseSharp)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  padding: 13px 25px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.fontColors.buttonPrimary};
  background: ${props =>
    props.theme.fontColors.buttonSecondary};
  border: none;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  transition: transform 0.2s;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const LinkHome = styled(Link)`
  color: white;
`;
