import styled from 'styled-components';

export const StatElement = styled.div`
  display: flex;
  width: 100%;
`;

export const StatName = styled.p`
  margin-right: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const StatCount = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
`;
