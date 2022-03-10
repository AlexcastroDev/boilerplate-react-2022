import { makeServer } from "../api"
import { ThemeProvider } from '@mui/material/styles';

import { theme } from './theme';
import { Layout } from './views/Layout';
import { QueryClient, QueryClientProvider } from 'react-query'
import { FunctionComponent } from "react";
import "./styles/main.css"

const queryClient = new QueryClient()

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Layout>
        </Layout>
      </QueryClientProvider>
    </ThemeProvider>
  )
}