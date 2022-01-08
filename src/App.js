import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { useRoutes } from "react-router-dom";

import GlobalStyles from "./components/GlobalStyles";
import routes from "./routes";
import theme from "./theme";

function App() {
  const content = useRoutes(routes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {content}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
