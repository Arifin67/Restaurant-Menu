const Sidebar = () => {
  return (
    <>
      {/* sidebar */}
      <div className="hidden md:flex flex-col w-1/5 bg-blue-800 relative">
        <div className="flex items-center justify-center h-16 ">
          <span className="text-white font-bold uppercase">Sidebar</span>
        </div>
        <div className="flex flex-col  overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-blue-800">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Dashboard
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Messages
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Settings
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
