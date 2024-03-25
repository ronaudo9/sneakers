import Image from "next/image";
export const Feature = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 ">
      <div id="feature" className="mb-14 mt-[-80px] pt-20 ">
        <div className="mb-7 h-14  text-center text-4xl font-bold italic">
          FEATURE
        </div>
        <div className=" grid grid-cols-1 gap-7  md:grid-cols-2 lg:grid-cols-3">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="shadow-xl">
              <Image
                src={`/feature${i + 1}.jpg`}
                alt={`feature ${i + 1}`}
                width={385}
                height={257}
                style={{ objectFit: "fill" }}
                className="h-64 w-full"
              />
              <div className="m-7">
                <div className="mb-5 text-xs italic">category</div>
                <div className="mb-5 text-sm">
                  テキストテキストテキストテキストテキストテキストテキストテキスト
                </div>
                <div className="text-right text-xs italic">XXXX.XX.XX</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
