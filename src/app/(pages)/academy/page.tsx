import {
  iconsMetadata,
  othersMetadata,
  robotsDefault,
} from "@/shared/settings/default-metadata";
import Title from "@/shared/UIComponents/Base/Title";
import type { Metadata } from "next";
import ListCategories from "./components/ListCategories";

export const metadata: Metadata = {
  title: "Gonzalo Axel Academy",
  description: "Academia",

  ...iconsMetadata,
  ...robotsDefault,
  ...othersMetadata,
};
const PageAcademy = () => {
  return (
    <main className="w-full ">
      <section
  
>
  <div className="slice-layout w-full text-gray-15 py-12 md:py-20 2xl:py-24 relative overflow-hidden">
    <div className="container items-center relative z-10 md:py-[5vh] 2xl:py-[9vh]">
      <div className="mx-auto text-center flex flex-col items-center relative z-10">
        <span className="block font-bold text-base md:text-md text-primary-blue mb-4">
          Academia
        </span>
        <h1 className="font-headings tracking-tight scroll-mt-[120px] text-6xl lg:text-7xl 2xl:text-8xl font-bold max-w-[14em] wrap-balance">
          Create on-brand pages faster
        </h1>
        <div className="font-copy text-base lg:text-md 2xl:text-xl font-medium print:text-[14px] print:text-justify mt-4 lg:mt-6">
          <p className="my-6 first:mt-0 last:mb-0 print:my-2 max-w-xl mx-auto text-gray-50">
            Get a page builder, configured to your needs.<strong> </strong>
            Easily create fast, brand consistent website pages. Release more to
            attract more visitors and convert quality leads.
          </p>
        </div>
        <div className="flex items-center flex-wrap gap-4 mt-6 lg:mt-10">
         
          <a
            target="_blank"
            className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group underline underline-offset-8 focus:ring-4 hover:underline-offset-4 border-gray-15 py-3 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 -mx-2.5 px-2.5"
            rel="noreferrer"
            href="#"
          >
            Comenzar
          </a>
        </div>
      </div>
    </div>
    <img
      alt=""
      
      width={1440}
      height={642}
      decoding="async"
      data-nimg={1}
      className="absolute right-0 left-0 w-full hidden sm:block bottom-0"
      
      src="https://prismic-main.cdn.prismic.io/prismic-main/81550ec4-8233-4742-a56c-79e151342fe1_marketer-background+%282%29.svg?fit=max&w=3840"
      style={{ color: "transparent" }}
    />
  </div>
</section>

      <div

        className="mx-[4%]"
      >

           <ListCategories />


        <div className="slice-layout w-full text-gray-15 py-12 md:py-20 2xl:py-24">
          <div className="container">
            <div className="sm:flex justify-between items-center relative z-10">

              <Title className="text-3xl">
                Nuevos temas para profundizar
              </Title>

            </div>

            <div className=" h-full mt-6 lg:mt-12 ">
              <div
                className="grid gap-5 grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3"
              >
                <div
                  className=" swiper-slide flex h-full flex-col items-center group swiper-slide-active"

                >
                  <div className="bg-gray-15 text-base-flat relative text-white py-4 px-6 rounded-xl whitespace-nowrap after:content-[''] after:block after:w-3 after:h-3 after:bg-gray-15 after:rotate-45 after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:z-10">
                    July 9, 2024
                  </div>
                  <div className="flex items-center relative mt-5 mb-7 h-[6px] w-full">
                    <div className="h-4 w-4 bg-white border-4 border-secondary-purple rounded-full z-10 absolute left-1/2 -translate-x-1/2" />
                    <div className="absolute top-0 bottom-0 flex justify-end h-[6px] group-first:left-0 group-first:right-0 rounded-l-full bg-secondary-purple">
                      <div className="w-1/2 hidden group-last:block bg-secondary-purple" />
                      <div className="w-1/2 grid-cols-[repeat(19,_minmax(0,_1fr))] hidden group-last:grid overflow-hidden">
                        <div className="bg-secondary-purple col-span-2 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-4 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-7 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-10 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[13] h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[16] h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[19] h-[6px] rounded-full" />
                      </div>
                    </div>
                  </div>
                  <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl flex-col bg-white border-gray-EE text-gray-15">
                    <div className="flex h-full gap-4 f p-8 flex-col">
                      <div className="flex flex-col gap-4 flex-grow">

                        <p className=" scroll-mt-[120px]  text-xl">
                          Translate with AI and Next.js 15 / Svelte 5 support! - June
                          Chronicles 2024
                        </p>

                        <p className="text-gray-50" />
                      </div>

                    </div>
                  </article>
                </div>
                <div
                  className="swiper-slide flex h-full flex-col items-center group swiper-slide-next"

                >
                  <div className="bg-gray-15 text-base-flat relative text-white py-4 px-6 rounded-xl whitespace-nowrap after:content-[''] after:block after:w-3 after:h-3 after:bg-gray-15 after:rotate-45 after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:z-10">
                    June 10, 2024
                  </div>
                  <div className="flex items-center relative mt-5 mb-7 h-[6px] w-full">
                    <div className="h-4 w-4 bg-white border-4 border-secondary-purple rounded-full z-10 absolute left-1/2 -translate-x-1/2" />
                    <div className="absolute top-0 bottom-0 flex justify-end h-[6px] -left-6 -right-6 bg-secondary-purple">
                      <div className="w-1/2 hidden group-last:block bg-secondary-purple" />
                      <div className="w-1/2 grid-cols-[repeat(19,_minmax(0,_1fr))] hidden group-last:grid overflow-hidden">
                        <div className="bg-secondary-purple col-span-2 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-4 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-7 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-10 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[13] h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[16] h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[19] h-[6px] rounded-full" />
                      </div>
                    </div>
                  </div>
                  <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl flex-col bg-white border-gray-EE text-gray-15">
                    <div className="flex h-full gap-4 f p-8 flex-col">
                      <div className="flex flex-col gap-4 flex-grow">

                        <p className="scroll-mt-[120px]  text-xl">
                          Advanced Slice Modeling and Team Spaces in the Page Builder
                          - May 2024 Product Updates
                        </p>

                        <p className="text-gray-50" />
                      </div>

                    </div>
                  </article>
                </div>
                <div
                  className="swiper-slide flex h-full flex-col items-center group"

                >
                  <div className="bg-gray-15 text-base-flat relative text-white py-4 px-6 rounded-xl whitespace-nowrap after:content-[''] after:block after:w-3 after:h-3 after:bg-gray-15 after:rotate-45 after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:z-10">
                    April 30, 2024
                  </div>
                  <div className="flex items-center relative mt-5 mb-7 h-[6px] w-full">
                    <div className="h-4 w-4 bg-white border-4 border-secondary-purple rounded-full z-10 absolute left-1/2 -translate-x-1/2" />
                    <div className="absolute top-0 bottom-0 flex justify-end h-[6px] group-last:left-0 group-last:right-0 rounded-r-full">
                      <div className="w-1/2 hidden group-last:block bg-secondary-purple" />
                      <div className="w-1/2 grid-cols-[repeat(19,_minmax(0,_1fr))] hidden group-last:grid overflow-hidden">
                        <div className="bg-secondary-purple col-span-2 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-4 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-7 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-10 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[13] h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[16] h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[19] h-[6px] rounded-full" />
                      </div>
                    </div>
                  </div>
                  <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl flex-col bg-white border-gray-EE text-gray-15">
                    <div className="flex h-full gap-4 f p-8 flex-col">
                      <div className="flex flex-col gap-4 flex-grow">

                        <p className="scroll-mt-[120px]  text-xl">




                          New Revision History &amp; Media Library Search. What About
                          an AI Copywriter? – April 2024 Product Updates
                        </p>

                        <p className="text-gray-50" />
                      </div>

                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
};


export default PageAcademy;

