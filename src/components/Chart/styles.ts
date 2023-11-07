import styled from 'styled-components';

export const Container = styled.div`
height: 613;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

interface SubtitleProps {
  color: string;
}

export const SubtitleContainer = styled.div<SubtitleProps>`
  display: flex;
  gap: 15;

  div {
    background-color: ${props => props.color};
    width: 30px;
    height: 22px;
  }
`;