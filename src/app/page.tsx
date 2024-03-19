export default function Home() {
  return (
    <>
      <div className="mb-24 mt-20 h-150  w-full bg-yellow-100">video</div>
      <div>
        <div id="pickup" className="mb-24 mt-[-80px] pt-20">
          <div
            className="mb-7 h-14
         bg-green-50 text-center text-4xl"
          >
            PICK UP
          </div>
          <div className="h-64 w-full bg-blue-50">picture</div>
        </div>
        <div className="mx-auto max-w-6xl px-4 ">
          <div id="feature" className="mb-14 mt-[-80px] pt-20 ">
            <div className="mb-7 h-14  bg-slate-100 text-center text-4xl">
              FEATURE
            </div>
            <div className=" grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              <div className="h-106 bg-gray-200">aa</div>
              <div className="h-106 bg-gray-200">a</div>
              <div className="h-106 bg-gray-200">cc</div>
              <div className="h-106 bg-gray-200">cc</div>
              <div className="h-106 bg-gray-200">cc</div>
              <div className="h-106 bg-gray-200">cc</div>
              <div className="h-106 bg-gray-200">cc</div>
              <div className="h-106 bg-gray-200">cc</div>
              <div className="h-106 bg-gray-200">cc</div>
            </div>
          </div>
        </div>
      </div>
      <footer id="contact" className=" w-full bg-gray-500 ">
        <div className="mx-auto   max-w-6xl  px-4 ">
          <div className="pt-12 ">
            <div className=" mb-7 text-center text-4xl">CONTACT</div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="mb-7 bg-green-50 md:w-45">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </div>
              <div className="bg-blue-50 md:w-45">bb</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
