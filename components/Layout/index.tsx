import { ReactNode } from "react";
import Head from "next/head";
import Header from "../Header";
import Navbar from "../Navbar";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Welcome to my paradise" />
      </Head>
      <div className="container mx-auto px-[15px]">
        <div>
          <Header />
          <div className="flex gap-3">
            <div className="w-[20%]">
              <Navbar />
            </div>
            <div className="w-[80%] ">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
