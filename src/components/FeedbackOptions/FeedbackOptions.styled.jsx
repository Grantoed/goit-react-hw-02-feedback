import styled from 'styled-components';

export const Button = styled.button`
  width: ${p => p.theme.sizes.m};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.bg};
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;
