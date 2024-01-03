import Link from "next/link"
export default function login() {
  return (
    <main className="flex min-h-screen w-full text-white">
        <div className="w-[32.42%] bg-custom-image hidden sm:block bg-cover relative flex-shrink-0">
           <h1 className="flex absolute justify-center inset-0 items-center transform -rotate-90 md:text-[64px] text-[54px] font-bold">Login </h1>
        </div>

        <div className="flex-1 bg-[#272727]">
          <div className="max-w-[600px] w-full mx-auto my-auto px-10 lg:px-0 ">
          <div className=" pt-[182px md:pb-[44px] pb-[45px] flex flex-col items-center sm:items-start">
            <h1 className="text-[48px] font-normal">Welcome</h1>
            <p className="text-[#A5A5A5] text-[24px] font-light">Lets log you up quickly</p>
          </div>

          <form className="flex flex-col gap-[21.95px] sm:gap-[22px] sm:px-0 px-[41px]">
              <input type="email" placeholder="Enter your email" required className="RegisterInputs" />
              <input type="password" placeholder="Enter your password" required className="RegisterInputs" />

              <span className="flex flex-col md:flex-row justify-between gap-[45px]">
                  <button type="submit" className="bg-[#6EEB83] text-black w-[180px] h-[60px] text-[20px] font-semibold">LOGIN</button>
                  <p className="text-[20px] font-normal max-w-[257px] w-full flex flex-col">already have an account? <span className="text-[#6EEB83] "> <Link href={'/Login'} >Sign-up</Link> </span> </p>
              </span>
          </form>
        </div>
        </div>
    </main>
  )
}

