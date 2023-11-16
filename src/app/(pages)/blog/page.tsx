import Subscribe from "@/shared/components/Subscribe";

import defaultMetadata from "@/shared/settings/default-metadata";
import type { Metadata } from "next";
import ArticlesByTopic from "./components/ArticlesByTopic";
import BlogGridPresentation from "./components/BlogPresentation";
import ChooseTechStack from "./components/ChooseTechStack";
import LastestContent from "./components/LatestContent";
export const metadata: Metadata = {
  ...defaultMetadata,
};

const PageBlog = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <div
        className="absolute top-0 right-0"
        style={{
          backgroundImage: "url()",
          backgroundSize: "contain",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          height: "500vh",
          width: "100vw",
        }}
      ></div>
      <section className="w-full">
        <BlogGridPresentation />
      </section>
      <LastestContent />
      <ChooseTechStack />

      <ArticlesByTopic />
      <div className="max-w-[768px] lg:max-w-[1280px]  mx-auto my-10 px-8">
        <Subscribe />
      </div>
    </main>
  );
};

export default PageBlog;
