import { ReactNode } from "react";

export type PageProps = {
  params: {
    lng: string;
  };
};

export type RootLayoutProps = PageProps & {
  children: ReactNode;
};
