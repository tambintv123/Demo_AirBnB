import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import RouteMain from "routes";
import { getListLocation } from "./apis";
import CssBaseline from "@mui/material/CssBaseline";
import AppThemeProvider from "themes/AppThemeProvider";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    getListLocation({ limit: 20 });
  }, []);
  return (
    <AppThemeProvider>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <RouteMain />
      </QueryClientProvider>
    </AppThemeProvider>
  );
};

export default App;
