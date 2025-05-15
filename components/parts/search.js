export default function Search() {
  return (
    <div>
      <form method="post">
        <div className="flex flex-col w-full gap-4 md:gap-0 md:flex-row">
          <div className="relative flex-1 ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
              <SearchIcon className="w-5 h-5 " />
            </div>

            <input
              type="text"
              name="keyword"
              placeholder="Job Keyword"
              className="w-full px-4 py-3 pl-12 border border-black rounded-full lg:w-full md:rounded-none md:rounded-l-full focus:outline-none md:py-5 placeholder:text-black focus-visible:bg-gray-50"
            />
          </div>
          <div className="relative flex-1 ">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3.5 pointer-events-none">
              <LocationIcon className="w-6 h-6 " />
            </div>

            <input
              type="text"
              name="keyword"
              placeholder="Location"
              className="w-full px-4 py-3 pl-12 border border-black rounded-full lg:w-full md:rounded-none md:border-l-transparent focus:outline-none md:py-5 placeholder:text-black focus-visible:bg-gray-50"
            />
          </div>
          <button
            type="submit"
            className="py-3 pl-16 pr-20 text-lg font-bold bg-yellow-200 border border-black rounded-full md:rounded-none md:rounded-r-full md:border-l-0">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export function SearchIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 21 21" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 16.8C13.3078 16.8 16.8 13.3078 16.8 9C16.8 4.69218 13.3078 1.2 9 1.2C4.69218 1.2 1.2 4.69218 1.2 9C1.2 13.3078 4.69218 16.8 9 16.8ZM9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.0605 14.5917C15.2861 14.3489 15.6657 14.335 15.9085 14.5606L20.7926 19.0996C21.0353 19.3252 21.0492 19.7048 20.8236 19.9475C20.598 20.1903 20.2184 20.2042 19.9756 19.9786L15.0916 15.4396C14.8488 15.2141 14.8349 14.8344 15.0605 14.5917Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LocationIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 28" {...props}>
      <path
        d="M14 2.8a8.96 8.96 0 00-8.96 8.96 8.881 8.881 0 002.33 6.026l6.205 7.218a.56.56 0 00.85 0l6.206-7.218a8.881 8.881 0 002.33-6.026A8.96 8.96 0 0014 2.8zm5.78 14.258L14 23.783l-5.78-6.72a7.84 7.84 0 1111.56 0v-.005z"
        fill="currentColor"
      />
      <path
        d="M14 7.84a3.92 3.92 0 100 7.84 3.92 3.92 0 000-7.84zm0 6.72a2.8 2.8 0 110-5.6 2.8 2.8 0 010 5.6z"
        fill="currentColor"
      />
    </svg>
  );
}
