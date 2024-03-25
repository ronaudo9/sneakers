export const Footer = () => {
  return (
    <footer id="contact" className=" w-full bg-black ">
      <div className="mx-auto    max-w-6xl px-4">
        <div className="py-12">
          <div className=" mb-7 text-center text-4xl font-bold italic text-white">
            CONTACT
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-7  md:w-45">
              <div className="mb-7 text-sm text-white">
                テキストテキストテキスト
              </div>
              <div className="mb-7 text-sm text-white">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </div>
              <div className="text-sm text-white">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </div>
            </div>
            <div className=" md:w-45">
              <div className="mb-5">
                <div className="text-sm italic text-white">Name:</div>
                <input className="h-11 w-full" type="text" />
              </div>
              <div className="mb-5">
                <div className="text-sm italic text-white">Mail:</div>
                <input className="h-11 w-full" type="text" />
              </div>
              <div className="mb-5">
                <div className="text-sm italic text-white">Message:</div>
                <input className="h-16 w-full" type="text" />
              </div>
              <button className="flex h-12 w-full items-center justify-center border border-white text-center text-sm italic text-white md:w-48">
                SEND
              </button>
            </div>
          </div>
        </div>
        <div className="pb-2 text-center text-xs italic text-white">
          &copy; Sneakers
        </div>
      </div>
    </footer>
  );
};
