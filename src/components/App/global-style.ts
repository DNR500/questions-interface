import { createGlobalStyle } from 'styled-components';
import { reboot } from 'styled-reboot';

const GlobalStyle = createGlobalStyle`
  ${reboot}
  body {
    display: flex;
    min-height: 100vh;
  }
  
  .main { 
    display: flex;
    justify-content: center;
    flex: 1;
  }
`;

export default GlobalStyle;
