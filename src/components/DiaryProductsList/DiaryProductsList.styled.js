import styled from '@emotion/styled';
import Table from 'rc-table';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const TableStyled = styled(Table)`
  min-height: 200px;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 32px;
  font-family: 'Verdana';
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${props => props.theme.fontColors.secondary};

  ${mediaTablet(`
  margin-top: 60px;
  min-height: 243px;
  max-height: 243px;
`)}
  ${mediaDesktop(`

  min-height: 306px;
  max-height: 306px;
`)}

    &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #264061;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #264061;
  }

  & td + td {
    border-left: 2px solid transparent;
    ${mediaTablet(`
    border-left: 22px solid transparent;
`)}
    ${mediaDesktop(`
    border-left: 32px solid transparent;
`)}
  }

  & .column--large {
    position: relative;
    width: 130px;
    height: 44px;
    border-bottom: 1px solid #e0e0e0;
    ${mediaTablet(`
    width: 240px;
    height: 52px;
`)}
    ${mediaDesktop(`
    width: 240px;
    height: 52px;
`)}

    & span {
      display: block;
      width: 130px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      ${mediaTablet(`
       width: 240px;
   `)}
    }
  }

  & .column--small {
    text-align: center;
    width: 57px;
    height: 44px;
    border-bottom: 1px solid #e0e0e0;
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
    border-bottom: 1px solid #e0e0e0;
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
    vertical-align: bottom;
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
  padding: 6px 0 6px 0;
  cursor: pointer;
`;
