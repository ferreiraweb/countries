import React from "react";

interface IMainProps {
  children: React.ReactNode;
}

export default function Main({ children }: IMainProps) {
  return <main className="container mx-auto p-4">{children}</main>;
}
