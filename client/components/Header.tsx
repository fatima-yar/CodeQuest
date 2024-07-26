import logo from '../images/Logo.png'

export default function Header() {
  return (
    <>
      <div className="w-full backdrop-blur-sm bg-white/10 font-russo flex flex-col items-center justify-center">
        <div className="p-4">
          <img src={logo} alt="logo" width={100} />
        </div>

        <div className="text-center">
          <div className="p-6">
            <div className="lg:text-3xl pb-4 pt-2">Code Quest</div>
            <div className="lg:text-xl">Test your knowledge in Coding!</div>
          </div>
        </div>
      </div>
    </>
  )
}
