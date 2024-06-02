"use client";

import React, { ReactNode } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const Breadcrumb = ({
  homeElement,
  separator,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  //   console.log(paths);
  //   console.log("ini PathName : ", pathNames);

  return (
    <div
      className={clsx("bg-blue-100 md:px-10", paths === "/" ? "hidden" : "")}
    >
      <ul
        className={clsx(
          "bg-blue-100 flex flex-wrap w-full pt-12",
          "md:mx-auto md:max-w-screen-xl"
        )}
      >
        {/* <li className={listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </li> */}
        {/* {pathNames.length > 0 && separator} */}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses = paths === href ? ` ${activeClasses}` : listClasses;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link
                  href={
                    href === "/notes/edit"
                      ? "/notes"
                      : href === "/notes/details"
                      ? `/notes`
                      : href
                  }
                >
                  {itemLink == "Notes" ? `🏠 ${itemLink}` : itemLink}
                </Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
