import React from "react";
import Head from "next/head";
import Image from "next/future/image";

import ProjectSlider from "../components/ProjectSlider";
import Brochure from "../components/Brochure";
import Questions from "../components/Questions";

import { sanityClient, urlFor } from "../sanity";
import { Project, FeaturedProject } from "../typings";

interface Props {
  project: [Project];
  featuredProject: [FeaturedProject];
}

export default function projects({ project, featuredProject }: Props) {
  return (
    <>
      <Head>
        <title>Top Projects in Bahrain - AGCS</title>
        <meta
          name="description"
          content="AMPHITHEATER is the one of the leading Theater in Kingdom of Bahrain. Allied Gulf Construction Services had done some of the projects, tire screen, container conversion, bus toilets, bar counters, rubber fencing, container toilets etc."
        />
      </Head>
      <ProjectSlider />

      {featuredProject.map((featuredProject) => (
        <section key={featuredProject._id} className="bg-white p-3 md:p-0">
          <article className="container max-w-6xl mx-auto flex flex-col md:flex-row md:py-6">
            <div className="">
              <div className="w-full">
                <Image
                  src={urlFor(featuredProject.image).url()!}
                  alt={featuredProject.title}
                  width={1280}
                  height={614}
                />
              </div>
            </div>
            <div className="px-3 md:px-8 py-6 max-w-xl flex flex-col justify-between">
              <div className="">
                <div className="w-max">
                  <h1 className="text-[10px] tracking-wider uppercase text-white bg-sky-500 px-2 py-1 rounded-md">
                    Top Projects in Bahrain
                  </h1>
                </div>
                <h1 className="font-bold text-2xl md:text-5xl py-2">
                  {featuredProject.title}
                </h1>
                <span className="font-light">
                  {featuredProject.description}
                </span>
              </div>
              <div className="flex gap-1">
                <p className="text-[10px] text-white bg-neutral-300 px-2 py-[2px] rounded-md">
                  {featuredProject.tags1}
                </p>
                <p className="text-[10px] text-white bg-neutral-300 px-2 py-[2px] rounded-md">
                  {featuredProject.tags2}
                </p>
                <p className="text-[10px] text-white bg-neutral-300 px-2 py-[2px] rounded-md">
                  {featuredProject.tags3}
                </p>
                <p className="text-[10px] text-white bg-neutral-300 px-2 py-[2px] rounded-md">
                  {featuredProject.tags4}
                </p>
              </div>
            </div>
          </article>
        </section>
      ))}

      <div className="container mx-auto">
        <div className="container max-w-6xl mx-auto py-8 mb-6 px-3">
          <h1 className="text-3xl font-bold text-sky-600 py-5">
            Recent Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4 ">
            {project.map((project) => (
              <section
                key={project._id}
                className="hover:scale-105 transition-all bg-white"
              >
                <article>
                  <div className="">
                    {project.image && (
                      <Image
                        className=""
                        src={urlFor(project.image).url()!}
                        alt=""
                        width={534}
                        height={262}
                      />
                    )}
                  </div>
                  <div className=" px-6 py-3">
                    <h1 className="font-bold text-3xl">{project.title}</h1>
                    <span className="text-sm font-light">
                      {project.description}
                    </span>
                  </div>
                </article>
              </section>
            ))}
          </div>
        </div>
      </div>
      <section className="pb-16">
        <Questions />
      </section>
      <Brochure />
    </>
  );
}
export const getServerSideProps = async () => {
  const query = `*[_type == "projects"] | order(_createdAt asc) {
    _id,
    title,
    image,
    description,
  }`;

  const featuredQuery = `*[_type == "featuredProject"] {
    _id,
    title,
    image,
    description,
  tags1,
  tags2,
  tags3,
  tags4
  }`;

  const project = await sanityClient.fetch(query);
  const featuredProject = await sanityClient.fetch(featuredQuery);

  return {
    props: {
      project,
      featuredProject,
    },
  };
};
