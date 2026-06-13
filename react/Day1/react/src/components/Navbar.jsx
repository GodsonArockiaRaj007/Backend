import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(<>
    <div className='flex bg-blue-700 justify-between '>
        <Logo/>
        <Links/>
    </div>
    </>)
}
export default Navbar

const Logo=()=>{
    return(
        <>
        <div className='w-15 mx-10 '>
            <img className='rounded-4xl mt-2 ' src="../../public/logo.png" alt="" />
        </div>
        </>
    )
}

const Links=()=>{
    return(
        <>
        <div className='flex mx-10 gap-10 text-white mt-4 mb-4'>
            <Link className='bg-black p-2 rounded-4xl'>Home</Link>
            <Link className='bg-black p-2 rounded-4xl'>My Skills</Link>
            <Link className='bg-black p-2 rounded-4xl'>Task</Link>
            <Link className='bg-black p-2 rounded-4xl'>Projects</Link>
            <Link className='bg-black p-2 rounded-4xl'>About Me</Link>
            <Link></Link>
        </div>
        </>
    )
}