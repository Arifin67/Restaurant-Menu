import Card from "../component/card";
import Sidebar from "../component/navbar";
import Table from "../component/table";
import OrderMasuk from "../component/tableOrdermasuk";

const Order = () => {
  return (
    <>
      <div className="flex h-screen w-screen bg-gray-100 ">
        <Sidebar />

        <div className="w-ful h-1/5 p-4 bg-red-200">
          <h1 className="text-2xl font-bold">Welcome to Order!</h1>
          <p className="mt-2 text-gray-600">
            This is an example dashboard using Tailwind CSS.
          </p>
          <div className="flex justify-start gap-2">
            <Card />
          </div>
          <div className="flex gap-32">
            <div className=" w-2/5 h-max flex flex-col  mt-3">
              <h1 className="texl-2xl font-bold text-center">Order Masuk</h1>
              <OrderMasuk />
            </div>
            <div className=" w-2/5 h-max flex flex-col  mt-3">
              <h1 className="texl-2xl font-bold text-center">Order Selesai</h1>
              <OrderMasuk />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Order;
