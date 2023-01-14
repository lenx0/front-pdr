import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import { Container } from '../../components/Container';
import Logo from '../../components/Logo';

import * as S from './styles';

export default function TemplateBase({ children }) {
  const theme = useTheme();
  return (
    <S.Wrapper>
      <S.Header>
        <S.BaseContainer>
          <S.LogoContainer>
            <Logo width={200} height={50} />
          </S.LogoContainer>
          <S.MenuContainer>
            <S.Menu>
              <li>Restaurantes</li>
              <li>Avaliações</li>
            </S.Menu>
            <S.Menu>
              <li>Meus Favoritos</li>
              <li>Minha Conta</li>
            </S.Menu>
          </S.MenuContainer>
        </S.BaseContainer>
      </S.Header>
      <S.Content>
        <Container>
          {children}
        </Container>
      </S.Content>
      <S.Footer>
        <S.BaseContainer>
          <S.LogoContainer>
            <Logo width={150} height={40} />
            <h2
              style={{
                fontSize: theme.font.sizes.large,
                marginTop: theme.spacings.xsmall,
              }}
            >
              Avenida Cândido de Abreu, 381
            </h2>
            <p style={{ fontSize: theme.font.sizes.medium }}>contato@pdrestaurant.com</p>
          </S.LogoContainer>
          <S.FooterMenuContainer>
            <S.Block>
              <h3>A Empresa</h3>
              <ul>
                <li>Sobre a PDR</li>
                <li>Trabalhe Conosco</li>
                <li>Fale Conosco</li>
              </ul>
            </S.Block>
            <S.Block>
              <h3>Você</h3>
              <ul>
                <li>Meus Favoritos</li>
                <li>Minha Conta</li>
                <li>Política de Privacidade</li>
              </ul>
            </S.Block>
            <S.Block>
              <h3>Acompanhe a PDR</h3>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>TikTok</li>
              </ul>
            </S.Block>
          </S.FooterMenuContainer>
        </S.BaseContainer>
      </S.Footer>
    </S.Wrapper>
  );
}

TemplateBase.propTypes = {
  children: PropTypes.node.isRequired,
};
