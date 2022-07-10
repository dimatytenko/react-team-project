import styled from '@emotion/styled';

export const DiaryAddProduct = styled.div`
  position: relative;
  margin-bottom: 60px;
`;

export const FormBody = styled.div`
  display: flex;
`;

// export const FormInputProduct = styled.input`
//   width: 240px;
//   border: none;
//   border-bottom: 1px solid #e0e0e0;
//   outline: none;
//   background-color: transparent;
//   color: ${props => props.theme.fontColors.primary};

//   ::placeholder {
//     font-family: 'VerdanaBold';
//     letter-spacing: 0.04em;
//   }
// `;

export const FormInputGrams = styled.input`
  width: 106px;
  margin-left: 22px;
  margin-right: 87px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  outline: none;
  background-color: transparent;
  color: ${props => props.theme.fontColors.primary};

  ::placeholder {
    font-family: 'VerdanaBold';
    text-align: right;
    letter-spacing: 0.04em;
  }
`;

export const ProductsList = styled.ul`
  position: absolute;
  width: 370px;
  max-height: 310px;
  overflow: auto;
  top: 50px;
  left: 0;
  z-index: 5;
  padding: 10px;
  background-color: ${props =>
    props.theme.backgrounds.bodyPrimary};
`;

export const ProductsItem = styled.li`
  margin-bottom: 11px;
`;
