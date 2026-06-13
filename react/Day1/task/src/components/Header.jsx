import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
    <div className="bg-white flex justify-between items-center">
        <Logo/>
        <CompanyName/>
        <NavigationMenu/>
    </div>
    </>
  )
}

export default Header


const Logo=()=>{
    return(
        <>
        <div>
            <img className="w-10 h-10 ml-5 " src="./logo.jpg" alt="" />            
        </div>
        </>
    )
}

const CompanyName=()=>{
    return(
        <>
        <div>
            <h1 className="text-blue-500 font-bold bg-black w-80 text-center rounded-4xl p-2">SoftLogic Task-6</h1>
        </div>
        </>
    )
}

const NavigationMenu=()=>{
    return(
        <>
        <div className="flex gap-10 pr-10 ">
            <Link className="bg-black rounded-4xl text-white p-1 hover:bg-blue-600">Home</Link>
            <Link className="bg-black rounded-4xl text-white p-1 hover:bg-blue-600">About us</Link>
            <Link className="bg-black rounded-4xl text-white p-1 hover:bg-blue-600">Tasks</Link>
            <Link className="bg-black rounded-4xl text-white p-1 hover:bg-blue-600">Career</Link>
        </div>
        </>
    )
}