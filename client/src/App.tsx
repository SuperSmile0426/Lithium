import React from 'react';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import "./App.css";

// import mui modules
import { ThemeProvider } from '@mui/material';

//stores
import { store } from "./redux/store";

// import styles
import { lightTheme } from './styles';

//routes
import AppRoutes from "./AppRoutes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <SnackbarProvider maxSnack={1}>
          <AppRoutes />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider >
  );
}

export default App;
