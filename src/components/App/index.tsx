import GlobalStyle from './global-style';
import { ThemeProvider } from 'styled-components';
import { defaultRebootTheme } from 'styled-reboot';
import { QuestionsView } from '@/components/QuestionsView';
import { initialUserData } from '@/data/userdata';
import { questions } from '@/data/questions';

import { AppContainer, AppColumn } from './styles';

const App = () => {
  return (
    <ThemeProvider theme={defaultRebootTheme}>
      <AppContainer>
        <GlobalStyle />
        <AppColumn>
          <QuestionsView questions={questions} userdata={initialUserData} />
        </AppColumn>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
