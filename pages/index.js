import Head from "next/head";
import { Navigation } from "../components/navigation/navigation.component";
import { ConnectionBar } from "../components/ConnectionBar/Connection.component";
import { Hero } from "../components/Hero/Hero.component";
import { About } from "../components/About/About.component";
import { Skills } from "../components/Skills/Skills.component";
import { Projects } from "../components/Projects/Projects.component";
import { data } from "../components/Projects/projects.data";
import {HiOutlineArrowCircleUp} from "react-icons/hi"


const color = { color: "#3b82f6", margin: "auto" };
export default function Home(props) {
  return (
    <html>
      <Head>
        <title>Mahyar FardinFar</title>
		<script src="https://cdn.tailwindcss.com"></script>
      </Head>

	  <body>
	   <div className="w-full h-full m-0">
	    <Navigation />

	    <div id="hero">
		  <Hero/>
	    </div>

	    <ConnectionBar />

	    <div id="about">
		  <About />
	    </div>

	    <div id="skills">
		  <Skills />
	    </div>
	    
		<Projects repositories={props.repositories}/> 
	    </div>

	    <a href="#hero">
		  <HiOutlineArrowCircleUp size={45} style={color} className="drop-shadow-2xl animate-bounce"/>
	    </a>

	   <div className="h-6 w-full bg-blue-500"/>
	  </body>
    </html>
  );
}

export async function getStaticProps() {
  
  return {
    props: {
      repositories: data,
    },
  };
}
