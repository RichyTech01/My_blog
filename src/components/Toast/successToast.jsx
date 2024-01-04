const successToast = () => {
    return ( 
      <section className=" flex items-center justify-center min-h-screen ">
          <div className="bg-[#6EEB83] max-w-[364px] w-full h-[80px] flex justify-center items-center absolute right-0 top-0 gap-[118px] mt-[44px] mr-[73px]">
            <div className="ml-[26px] text-[16px] font-normal text-black ">
                <h1>SUCCESS</h1>
                <p>You can Log-in now.</p>
            </div>

            <div className="mr-[24px] w-[40px] h-[40px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <mask id="mask0_17_347" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                <rect width="40" height="40" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_17_347)">
                <path d="M5 16.6666C4.52778 16.6666 4.13223 16.4999 3.81334 16.1666C3.49334 15.8333 3.36111 15.4444 3.41667 14.9999C3.61111 13.1666 4.09056 11.4094 4.855 9.72825C5.61834 8.04825 6.625 6.54159 7.875 5.20825C8.18056 4.9027 8.56945 4.74992 9.04167 4.74992C9.51389 4.74992 9.91667 4.91659 10.25 5.24992C10.5556 5.55547 10.7083 5.93047 10.7083 6.37492C10.7083 6.81936 10.5556 7.22214 10.25 7.58325C9.27778 8.63881 8.49334 9.78436 7.89667 11.0199C7.29889 12.2566 6.91667 13.5833 6.75 14.9999C6.69445 15.4721 6.50723 15.8677 6.18834 16.1866C5.86834 16.5066 5.47223 16.6666 5 16.6666ZM35 16.6666C34.5556 16.6666 34.1667 16.5066 33.8333 16.1866C33.5 15.8677 33.3056 15.4721 33.25 14.9999C33.0833 13.5833 32.7017 12.2566 32.105 11.0199C31.5072 9.78436 30.7222 8.63881 29.75 7.58325C29.4445 7.22214 29.2917 6.81936 29.2917 6.37492C29.2917 5.93047 29.4583 5.55547 29.7917 5.24992C30.125 4.91659 30.5206 4.74992 30.9783 4.74992C31.4372 4.74992 31.8194 4.9027 32.125 5.20825C33.375 6.54159 34.3822 8.04825 35.1467 9.72825C35.91 11.4094 36.3889 13.1666 36.5833 14.9999C36.6389 15.4444 36.5067 15.8333 36.1867 16.1666C35.8678 16.4999 35.4722 16.6666 35 16.6666ZM8.33334 31.6666C7.86111 31.6666 7.465 31.5066 7.145 31.1866C6.82612 30.8677 6.66667 30.4721 6.66667 29.9999C6.66667 29.5277 6.82612 29.1321 7.145 28.8133C7.465 28.4933 7.86111 28.3333 8.33334 28.3333H10V16.6666C10 14.361 10.6944 12.3121 12.0833 10.5199C13.4722 8.72881 15.2778 7.55547 17.5 6.99992V5.83325C17.5 5.13881 17.7433 4.54881 18.23 4.06325C18.7156 3.57659 19.3056 3.33325 20 3.33325C20.6944 3.33325 21.2844 3.57659 21.77 4.06325C22.2567 4.54881 22.5 5.13881 22.5 5.83325V6.99992C24.7222 7.55547 26.5278 8.72881 27.9167 10.5199C29.3056 12.3121 30 14.361 30 16.6666V28.3333H31.6667C32.1389 28.3333 32.5344 28.4933 32.8533 28.8133C33.1733 29.1321 33.3333 29.5277 33.3333 29.9999C33.3333 30.4721 33.1733 30.8677 32.8533 31.1866C32.5344 31.5066 32.1389 31.6666 31.6667 31.6666H8.33334ZM20 36.6666C19.0833 36.6666 18.2989 36.3405 17.6467 35.6883C16.9933 35.0349 16.6667 34.2499 16.6667 33.3333H23.3333C23.3333 34.2499 23.0072 35.0349 22.355 35.6883C21.7017 36.3405 20.9167 36.6666 20 36.6666ZM13.3333 28.3333H26.6667V16.6666C26.6667 14.8333 26.0139 13.2638 24.7083 11.9583C23.4028 10.6527 21.8333 9.99992 20 9.99992C18.1667 9.99992 16.5972 10.6527 15.2917 11.9583C13.9861 13.2638 13.3333 14.8333 13.3333 16.6666V28.3333Z" fill="#1C1B1F"/>
              </g>
           </svg>
            </div>
            </div>
        </section>
     );
}
 
export default successToast;