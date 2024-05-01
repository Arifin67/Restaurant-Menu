import Navbar from "../component/navbar";

const CmsHome = () => {
  return (
    <>
      <div className="flex h-screen w-screen bg-gray-100">
        <Navbar />
        <div className="w-ful p-4">
          <h1 className="text-2xl font-bold">Welcome to my dashboard!</h1>
          <p className="mt-2 text-gray-600">
            This is an example dashboard using Tailwind CSS.
          </p>
        </div>
      </div>
    </>
  );
};
export default CmsHome;
