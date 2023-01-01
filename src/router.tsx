import { createBrowserRouter, Navigate } from "react-router-dom";
import { TeamIndex } from "./pages/teams/index/page";
import { TeamNew } from "./pages/teams/new/page";
import { TeamRandom } from "./pages/teams/[teamId]/random/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/teams" />,
  },
  {
    path: "/teams",
    element: <TeamIndex />,
  },
  {
    path: "/teams/new",
    element: <TeamNew />,
  },
  {
    path: "/teams/:teamId/random",
    element: <TeamRandom />,
  },
]);
