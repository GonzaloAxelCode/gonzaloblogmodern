import FloatLaptop from "@/shared/3DComponents/FloatLaptop";
import defaultMetadata from "@/shared/settings/default-metadata";
import type { Metadata } from "next";
import TitlePresentation from "./components/TitlePresentation";
export const metadata: Metadata = {
  ...defaultMetadata,
};

export default function Home() {
  return (
    <main>
      <div className="mx-auto relative  px-1 sm:px-4 w-full flex justify-center">
        <svg
          className="absolute top-9 left-[23%] h-8 transform -rotate-12"
          viewBox="0 0 244 243"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M240.74 62.55a5.623 5.623 0 0 0-2.36-1.67 7.29 7.29 0 0 0-2.7-1.43 12.07 12.07 0 0 0-13.81 6 11.54 11.54 0 0 0-.66 8.74 298.468 298.468 0 0 0-62.32 40.89 519.522 519.522 0 0 1-21-92.64 8.106 8.106 0 0 0-.72-2.47c.23-.2.46-.4.68-.62 5.31-5.44 3.46-14.51-2.7-18.36a7.5 7.5 0 0 0-8.53.77 3.021 3.021 0 0 0-.32.09 11.325 11.325 0 0 0-7.11 7.06 10.25 10.25 0 0 0 2.32 10c.51.57 1.08 1.083 1.7 1.53a706.029 706.029 0 0 0-46.9 98.16 247.303 247.303 0 0 1-49.76-32.85c1.37-3 1.534-6.412.46-9.53-1.59-4.63-6-8.14-11-7.89a13.08 13.08 0 0 1-4.52-.12c-8.14.71-13 8.6-11.08 16.34A13.25 13.25 0 0 0 12.9 94.4l21.18 79.67c2.43 9.14 16.63 5.27 14.19-3.91l-16.38-61.53A258.06 258.06 0 0 0 76.63 135c4.57 2.1 9 .35 10.8-4.4a679.583 679.583 0 0 1 39.12-86 535.947 535.947 0 0 0 21.77 85.25 7.447 7.447 0 0 0 9.002 5.073 7.448 7.448 0 0 0 3.288-1.833 284.916 284.916 0 0 1 56.09-40.06 783.367 783.367 0 0 0-20.27 82.15A285.825 285.825 0 0 0 56.82 179c-6.51 1.83-7.49 13 0 14.18 21.33 3.48 43 7 63.76 13.17a505.4 505.4 0 0 0-110 20.43c-7.85 2.39-6.49 14.4 2 14.44l193 1c9.47.05 9.48-14.66 0-14.71l-131.47-.69a491.019 491.019 0 0 1 82.26-7.13c7 0 10.44-10.36 3.71-13.7-20-9.92-41.2-15.94-62.83-20.45a270.142 270.142 0 0 1 103.07 5.63c3.59.91 8.33-1.15 9-5.13a783.243 783.243 0 0 1 26.34-104.27 11.67 11.67 0 0 0 5.75-4 12.001 12.001 0 0 0 2.48-7.31 12.26 12.26 0 0 0-3.15-7.91ZM132.45 9a1.573 1.573 0 0 1-.2-.2c.13.14.22.2.2.2Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="absolute top-10 right-[22%] h-8"
          viewBox="0 0 601 350"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m248.82 246.78.78.57c.328.247.68.462 1.05.64a42.79 42.79 0 0 0 3.07 13.15 43.873 43.873 0 0 0 34.15 25.87c.454.06.912.09 1.37.09a9.684 9.684 0 0 0 6.87-2.69 7.618 7.618 0 0 0 1.89-3.19 144.28 144.28 0 0 0 35.76 28.54c.05 5 .44 10.59 2.93 15.84 3.76 7.91 11.83 13.23 20.07 13.23a18.754 18.754 0 0 0 15-7.53c.464-.596.894-1.217 1.29-1.86 8.91 6.66 43.09 19.6 69.26 19.6 14 0 24.42-3.53 30.94-10.48 5.87-6.25 8.48-15.21 7.75-26.61-.61-9.58-3.71-19-6.72-28.14-.89-2.7-1.8-5.49-2.62-8.18-4-13.24-8.11-26.59-12.17-39.66-8.37-27-17-54.18-25.77-80.94-9.22-28.27-19-57.34-28.94-86.44a7.222 7.222 0 0 0 1.14-2.37c3-11.34 1.07-23-5.59-33.88a59.838 59.838 0 0 0-26-22.73C360.14 3.14 342.95 0 321.81 0c-7 0-14.39.33-22.73 1-50.54 4.18-99.7 23.7-138.41 55-19.62 15.86-30.2 33.34-31.43 52-1.34 20.23 8.28 41.34 28.59 62.73 27.31 28.77 59.68 52.81 90.99 76.05ZM224.44 33.36a238.832 238.832 0 0 1 63-17.23 235.916 235.916 0 0 1 30.55-2.14 146.107 146.107 0 0 1 34.88 3.87c13.27 3.27 23.45 9.17 30.25 17.52a35.35 35.35 0 0 1 8.39 22.36 387.736 387.736 0 0 0-126.29 21.48 8.044 8.044 0 0 0-4.53 4.39 6.356 6.356 0 0 0 0 5.23 6.232 6.232 0 0 0 6 3.57c1.333-.02 2.655-.26 3.91-.71A365 365 0 0 1 389 71.81c6.75 19.67 13.62 40 20.42 60.48a33.92 33.92 0 0 0-19.82 14 38.69 38.69 0 0 0-6.18 29.36c2.19 10.93 9 20.46 19.83 27.56 8.79 5.79 20.18 9.95 32.08 11.73.29 0 .6.07.9.09l.85 2.67c7.59 24.07 15.13 48.5 22.4 72.63.51 1.69 1.08 3.43 1.66 5.22 2.67 8.14 5.68 17.37 3.91 25.35-1.2 5.42-4.75 8.05-10.84 8.05a27.192 27.192 0 0 1-6.72-.93c-9.91-2.53-19.13-8.28-28.05-13.84l-4.12-2.55c-11.36-7-22.82-14.7-34.06-23a6.254 6.254 0 0 0-3.71-1.11 9.223 9.223 0 0 0-7.31 3.53c-3 4.49-4.95 9.48-6.38 16.17-.33 1.51-.59 3.07-.85 4.58a43.793 43.793 0 0 1-2.63 10.38c-.75 1.71-1.68 2.58-2.76 2.58a5.996 5.996 0 0 1-3.64-2c-4.81-4.56-4.77-11.73-4.73-18.67v-1.4c0-15.4-4.36-28.1-13.85-40-9-11.3-20.43-19.77-33.32-28.9a6.321 6.321 0 0 0-3.71-1.09c-3.16 0-7.13 1.92-8.28 5.15a126.26 126.26 0 0 0-7 32.24 30.475 30.475 0 0 1-16.61-21.44 68.288 68.288 0 0 1-.56-14 83.878 83.878 0 0 0-.28-12.65 51.776 51.776 0 0 0-7.3-20.38c-6.34-10.3-15.1-18.63-23.58-26.7-2-1.9-4-3.79-5.94-5.71a152.53 152.53 0 0 1-28.65-38.15 159.133 159.133 0 0 1-9.41-22.08c-2.48-7.23-5.24-14.07-11.86-18.3a22.73 22.73 0 0 0-12.46-3.46c-7.08 0-15 2.91-21.25 7.8l-.83.68c4.24-9.05 12.26-18.58 23.65-28a232.082 232.082 0 0 1 56.43-34.34Zm175.37 142c-2.58-6.77-1.46-16.67 2.59-23a13.804 13.804 0 0 1 10.66-6.83l.72-.08c5.84 17.74 11.71 35.85 17.46 53.89-21.5-5.72-28.89-17.37-31.4-23.98h-.03Zm6.09 148.49 2.13 1.31a214.627 214.627 0 0 0 20.06 11.38 73.098 73.098 0 0 1-49.1-23.91 7.997 7.997 0 0 0-.79-.75c.31-1.88.65-3.79 1.1-5.63 8.99 6.37 17.93 12.26 26.63 17.6h-.03Zm-103.84-62.54a6.088 6.088 0 0 0-2.19-1.83 100.94 100.94 0 0 1 1.46-7.11c9.34 7 19.3 15.45 25.71 26a46.854 46.854 0 0 1 5.31 12.36 134.398 134.398 0 0 1-30.26-29.42h-.03Zm-149-154.94c3.26-3.06 7.16-4.81 10.71-4.81 4.32 0 7.71 2.43 9.82 7 1.55 3.39 2.82 7 4.06 10.52 1.24 3.52 2.47 7 4 10.48a156.219 156.219 0 0 0 10.91 20.18A179.881 179.881 0 0 0 220.44 183l3.38 3.2c8.56 8.07 17.41 16.42 22.58 26.87 2.38 4.79 3.29 9.74 3.64 15.41-23.49-17.52-46.27-35-67.1-54.88l-.87-.82c-11-10.47-22.33-21.3-29.43-34.39-10.52-19.44-2.33-29.42.42-32.02Z"
            className=""
          />
          <path
            d="M283.44 186.06a45.858 45.858 0 0 0 30.77 12.42 42.5 42.5 0 0 0 23.95-7.51 10.785 10.785 0 0 0 1.35-.98c14.88-11.58 19.72-29.44 12.33-45.51-6.89-15-21.73-26.1-37.8-28.35a41.051 41.051 0 0 0-5.55-.38c-17.18 0-33 10.61-38.52 25.81-6.08 16.72 2.37 34.4 13.47 44.5Zm46.27-5.84a22.911 22.911 0 0 1-13.45 4.27c-8.65 0-17.79-4.53-24.45-12.11-6.21-7.06-9.18-15.64-8.16-23.55 1.39-10.7 11.35-19.09 22.68-19.09h1c10.43.49 21.61 7.51 27.82 17.46 7.57 12.16 5.45 24.81-5.47 33.02h.03ZM400.81 294.82c1.279.178 2.569.264 3.86.26 9.57 0 19.7-4.82 26.43-12.6 5.95-6.86 8.59-15.08 7.44-23.16-2.29-14.82-9.42-24.18-20.08-26.36a25.89 25.89 0 0 0-5.09-.5c-8.12 0-16.92 3.71-24.15 10.2-9.12 8.18-14 18.31-13.33 27.79.71 10.39 10.22 22.35 24.92 24.37Zm-2-42.22c4.17-3.92 8.67-6.07 12.69-6.07h.88c7.73.63 10.13 12.36 10.68 15.92a17.304 17.304 0 0 1-9.562 16.825 17.3 17.3 0 0 1-6.568 1.765 13.01 13.01 0 0 1-2.42-.23c-6-1.16-12.69-6.54-13-13.2-.4-6.99 4.93-12.83 7.26-14.99l.04-.02ZM531.52 98.62a59.22 59.22 0 0 1 35.7 44.36 6.223 6.223 0 0 0 6.49 5.4 9.921 9.921 0 0 0 6.95-3 7.305 7.305 0 0 0 2.1-5.41 56.512 56.512 0 0 1 6.49-29.64 53.614 53.614 0 0 1 4-6c4.38-6 9.35-12.87 6.26-20.86-1.65-4.27-5-7-8.17-9.58l-.72-.58a59.896 59.896 0 0 1-9.59-9.82 55.099 55.099 0 0 1-10.73-27.12c-.38-3.34-2.93-5.49-6.48-5.49a9.91 9.91 0 0 0-1.94.2 9.217 9.217 0 0 0-6.62 3.54 6.007 6.007 0 0 0-.93 5.09c5 18.93-4.1 38.94-21.23 46.56-2.45 1.09-5.05 4.4-5 7.59a5.174 5.174 0 0 0 3.42 4.76Zm19-7.24a57.306 57.306 0 0 0 16.08-20.89 67.35 67.35 0 0 0 6.69 8.13 48.902 48.902 0 0 0 4.85 4.15 32.66 32.66 0 0 1 5.69 5.21c1.79 2.29.6 4.34-2.35 8.15-.5.65-1 1.28-1.43 1.9a69.35 69.35 0 0 0-7.48 13.32c-.17.4-.33.81-.49 1.23a70.535 70.535 0 0 0-21.58-21.24l.02.04ZM6.88 119.87a8.993 8.993 0 0 0 3.56-.78c3.88-1.68 8-3.32 12.23-4.87l5.59 24.31a6.66 6.66 0 0 0 6.9 5.19 9.579 9.579 0 0 0 7.31-3.33 6.184 6.184 0 0 0 1.25-5.33l-5.94-25.83c5.95-1.75 11.94-3.27 17.81-4.52a7.913 7.913 0 0 0 6.5-8.39 6 6 0 0 0-6.32-5.48 9.69 9.69 0 0 0-2 .22c-6.24 1.33-12.63 2.95-19 4.84l-4.15-18.06a6.66 6.66 0 0 0-6.91-5.18 9.599 9.599 0 0 0-7.31 3.32 6.2 6.2 0 0 0-1.25 5.33l4.49 19.54c-5.08 1.84-10 3.81-14.8 5.87-3.5 1.51-5.32 4.59-4.65 7.83a6.75 6.75 0 0 0 6.69 5.32Z"
            className=""
          />
        </svg>
        <svg
          className="absolute h-8 left-[53%] top-10"
          viewBox="0 0 1039 260"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1030.69.04 824.86 19.27c-4.42.42-6.19 3.9-5.8 7.27a6.296 6.296 0 0 0-.8 4.38l1.89 12.72a7.453 7.453 0 0 0-1.22 1.72c-12 23.51-16 49.83-20.27 75.66l-.08.13a5.18 5.18 0 0 0-.59 3.53 6.835 6.835 0 0 0-.21 1c-.46 4.06 2.47 6.87 6.23 7.82l83.6 21a5.474 5.474 0 0 0 3.21-.21l10.95 13.56c2.85 3.54 8.42 3.78 11.23.24l124.34-156.85c3.81-4.81-.57-11.78-6.65-11.2Zm-160.9 104.6-51 9.6 19.5-33.79c.27-.482.456-1.006.55-1.55L961 41.74a1229.87 1229.87 0 0 0-91.21 62.9Zm-37.07-72.17 160.15-15-155.33 47.24c-1.613-10.733-3.22-21.48-4.82-32.24Zm-8.65 37.69.66 4.47c.039.28.099.558.18.83l-4.71 8.16c1.13-4.58 2.4-9.03 3.87-13.46Zm6.8 55.95 32.28-6.09 14.35 17.79-46.63-11.7Zm76.31 26.36a31540.184 31540.184 0 0 0-29.27-36.26 1221.856 1221.856 0 0 1 123.36-82.36l-94.09 118.62ZM145.504 165.206c2.082 3.043 7.44 4.505 10.449 1.824a294.743 294.743 0 0 1 139.255-69.28c25.661-5.004 52.425-7.084 78.489-4.513 3.689.366 7.356.918 10.989 1.653-11.927 13.083-17.992 30.444-9.449 48.277 5.182 10.808 14.18 19.886 25.956 23.087a30.197 30.197 0 0 0 31.281-10.483c7.708-9.801 9.44-23.173 6.733-35.135-2.993-13.115-11.295-23.04-22.397-30.046a69.743 69.743 0 0 1 9.175-3.225c26.917-7.366 56.421-1.45 81.975 8.124 29.598 11.094 56.49 27.956 84.106 42.971 48.128 26.164 108.4 48.163 160.909 20.277a92.401 92.401 0 0 0 15.528-10.379c7.401-6.126-1.185-18.436-8.67-12.294-21.136 17.49-48.961 22.56-75.753 19.777-33.412-3.481-63.718-18.748-92.708-34.822-29.967-16.63-59.417-34.344-92.448-44.304-28.75-8.672-62.019-11.768-90.152.825a74.587 74.587 0 0 0-9.559 5.171c-10.727-3.26-22.14-4.491-33.207-5.037a302.992 302.992 0 0 0-43.721.95 309.941 309.941 0 0 0-158.616 62.464 264.228 264.228 0 0 0-16.365 13.626c-3.024 2.762-4.283 6.882-1.8 10.492Zm279.651-29.512c-1.295 8.525-7.144 16.955-16.658 16.67-8.601-.264-15.893-7.638-19.402-14.94-7.275-15.175.331-28.333 12.086-37.58 14.901 6.249 26.747 17.346 23.929 35.83l.045.02Z"
            className=""
          />
        </svg>
        <div>
          <p className=" text-center  uppercase  px-10 mb-1">
            ⚡️ The Ultimate ⚡️
          </p>
          <h1 className="text-center text-5xl mt-10 mb-5  title-limiter leading-title">
            El equilibrio entre forma y función en
            <span className="inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#5c3de6]  to-[#fe97dc]">
              {" "}
              desarrollo fullstack.
            </span>
          </h1>
          <div className="w-full flex justify-center sm:flex-row flex-col sm:gap-4 items-center">
            <button className="px-7 py-4 rounded-full bg-zinc-100 mt-2  text-zinc-800 sm:w-auto w-full font-medium">
              Join Our Community
            </button>
            <button className="px-7 py-4 flex items-center justify-center rounded-full bg-zinc-800 mt-2 sm:w-auto w-full  text-zinc-100 font-medium">
              <svg
                className="w-6 h-6 -ml-2 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  className=""
                />
              </svg>
              <span className="">Account Login</span>
            </button>
          </div>
        </div>
      </div>
      <section id="features" className="h-auto  py-10 sm:py-12 md:py-20">
        <div className="px-10 md:px-0">
          <h2 className="mb-4 text-xl md:text-2xl font-extrabold jakarta text-left sm:text-center md:text-4xl lg:text-6xl md:mb-6">
            🤘 Super Cool Features 👇
          </h2>
          <p className="max-w-xl mx-auto text-left text-gray-400 sm:text-center text-sm md:text-lg">
            Tails has some cool features that allow you to build some awesome
            Tailwind Websites. Check out a few of them below.
          </p>
        </div>
      </section>
      <section className="h-auto ">
        <div className="relative max-w-6xl md:px-5 md:border-transparent border-t border-gray-800 md:pb-20 flex md:flex-row flex-col md:space-x-5 w-full h-full items-center justify-center mx-auto">
          <div className="bg-gradient-to-br from-[#292930] to-[#090910] border border-[#292930] flex md:flex-row flex-col md:rounded-xl overflow-hidden">
            <div className="relative h-full w-full flex flex-col items-start justify-center rounded-md">
              <div className="relative w-full h-full p-10 lg:p-16 flex flex-col items-start justify-center">
                <h2 className="text-3xl md:text-5xl mb-8 text-gray-200 font-black jakarta">
                  Projects
                </h2>
                <p className="text-gray-400 mb-8 md:text-xl">
                  Easily organize sites and pages into separate projects. Save
                  your projects, edit projects, create unique URL's for each
                  project, and more!
                </p>
                <a
                  href="/tails/app"
                  className="inline-flex justify-center items-center w-full px-6 py-4 mb-6 text- font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-700 sm:mb-0 sm:w-auto hover:bg-indigo-600 rounded-full"
                >
                  <svg
                    className="w-5 h-5 mr-2 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" stroke="none">
                      <path
                        d="M6 12l5.485-5.485A12 12 0 0 1 19.971 3H21v1.029a12 12 0 0 1-3.515 8.486L12 18m-6-6l6 6m-6-6L3 9l.828-.828A4 4 0 0 1 6.657 7H11l-5 5zm6 6l3 3 .828-.828A4 4 0 0 0 17 17.343V13l-5 5zm-4.5-4.5l-2.379 2.379A7.242 7.242 0 0 0 3 21a7.243 7.243 0 0 0 5.121-2.121L10.5 16.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.778 7.916a.5.5 0 1 1-.556-.832.5.5 0 0 1 .556.832z"
                        fill="#212121"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                  <span className="">Ver mi Proyectos</span>
                </a>
              </div>
            </div>
            <div className="flex h-full w-full justify-end items-end overflow-hidden relative">
              <img
                src="https://cdn.devdojo.com/images/june2022/projects.png"
                className="mt-10 w-full h-auto object-contain object-left-top ml-12 rounded-tl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
