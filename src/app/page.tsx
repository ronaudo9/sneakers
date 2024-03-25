import { Feature } from "@/components/Feature";
import { Pickup } from "@/components/Pickup";
import { Video } from "@/components/Video";

export default function Home() {
  return (
    <>
      <Video />
      <Pickup />
      <Feature />
      <footer id="contact" className=" w-full bg-gray-500 ">
        <div className="mx-auto   max-w-6xl  px-4 ">
          <div className="pt-12 ">
            <div className=" mb-7 text-center text-4xl font-bold italic">
              CONTACT
            </div>
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
