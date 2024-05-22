import styled, { css } from 'styled-components';

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(75, 92, 107, .75);
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
`;

const Container = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  box-sizing: border-box;
  padding: 1.25rem;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(0);
  z-index: 1;
`;

export const Dialog = Object.assign(
  styled.div<{ $visible: boolean; }>`
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    transform: ${props => props.$visible ? 'translateY(0)' : 'translateY(-100%)'};
    z-index: 1000;
    ${props => props.$visible && css`
      ${Container} {
        animation: slipIn .5s ease;
        @keyframes slipIn {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      }
    `}
  `,
  {
    Container,
    Backdrop
  }
);
