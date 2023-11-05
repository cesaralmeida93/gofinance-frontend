import styled from 'styled-components';

export const Container = styled.div`
  width: 373px;
  height: 177px;
  background-color: ${props => props.theme.colors.black1};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h1{
    color: ${props => props.theme.colors.primary};
    font-size: 30px;
  }
`;

export const ValueLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;