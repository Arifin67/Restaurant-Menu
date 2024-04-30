import Button from "./button";

const InputRegister = () => {
  return (
    <>
      <label className="input input-bordered flex items-center gap-2">
        Name:
        <input type="text" className="grow" placeholder="Daisy" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Email:
        <input type="text" className="grow" placeholder="daisy@site.com" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Phone Number:
        <input type="text" className="grow" placeholder="08..." />
      </label>
      <div className="justify-center flex mt-3">
        <Button />
      </div>
    </>
  );
};
export default InputRegister;
