import App from "@/node_modules/next/app";
import { Anywhere } from "./components/Anywhere";
import { Apps } from "./components/Apps";
import { Banner } from "./components/Banner";
import { Client } from "./components/Clients";
import { Cta } from "./components/Cta";
import { Customise } from "./components/Customise";
import { Extension } from "./components/Extension";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Plan } from "./components/Plans";
import { Project } from "./components/Project";
import { Sponsers } from "./components/Sponsers";
import { Work } from "./components/Work";
import { YourData } from "./components/Your-data";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Project />
      <Work />
      <Extension />
      <Customise />
      <Plan />
      <Anywhere />
      <YourData />
      <Sponsers />
      <Apps />
      <Client />
      <Cta />
      <Footer />
    </main>
  )
}
