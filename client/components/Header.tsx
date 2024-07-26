import logo from '../images/Logo.png'

export default function Header() {
  return (
    <>
      <div className="w-full backdrop-blur-sm justify-between items-center bg-white/10 font-russo">
        <div className="grid grid-cols-3 grid-rows-1 gap-4">
          <div className="col-span-1 p-4 ">
            <img src={logo} alt="logo" width={150} />
          </div>

          <div className="col-span-2 ">
            <div className=" p-8 ">
              <div className=" lg:text-4xl pb-8 pt-4">Code Quest</div>
              <div className=" lg:text-2xl">Test your knowledge in Coding!</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
