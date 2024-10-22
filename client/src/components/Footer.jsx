function Footer() {
  return (
    <>
      <div className='bg-[#f7f7f7] rounded-t-[3rem] px-[4vw] py-[4vh] mt-[5vh]'>
        <div className='flex flex-row justify-center md:justify-between container mx-auto'>

          <div className='flex flex-col gap-[1.5vh]'>
            <img src='/logo.svg' className="h-[8vh] md:w-[12vw] md:h-auto"></img>
            <p className="font-medium text-center md:text-left">Connoisseurs in the aloo-pyaj industry</p>
            <ul className="flex flex-row gap-2 mx-auto md:mx-0">
              <li>
                <img 
                  src="/SocialMedia/Facebook.svg" 
                  className="h-[3vh] hover:scale-125 hover:brightness-150 transition-transform duration-500 ease-in-out cursor-pointer"
                  alt="Facebook"
                />
              </li>
              <li>
                <img 
                  src="/SocialMedia/Instagram.svg" 
                  className="h-[3vh] hover:scale-125 hover:brightness-150 transition-transform duration-500 ease-in-out cursor-pointer"
                  alt="Instagram"
                />
              </li>
              <li>
                <img 
                  src="/SocialMedia/LinkedIn.svg" 
                  className="h-[3vh] hover:scale-125 hover:brightness-150 transition-transform duration-500 ease-in-out cursor-pointer"
                  alt="LinkedIn"
                />
              </li>
              <li>
                <img 
                  src="/SocialMedia/Twitter.svg" 
                  className="h-[3vh] hover:scale-125 hover:brightness-150 transition-transform duration-500 ease-in-out cursor-pointer"
                  alt="Twitter"
                />
              </li>
              <li>
                <img 
                  src="/SocialMedia/YouTube.svg" 
                  className="h-[3vh] hover:scale-125 hover:brightness-150 transition-transform duration-500 ease-in-out cursor-pointer"
                  alt="YouTube"
                />
              </li>
            </ul>
          </div>

          <div className="hidden md:flex md:flex-row align-center items-start gap-5 my-auto">
            <p className="font-bold text-[#54b22c]">Contact Us</p>
            <span className="flex flex-row gap-2">
              <span>
                <img 
                  src="/Contacts/Email.svg" 
                  className="hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  alt="Email"
                />
              </span>
              <span>support@charul.in</span>
            </span>
            <span className="flex flex-row gap-2">
              <span>
                <img 
                  src="/Contacts/Phone.svg" 
                  className="hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  alt="Phone"
                />
              </span>
              <span>9511618094</span>
            </span>
            <span className="flex flex-row gap-2">
              <span>
                <img 
                  src="/Contacts/Mark.svg" 
                  className="hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  alt="Location"
                />
              </span>
              <iframe
                title="Embedded Google Map"
                src=""
                width="200"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </span>
          </div>
        </div>

        <div>
          <hr className="border-[0.25vh] border-[#888888] w-[90%] mx-auto my-[4vh]"></hr>
          <p className='copyrightContainer'>
            <div className="flex flex-row justify-between container mx-auto">
              <span>&copy; Copyright 2024 - Brutally Productions.</span>
              <span className="hidden md:block">All rights reserved. For more information on our Terms and Conditions Click Here</span>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
