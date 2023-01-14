import styled, { css } from 'styled-components';
import { Container } from '../../components/Container';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

export const Content = styled.main`
  flex: 1 0 auto;
`;

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.headerBackgroundColor};
    padding: ${theme.spacings.xxsmall} 0;
  `}
`;

export const BaseContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px){
    flex-direction: row;
  }
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 768px){
      margin-right: ${theme.spacings.small};
      align-items: flex-start;
    }
  `}
`;

export const MenuContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 768px){
    flex-direction: row;
  }
`;

export const Menu = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    direction: row;
    align-items: center;
    gap: ${theme.spacings.small};
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.headerBackgroundColor};
    padding: ${theme.spacings.small} 0;
  `}
`;

export const FooterMenuContainer = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    gap: ${theme.spacings.large};
  `}
`;

export const Block = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    @media only screen and (min-width: 768px){
      margin-top: 0;
    }

    ul {
      list-style: none;
      margin-top: ${theme.spacings.xsmall};

      li + li {
        margin-top: ${theme.spacings.xxsmall};
      }

    }
  `}
`;
