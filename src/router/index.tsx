import { createBrowserRouter } from "react-router";

// Importing the layouts used by the application
import FullScreenLayout from "@/layouts/FullScreenLayout";
import AppLayout from "@/layouts/AppLayout";

// Importing the screens used in the application
import { FreeBlocks } from "@/views/main/blocks/FreeBlocks";
import Documentation from "@/views/main/documentation/Documentation";
import Crud from "@/views/main/pages/crud/CRUD";
import Dashboard from "@/views/main/pages/dashboard/Dashboard";
import EmptyPage from "@/views/main/pages/empty/Empty";
import TimelineDemo from "@/views/main/pages/timeline/Timeline";

import ButtonDemo from "@/views/main/uikit/button/ButtonDemo";
import ChartDemo from "@/views/main/uikit/charts/ChartDemo";
import FileDemo from "@/views/main/uikit/file/FileDemo";
import FloatLabelDemo from "@/views/main/uikit/floatlabel/FloatLabelDemo";
import FormLayoutDemo from "@/views/main/uikit/formlayout/FormLayoutDemo";
import InputDemo from "@/views/main/uikit/input/InputDemo";
import InvalidStateDemo from "@/views/main/uikit/invalidstate/InvalidStateDemo";
import ListDemo from "@/views/main/uikit/list/ListDemo";
import MediaDemo from "@/views/main/uikit/media/MediaDemo";
import MenuDemo from "@/views/main/uikit/menu/MenuDemo";
import MessagesDemo from "@/views/main/uikit/message/MessagesDemo";
import MiscDemo from "@/views/main/uikit/misc/MiscDemo";
import OverlayDemo from "@/views/main/uikit/overlay/OverlayDemo";
import PanelDemo from "@/views/main/uikit/panel/PanelDemo";
import TableDemo from "@/views/main/uikit/table/TableDemo";
import TreeDemo from "@/views/main/uikit/tree/TreeDemo";

import IconsDemo from "@/views/main/utilities/icons/IconsDemo";

import AccessDeniedPage from "@/views/full-page/auth/Access";
import ErrorPage from "@/views/full-page/auth/Error";
import LoginPage from "@/views/full-page/auth/Login";
import LandingPage from "@/views/full-page/landing/Landing";
import NotFoundPage from "@/views/full-page/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/uikit/formlayout",
        element: <FormLayoutDemo />,
      },
      {
        path: "/uikit/input",
        element: <InputDemo />,
      },
      {
        path: "/uikit/floatlabel",
        element: <FloatLabelDemo />,
      },
      {
        path: "/uikit/invalidstate",
        element: <InvalidStateDemo />,
      },
      {
        path: "/uikit/button",
        element: <ButtonDemo />,
      },
      {
        path: "/uikit/table",
        element: <TableDemo />,
      },
      {
        path: "/uikit/list",
        element: <ListDemo />,
      },
      {
        path: "/uikit/tree",
        element: <TreeDemo />,
      },
      {
        path: "/uikit/panel",
        element: <PanelDemo />,
      },
      {
        path: "/uikit/overlay",
        element: <OverlayDemo />,
      },
      {
        path: "/uikit/media",
        element: <MediaDemo />,
      },
      {
        path: "/uikit/menu",
        element: <MenuDemo children={undefined} />,
      },
      {
        path: "/uikit/message",
        element: <MessagesDemo />,
      },
      {
        path: "/uikit/file",
        element: <FileDemo />,
      },
      {
        path: "/uikit/charts",
        element: <ChartDemo />,
      },
      {
        path: "/uikit/misc",
        element: <MiscDemo />,
      },
      {
        path: "/blocks",
        element: <FreeBlocks />,
      },
      {
        path: "https://blocks.primereact.org/",
        // element: < />,
      },
      {
        path: "/utilities/icons",
        element: <IconsDemo />,
      },
      {
        path: "https://primeflex.org/",
        // element: < />,
      },

      {
        path: "/pages/crud",
        element: <Crud />,
      },
      {
        path: "/pages/timeline",
        element: <TimelineDemo />,
      },

      {
        path: "/pages/empty",
        element: <EmptyPage />,
      },
      {
        path: "/documentation",
        element: <Documentation />,
      },
      {
        path: "https://github.com/primefaces/sakai-react",
        // element: < />,
      },
    ],
  },
  {
    path: "/",
    element: <FullScreenLayout />,
    children: [
      {
        path: "/landing",
        element: <LandingPage />,
      },
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/auth/error",
        element: <ErrorPage />,
      },
      {
        path: "/auth/access",
        element: <AccessDeniedPage />,
      },

      {
        path: "/pages/notfound",
        element: <NotFoundPage />,
      },
    ],
  },
]);
