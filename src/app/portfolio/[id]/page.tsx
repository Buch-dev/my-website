"use client";

import RegularButton from "@/app/components/RegularButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import CTA from "@/app/components/CTA";

const portfolioData = [
  {
    id: "1",
    title: "Scoot",
    description:
      "This project required me to build a fully multipage responsive website to the designs provided. I used Next.js, along with Tailwind CSS for styling. The project also required me to implement animations and transitions using GSAP",
    projectBackground:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    mobileHeroImageUrl: "/images/portfolio/scoot-mobile.webp",
    tabletHeroImageUrl: "/images/portfolio/scoot-tablet.webp",
    desktopHeroImageUrl: "/images/portfolio/scoot-desktop.webp",
    mobilePreviewImageUrl:
      "/images/portfolio/scoot-mobile.webp",
    tabletPreviewImageUrl:
      "/images/portfolio/scoot-tablet.webp",
    desktopPreviewImageUrl:
      "/images/portfolio/scoot-desktop.webp",
    mobilePreviewImageUrl2:
      "/images/portfolio/scoot-mobile.webp",
    tabletPreviewImageUrl2:
      "/images/portfolio/scoot-tablet.webp",
    desktopPreviewImageUrl2:
      "/images/portfolio/scoot-desktop.webp",
  },
  {
    id: "2",
    title: "Manage",
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
    tools: "Interaction Design / Front End Development HTML / CSS / JS",
    projectBackground:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    mobileHeroImageUrl: "/images/detail/mobile/image-manage-hero@2x.jpg",
    tabletHeroImageUrl: "/images/detail/tablet/image-manage-hero@2x.jpg",
    desktopHeroImageUrl: "/images/detail/desktop/image-manage-hero@2x.jpg",
    mobilePreviewImageUrl:
      "/images/detail/mobile/image-manage-preview-1@2x.jpg",
    tabletPreviewImageUrl:
      "/images/detail/tablet/image-manage-preview-1@2x.jpg",
    desktopPreviewImageUrl:
      "/images/detail/desktop/image-manage-preview-1@2x.jpg",
    mobilePreviewImageUrl2:
      "/images/detail/mobile/image-manage-preview-2@2x.jpg",
    tabletPreviewImageUrl2:
      "/images/detail/tablet/image-manage-preview-2@2x.jpg",
    desktopPreviewImageUrl2:
      "/images/detail/desktop/image-manage-preview-2@2x.jpg",
  },
  {
    id: "3",
    title: "Bookmark",
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
    tools: "Interaction Design / Front End Development HTML / CSS / JS",
    projectBackground:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    mobileHeroImageUrl: "/images/detail/mobile/image-bookmark-hero@2x.jpg",
    tabletHeroImageUrl: "/images/detail/tablet/image-bookmark-hero@2x.jpg",
    desktopHeroImageUrl: "/images/detail/desktop/image-bookmark-hero@2x.jpg",
    mobilePreviewImageUrl:
      "/images/detail/mobile/image-bookmark-preview-1@2x.jpg",
    tabletPreviewImageUrl:
      "/images/detail/tablet/image-bookmark-preview-1@2x.jpg",
    desktopPreviewImageUrl:
      "/images/detail/desktop/image-bookmark-preview-1@2x.jpg",
    mobilePreviewImageUrl2:
      "/images/detail/mobile/image-bookmark-preview-2@2x.jpg",
    tabletPreviewImageUrl2:
      "/images/detail/tablet/image-bookmark-preview-2@2x.jpg",
    desktopPreviewImageUrl2:
      "/images/detail/desktop/image-bookmark-preview-2@2x.jpg",
  },
  {
    id: "4",
    title: "Insure",
    description:
      "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
    tools: "Interaction Design / Front End Development HTML / CSS / JS",
    projectBackground:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    mobileHeroImageUrl: "/images/detail/mobile/image-insure-hero@2x.jpg",
    tabletHeroImageUrl: "/images/detail/tablet/image-insure-hero@2x.jpg",
    desktopHeroImageUrl: "/images/detail/desktop/image-insure-hero@2x.jpg",
    mobilePreviewImageUrl:
      "/images/detail/mobile/image-insure-preview-1@2x.jpg",
    tabletPreviewImageUrl:
      "/images/detail/tablet/image-insure-preview-1@2x.jpg",
    desktopPreviewImageUrl:
      "/images/detail/desktop/image-insure-preview-1@2x.jpg",
    mobilePreviewImageUrl2:
      "/images/detail/mobile/image-insure-preview-2@2x.jpg",
    tabletPreviewImageUrl2:
      "/images/detail/tablet/image-insure-preview-2@2x.jpg",
    desktopPreviewImageUrl2:
      "/images/detail/desktop/image-insure-preview-2@2x.jpg",
  },
  {
    id: "5",
    title: "Fylo",
    description:
      "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
    tools: "Interaction Design / Front End Development HTML / CSS / JS / React / Nextjs / GSAP",
    projectBackground:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    mobileHeroImageUrl: "/images/detail/mobile/image-fylo-hero@2x.jpg",
    tabletHeroImageUrl: "/images/detail/tablet/image-fylo-hero@2x.jpg",
    desktopHeroImageUrl: "/images/detail/desktop/image-fylo-hero@2x.jpg",
    mobilePreviewImageUrl: "/images/detail/mobile/image-fylo-preview-1@2x.jpg",
    tabletPreviewImageUrl: "/images/detail/tablet/image-fylo-preview-1@2x.jpg",
    desktopPreviewImageUrl:
      "/images/detail/desktop/image-fylo-preview-1@2x.jpg",
    mobilePreviewImageUrl2: "/images/detail/mobile/image-fylo-preview-2@2x.jpg",
    tabletPreviewImageUrl2: "/images/detail/tablet/image-fylo-preview-2@2x.jpg",
    desktopPreviewImageUrl2:
      "/images/detail/desktop/image-fylo-preview-2@2x.jpg",
  },
];

const ProjectDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const [projectId, setProjectId] = React.useState<string | null>(null);
  const router = useRouter();

  React.useEffect(() => {
    params.then((resolvedParams) => {
      setProjectId(resolvedParams.id);
    });
  }, [params]);

  if (!projectId) {
    return <p>Loading...</p>;
  }

  // Find the project by id
  const projectIndex = portfolioData.findIndex((item) => item.id === projectId);
  const project = portfolioData[projectIndex];

  if (!project) {
    return <p>Project not found</p>;
  }

  const handleNavigation = (direction: "next" | "prev") => {
    if (direction === "next" && projectIndex < portfolioData.length - 1) {
      const nextProject = portfolioData[projectIndex + 1];
      router.push(`/portfolio/${nextProject.id}`);
    } else if (direction === "prev" && projectIndex > 0) {
      const prevProject = portfolioData[projectIndex - 1];
      router.push(`/portfolio/${prevProject.id}`);
    }
  };

  return (
    <div>
      <div className="px-8 lg:px-[165px]">
        {/* Project Details */}
        <Image
          src={project.mobileHeroImageUrl}
          alt={project.title}
          layout="responsive"
          className="md:hidden"
          width={311} // Replace with the original width of the image
          height={140} // Replace with the original height of the image
        />
        <Image
          src={project.tabletHeroImageUrl}
          alt={project.title}
          layout="responsive"
          className="hidden md:block lg:hidden mt-[71px]"
          width={311} // Replace with the original width of the image
          height={140} // Replace with the original height of the image
        />
        <Image
          src={project.desktopHeroImageUrl}
          alt={project.title}
          layout="responsive"
          className="hidden lg:block mt-[71px]"
          width={311} // Replace with the original width of the image
          height={140} // Replace with the original height of the image
        />

        <div className="flex flex-col lg:flex-row lg:mt-[105px] lg:gap-[125px]">
          <div className="flex flex-col md:flex-row border border-[#33323D]/15 border-r-0 border-l-0 h-fit py-6 mt-10 lg:mt-0 lg:w-[350px] lg:py-12">
            <div className="flex flex-col md:w-1/2 gap-6 md:gap-4 lg:w-full">
              <h2 className="heading text-[#33323D] text-[40px] font-bold">
                {project.title}
              </h2>
              <p className="text-[15px] text-[#33323D] leading-[30px] md:hidden lg:block">
                {project.description}
              </p>
              <p className="text-[#5FB4A2] text-[13px] font-bold leading-[30px]">
                Interaction Design / Front End Development <br /> HTML / CSS /
                JS
              </p>

              <Link href={"/"}>
                <RegularButton
                  className="px-8 py-[17px] border border-[#33323D] text-[#33323D] text-xs leading-normal tracking-[2px] w-fit hover:bg-[#33323D] hover:text-[#FAFAFA] transition-colors"
                  type="button"
                >VISIT WEBSITE</RegularButton>
              </Link>
            </div>

            <div className="w-1/2 hidden md:block lg:hidden">
              <p className="text-[15px] text-[#33323D]/80 leading-[30px]">
                {project.description}
              </p>
            </div>
          </div>

          <div className=" lg:w-3/5">
            <div className="mt-12 flex flex-col gap-7 lg:mt-0">
              <h2 className="text-[#33323D] heading text-[32px] leading-[42px] tracking-[-0.286px]">
                Project Background
              </h2>
              <p className="text-[#33323D]/80 text-[15px] leading-[30px]">
                This project was a front-end challenge from Frontend Mentor.
                It’s a platform that enables you to practice building websites
                to a design and project brief. Each challenge includes mobile
                and desktop designs to show how the website should look at
                different screen sizes. Creating these projects has helped me
                refine my workflow and solve real-world coding problems. I’ve
                learned something new with each project, helping me to improve
                and adapt my style.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-[#33323D] heading text-[32px] leading-[42px] tracking-[-0.286px]">
                Static Previews
              </h2>
              <div className="mt-10 flex flex-col gap-8">
                <Image
                  className="md:hidden"
                  src={project.mobilePreviewImageUrl}
                  alt={project.title}
                  layout="responsive"
                  width={313} // Replace with the original width of the image
                  height={197} // Replace with the original height of the image
                />
                <Image
                  className="hidden md:block lg:hidden"
                  src={project.tabletPreviewImageUrl}
                  alt={project.title}
                  layout="responsive"
                  width={689} // Replace with the original width of the image
                  height={434} // Replace with the original height of the image
                />
                <Image
                  className="hidden lg:block"
                  src={project.desktopPreviewImageUrl}
                  alt={project.title}
                  layout="responsive"
                  width={689} // Replace with the original width of the image
                  height={434} // Replace with the original height of the image
                />
                <Image
                  className="md:hidden"
                  src={project.mobilePreviewImageUrl2}
                  alt={project.title}
                  layout="responsive"
                  width={313} // Replace with the original width of the image
                  height={197} // Replace with the original height of the image
                />
                <Image
                  className="hidden md:block lg:hidden"
                  src={project.tabletPreviewImageUrl2}
                  alt={project.title}
                  layout="responsive"
                  width={689} // Replace with the original width of the image
                  height={434} // Replace with the original height of the image
                />
                <Image
                  className="hidden lg:block"
                  src={project.desktopPreviewImageUrl2}
                  alt={project.title}
                  layout="responsive"
                  width={689} // Replace with the original width of the image
                  height={434} // Replace with the original height of the image
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-16 flex justify-between border border-[#33323D]/15 border-r-0 border-l-0 ">
          <button
            type="button"
            onClick={() => handleNavigation("prev")}
            disabled={projectIndex === 0}
            className={`flex flex-col items-start justify-center py-6 w-full ${
              projectIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "text-[#33323D]"
            }`}
          >
            <Image
              src={"/images/icons/arrow-left.svg"}
              alt={"arrow left"}
              width={8} // Replace with the original width of the image
              height={16} // Replace with the original height of the image
            />
            <h2 className="mt-4 text-[32px] heading leading-9 tracking-[-0.286px]">
              {projectIndex > 0 ? portfolioData[projectIndex - 1].title : "Nil"}
            </h2>
            <p className="text-[#33323D]/50 leading-[30px]">Previous Project</p>
          </button>
          <button
            type="button"
            onClick={() => handleNavigation("next")}
            disabled={projectIndex === portfolioData.length - 1}
            className={`border border-[#33323D]/15 border-r-0 border-t-0 border-b-0 flex flex-col items-end justify-center py-6 w-full ${
              projectIndex === portfolioData.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "text-[#33323D]"
            }`}
          >
            <Image
              src={"/images/icons/arrow-right.svg"}
              alt={"arrow left"}
              className="mr-0"
              width={8} // Replace with the original width of the image
              height={16} // Replace with the original height of the image
            />
            <h2 className="mt-4 text-[32px] heading leading-9 tracking-[-0.286px]">
              {projectIndex < portfolioData.length - 1
                ? portfolioData[projectIndex + 1].title
                : "Nil"}
            </h2>
            <p className="text-[#33323D]/50 leading-[30px]">Next Project</p>
          </button>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default ProjectDetails;
