import styled from '@emotion/styled';
import { IoCloseSharp } from 'react-icons/io5';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(33, 33, 33, 0.12);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 384px;
  background-color: #fff;
  border-radius: 24px;
  padding: 54px 48px 66px;
`;

export const Title = styled.p`
  font-family: VerdanaBold;
  font-size: 18px;
  line-height: 26px;
  color: ${props => props.theme.fontColors.secondary};
`;

export const BtnCloseModal = styled.button`
  position: absolute;
  background: #f2f2f2;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  top: 0;
  right: 0;
  transform: translate(30%, -30%);
  z-index: 1220;
  overflow: hidden;
`;
export const ImgClose = styled(IoCloseSharp)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
