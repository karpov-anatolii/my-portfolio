const Alert = ({ type, text }) => {
  return (
    <div className="fixed top-[50%] translate-y-[-50%] left-0 right-0 flex justify-center items-center">
      <div
        className={`p-2 ${
          type === "danger" ? "bg-red-800/80" : "bg-purple-600/80"
        } w-[70%] max-w-[350px] items-center text-white  leading-normal rounded-lg flex lg:inline-flex`}
        role="alert"
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } uppercase px-2 py-1 text-xs text-white font-semibold mr-3`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-white ">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
