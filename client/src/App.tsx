import React from 'react';
import { Provider } from 'react-redux';
import "./App.css";

// import styles
import { lightTheme } from './styles';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <div>Dashboard</div>
      </ThemeProvider>
    </Provider >
  );
}

export default App;
