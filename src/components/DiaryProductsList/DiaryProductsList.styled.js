import styled from '@emotion/styled';
import Table from 'rc-table';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const TableStyled = styled(Table)`
  max-height: 200px;
  overflow-y: auto;
  font-family: 'Verdana';
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${props => props.theme.fontColors.secondary};

  & .column--large {
    position: relative;
    width: 130px;
    height: 44px;
    border-bottom: 2px solid #e0e0e0;
    ${mediaTablet(`
    width: 240px;
    height: 52px;
`)}
    ${mediaDesktop(`
    width: 240px;
    height: 52px;
`)}
  }

  & .column--small {
    text-align: center;
    width: 57px;
    height: 44px;
    border-bottom: 2px solid #e0e0e0;
    ${mediaTablet(`
    text-align: end;
    width: 128px;
    height: 52px;
`)}
    ${mediaDesktop(`
    width: 152px;
    height: 52px;
`)}
  }

  & .column--medium {
    text-align: center;
    width: 66px;
    height: 44px;
    border-bottom: 2px solid #e0e0e0;
    ${mediaTablet(`
    text-align: end;
    width: 152px;
    height: 52px;
`)}
    ${mediaDesktop(`
    width: 138px;
    height: 52px;
`)}
  }

  & .column--cross {
    ${mediaTablet(`
    text-align: end;
    width: 42px;
    height: 52px;
`)}
    ${mediaDesktop(`
    width: 44px;
    height: 52px;
`)}
  }
`;

export const ButtonCross = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;
