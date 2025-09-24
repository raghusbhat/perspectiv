import "./App.css";
import { 
  createBrowserRouter, 
  RouterProvider,
  ScrollRestoration 
} from "react-router-dom";
import Home from "./routes/home";
import Capabilities from "./routes/software/capabilities";
import AITrainingDeployment from "./routes/software/ai-training-deployment";
import DashboardAnalytics from "./routes/software/dashboard-analytics";
import IntegrationAPIs from "./routes/software/integration-apis";
import NotFound from "./routes/not-found";
import { RootLayout } from "./layouts/root-layout";
import { ErrorBoundary } from "./components/ErrorBoundary";

// Create router with error boundaries and 404 handling
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "software/capabilities",
        element: <Capabilities />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "software/ai-training-deployment",
        element: <AITrainingDeployment />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "software/dashboard-analytics",
        element: <DashboardAnalytics />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "software/integration-apis",
        element: <IntegrationAPIs />,
        errorElement: <ErrorBoundary />,
      },
      // Future routes can be added here
      {
        path: "hardware/desktop-visual-inspection-system",
        element: <NotFound />, // Placeholder until implemented
      },
      {
        path: "hardware/industrial-compute-system",
        element: <NotFound />, // Placeholder until implemented
      },
      {
        path: "industries/*",
        element: <NotFound />, // Placeholder until implemented
      },
      {
        path: "case-studies",
        element: <NotFound />, // Placeholder until implemented
      },
      {
        path: "about-us",
        element: <NotFound />, // Placeholder until implemented
      },
      {
        path: "contact",
        element: <NotFound />, // Placeholder until implemented
      },
      // 404 catch-all route
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
