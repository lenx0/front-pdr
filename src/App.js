import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import Global from './styles/globalStyles';

import TemplateBase from './templates/Base';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function handleToggleTheme() {
    setIsDarkTheme((prevState) => !prevState);
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Global />
      <TemplateBase>
        <h1>
          Hello World
        </h1>
        <button type="button" onClick={handleToggleTheme}>
          mudar tema
        </button>
      </TemplateBase>
    </ThemeProvider>
  );
}

export default App;
