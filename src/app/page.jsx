import Link from "next/link"
import SuccessToast from "@/components/Toast/successToast"
export default function Home() {
  return (
    <main className="flex min-h-screen w-full text-white font-sans">
        <div className="w-[32.42%] bg-custom-image hidden sm:block bg-cover relative flex-shrink-0">
           <h1 className="flex absolute justify-center inset-0 items-center transform -rotate-90 md:text-[64px] text-[54px] font-bold">Sign Up</h1>
        </div>

        <div className="flex-1 bg-[#272727] ">
          <div className="max-w-[600px] w-full mx-auto px-[40px] lg:px-0 flex flex-col ">
            <div className=" pt-[124px] sm:pt-[158px] md:pb-[44px] pb-[45px] flex flex-col items-center sm:items-start ">
              <h1 className="text-[48px] font-normal font-serif">Welcome</h1>
              <p className="text-[#A5A5A5] text-[24px] font-light">Lets sign you up quickly</p>
            </div>

            <form className="flex flex-col gap-[21.95px] sm:gap-[22px] sm:px-0 ">
                <input type="text" placeholder="Enter your name" required className="RegisterInputs" />
                <input type="email" placeholder="Enter your email" required className="RegisterInputs" />
                <input type="password" placeholder="Enter password" required className="RegisterInputs" />
                <input type="password" placeholder="Confirm password" required className="RegisterInputs" />

                <span className="flex flex-col md:flex-row justify-between gap-[45px]">
                    <button type="submit" className="bg-[#6EEB83] text-black md:w-[180px] w-[160px] md:h-[60px] h-[52.81px] text-[20px] font-semibold font-sans">SUBMIT</button>
                    <p className="text-[20px] font-normal max-w-[257px] w-full flex flex-col">already have an account? <span className="text-[#6EEB83] "> <Link href={'/Login'} >log-in</Link> </span> </p>
                </span>
            </form>
{/* <SuccessToast/> */}
        </div>
        </div>
    </main>
  )
}

