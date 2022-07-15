export function Footer() {
  return (
    <>
      {" "}
      <div className="bg-back-color  mt-[120px] mx-auto  max-w-[1366px]">
        <div className="py-[32px] flex justify-center ">
          <img
            src="https://www.fancode.com/867f5c067d544a3f79567a893209f1c4.svg"
            className="w-[144px]"
          ></img>
        </div>

        <div className="flex flex-col justify-center items-center gap-[23px]  border-contact-color ">
          <div className="pt-[24px]">
            <span className="text-white">Connect With Us</span>
          </div>
          <div className="flex justify-center items-center gap-[24px] pb-[24px]">
            <img
              src="https://fancode.com/skillup-uploads/icons/twitter_icon.svg"
              style={{
                width: "48px",
              }}
            />
            <img
              src="https://fancode.com/skillup-uploads/icons/insta_icon.svg"
              style={{
                width: "48px",
              }}
            />
            <img
              src="https://fancode.com/skillup-uploads/icons/fb_icon.svg"
              style={{
                width: "48px",
              }}
            />
          </div>{" "}
        </div>
        <div className="flex flex-col justify-center items-center gap-[23px] border-1">
          <div className="px-[32px] w-[100%] flex justify-center items-center gap-[24px]">
            <div className="text-center">
              <p className="text-white ">
                Corporate Office: ONE BKC, Tower A, 12th &amp; 14th Floor, Unit
                1201 &amp; 1202 and 1401 &amp; 1402, Plot C-66, G Block, Bandra
                Kurla Complex, Bandra (East), Mumbai, Maharashtra-400051
              </p>
            </div>
            <div>
              <p className="text-center">
                <a className="text-white">Careers</a>
                <span className="text-white"> | </span>
                <a className="text-white">Help Desk</a>
                <span className="text-white"> | </span>
                <a className="text-white">T&Cs </a>
                <span className="text-white"> | </span>
                <a className="text-white">Privacy Policy </a>
                <span className="text-white"> </span>
                <a className="text-white"> | About Us </a>
                <span className="text-white"> | </span>
                <a className="text-white">IND vs WI </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
