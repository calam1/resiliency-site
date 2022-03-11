import DarkToggle from "./DarkToggle";
import Logo from "./logo/Logo";
import SvgGithub from "./SideBar/SvgGithub";

export default function TopNav() {
  return (
    // <div className="flex flex-row justify-center items-center border-b border-black border-opacity-10 bg-gray-50 dark:bg-black h-14">
    <div className="flex flex-row justify-center items-center, space-x-27">
        <div className="flex flex-row justify-left items-left">
          <Logo isLink={true} scale="1.10" />
        </div>
        {/* <div className="ml-auto flex justify-center mr-2"> */}
          {/* <a
          href="https://github.com/MatthewCaseres"
          target="_blank"
          rel="noopener noreferrer"
        / 
          <SvgGithub className="mr-5 w-7 h-7" />
        </a> */}
        {/* </div> */}



          
  {/* <nav aria-label="primary" className="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row"> */}
{/*   
  <div className="relative group flex">
      <button className="flex flex-row items-center group-hover w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
          <span>First Dropdown</span>
      </button>
      <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
          
          <div className=" flex px-2 pt-2 pb-4 bg-white bg-gray-200 shadow-lg">
            <div className="flex grid grid-cols-1 gap-4 md:grid-cols-2">
              <p>
                dropdown content here
              </p>
            </div>
          </div>
      </div>
  </div>  
   */}
  <div className="relative group">
      <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-sans text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
          <span>First Dropdown</span>
      </button>
      <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
          
          <div className="px-2 pt-2 pb-4 bg-white bg-white shadow-lg">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <p>
                dropdown content here 
              </p>
            </div>
          </div>
      </div>
  </div>   

   <div className="relative group">
      <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-sans text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
          <span>Second Dropdown</span>
      </button>
      <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
          
          <div className="px-2 pt-2 pb-4 bg-white bg-white shadow-lg">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <p>
                dropdown content here 
              </p>
            </div>
          </div>
      </div>
  </div>   

  <div className="relative group">
      <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-sans text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
          <span>Third Dropdown</span>
      </button>
      <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
          
          <div className="px-2 pt-2 pb-4 bg-white bg-white shadow-lg">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <p>
                dropdown content here 
              </p>
            </div>
          </div>
      </div>
  </div>   

  <div className="relative group">
      <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-sans text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
          <span>Fourth Dropdown</span>
      </button>
      <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
          
          <div className="px-2 pt-2 pb-4 bg-white bg-white shadow-lg">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <p>
                dropdown content here 
              </p>
            </div>
          </div>
      </div>
  </div>   
{/* </nav>  */}
    



      <div className="flex ">
        <DarkToggle />
      </div>
     </div>
  );
}
