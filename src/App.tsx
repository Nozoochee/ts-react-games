import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Games from './pages/games';
import Twitch from './pages/twitch';
import Other from './pages/other';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import { RootState } from '.';

function App() {
  const mode = useSelector((state:RootState) => state.mode) as PaletteMode;
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/games" element={<Games/>} />
            <Route path="/search" element={<Twitch/>} />
            <Route path="/other" element={<Other/>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
