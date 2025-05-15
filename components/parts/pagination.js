import cx from "clsx";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";

export default function Pagination() {
  return (
    <nav aria-label="Page Navigation">
      <div className="flex items-center gap-4">
        <PageNav>
          <ChevronLeftIcon className="w-4 h-4" /> <span>Prev</span>
        </PageNav>
        <ul className="flex items-center gap-1">
          <PageNumber page="1" active />
          <PageNumber page="2" />
          <PageNumber page="3" />
          <PageNumber page="4" />
        </ul>
        <PageNav>
          <span>Next</span> <ChevronRightIcon className="w-4 h-4" />
        </PageNav>
      </div>
    </nav>
  );
}

const PageNumber = ({ active, page }) => {
  return (
    <li>
      <a
        href="#"
        className={cx(
          " w-10 h-10 rounded-full flex items-center justify-center text-gray-600 font-medium hover:bg-offgreen-light",
          active &&
            "bg-emerald-300 hover:bg-emerald-400 text-gray-900"
        )}>
        {page}
      </a>
    </li>
  );
};

const PageNav = ({ children }) => {
  return (
    <div>
      <a
        href="#"
        className="flex items-center justify-center gap-1 font-medium text-gray-500 rounded-full hover:text-gray-800">
        {children}
      </a>
    </div>
  );
};
