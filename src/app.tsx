import { Github } from 'lucide-react'
import { Button } from "./components/ui/button";
import logo from './images/avatar.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin  } from "@fortawesome/free-brands-svg-icons";


export function App() {


  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-20 py-3 flex items-center justify-between border-b gap-3">
        <div className='flex flex-col'>
          <h1 className="text-sm font-bold">
            <a href="/">
                  <span className='text-blue-500 text-xl'>jonathanmedeiros</span>.dev
            </a>  
          </h1>
        </div>
        {/* <div className='flex flex-col'>
          <div className="flex items-center gap-3">
            <a href="">
              <Button variant="secondary">Portifólio</Button>
            </a>
          
            <a href="https://jonhn.dev">
              <Button variant="secondary">Contato</Button>
            </a>
            
          </div>
        </div> */}

        <div className='flex flex-col'>

          <a href="https://github.com/jonhnmedeiros" target="_blank">
            <Button variant="outline">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </a>

        </div>  



      </div>

      <main className="flex p-20 gap-4 flex-row mobile:flex-col">
        <div className="flex flex-col flex-1 items-center">
          <div>
            <img src={logo} alt="Avatar"/>
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-center">
          <div >
            <h1 className="scroll-m-20 text-4xl  tracking-tight lg:text-5xl">
              Hi, my name is Jonathan, I'm a software engineer and front-end developer.
            </h1>
            <p className="text-xl text-muted-foreground pt-6">
            Professional experience with more than 10 years. Studying MBA in Software Engineering and graduated in Information's Systems. I shift my carrer to Software Development and dedicated the last 3-4 years studying, developing projects and working as a developer.
            </p>

            <div className="flex pt-10 gap-5 items-center">
              <div className="flex flex-col justify-center">
                <a href="mailto:me@jonathanmedeiros.dev"><Button >Mail me</Button></a>
              </div>
              
              <div className='flex flex-row items-center justify-center gap-3'>
                <a className="flex justify-center" href="https://linkedin.com/in/jonathanmedeiros/" target="_blank">
                  <Button size="icon" variant="secondary" ><FontAwesomeIcon icon={faLinkedin} size='2xl' /></Button>
                </a>
                <a className="flex justify-center" href="https://instagram.com/jonhnmedeiros" target="_blank">
                  <Button size="icon" variant="secondary" ><FontAwesomeIcon icon={faInstagram} size='2xl' /></Button>
                </a>
              </div>
            </div>

          </div>
        </div>


      </main>
    </div>
  )
}