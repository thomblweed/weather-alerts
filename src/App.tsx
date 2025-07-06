import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { WeatherAlertsFeature } from '@/features/weather-alerts/ui/WeatherAlertsFeature';
import { MainLayout } from '@/layouts/MainLayout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MainLayout>
      <WeatherAlertsFeature />
    </MainLayout>
  </QueryClientProvider>
);

export default App;
