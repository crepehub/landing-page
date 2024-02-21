import React from "react";

interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: PaginationProps) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="gap-[4px] flex flex-row justify-center mx-auto">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={
              page == currentPage
                ? " w-[6px] h-[6px] rounded-full bg-mainWhite"
                : "w-[6px] h-[6px] rounded-full bg-mainWhite/[0.4]"
            }
          ></button>
        );
      })}
    </div>
  );
};

export default Pagination;
