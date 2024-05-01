import Card from "../component/card";
import Sidebar from "../component/navbar";
import Table from "../component/table";

const CmsHome = () => {
  return (
    <>
      <div className="flex h-screen w-screen bg-gray-100 ">
        <Sidebar />

        <div className="w-ful h-1/5 p-4 bg-red-200">
          <h1 className="text-2xl font-bold">Welcome to my dashboard!</h1>
          <p className="mt-2 text-gray-600">
            This is an example dashboard using Tailwind CSS.
          </p>
          <div className="flex justify-start gap-2">
            <Card />
          </div>
          <div className="p-5">
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};
export default CmsHome;
