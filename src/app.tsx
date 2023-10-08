import { Github } from 'lucide-react'
import { Button } from "./components/ui/button";
import logo from './images/avatar.png';

export function App() {


  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-20 py-3 flex items-center justify-between border-b">
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

      <main className="flex p-20">
        <div className="flex flex-col flex-1 items-center">
          <div>
            <img src={logo} alt="Avatar"/>
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-center">
          <div >
            <h1 className="scroll-m-20 text-4xl  tracking-tight lg:text-5xl">
              Olá, me chamo Jonathan, sou engenheiro de software.
            </h1>
            <p className="text-xl text-muted-foreground pt-6">
            Com mais de 10 anos de experiencia como profissional de tecnologia da informação, nos últimos 3 anos me dediquei a estudos e atuando em projetos como programador. 
            </p>

            <div className="flex pt-10">
              <div className="flex flex-col  justify-center">
                <a href="https://jonhn.dev" target="_blank"><Button>Entre em contato</Button></a>
              </div>
              
              <div className="flex flex-col justify-center">
                <a href="https://www.linkedin.com/in/jonathanmedeiros" target="_blank"><Button variant="link">Saiba mais</Button></a>
              </div>
            </div>


          </div>
        </div>


      </main>
    </div>
  )
}