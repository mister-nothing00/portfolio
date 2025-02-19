import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { Provider } from "./components/ui/provider";
import { UserProvider } from "./context/User.jsx";
import { ProjectsProvider } from "./context/Projects.jsx";
const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ProjectsProvider>
        <Provider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <h1>Loading ...</h1>
              </div>
            }
          >
            <App />
          </Suspense>
        </Provider>
      </ProjectsProvider>
    </UserProvider>
  </StrictMode>
);
