"use client";

import React, { ReactNode } from "react";
import { useSession } from "next-auth/react";
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
  const session = useSession();
  console.log(session);

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
        <li className="text-base font-medium -mt-1 pr-2 ml-2">
          <Link href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses = paths === href ? ` ${activeClasses}` : listClasses;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;

          if (index >= 2) {
            return;
          }

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
                  {itemLink}
                </Link>
              </li>
              {pathNames.length !== index + 1 ? separator : ""}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
