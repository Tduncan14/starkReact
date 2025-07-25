import Image from "next/image";
import Main from "./Components/Main/Main";
import './globals.css'
import { Sidebar } from "./Components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="LayoutPage">

      <Sidebar className="Osidebar" />
      <Main className="OMainBody" />
    </div>
  );
}
