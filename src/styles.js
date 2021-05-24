import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  from {
    transform: translateY(-12px);
  }

  to {
    transform: translateY(12px);
  }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    animation-name: ${bounce};
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;

    .App {
      text-align: center;
    }

    .App-logo {
      height: 10vmin;
      pointer-events: none;
    }

    .App-header {
      background-color: #282c34;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: white;
    }

    .App-link {
      color: #61dafb;
    }
`;
