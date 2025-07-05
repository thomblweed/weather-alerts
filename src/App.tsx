import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { WeatherAlertsFeature } from '@/features/weather-alerts/ui/WeatherAlertsFeature';
import { MainLayout } from '@/layouts/MainLayout';
import { ThemeProvider } from '@/providers/ThemeProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <MainLayout>
        <WeatherAlertsFeature />
      </MainLayout>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
