import { IoClose } from "react-icons/io5";

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-[500px]">
        <button
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 "
          onClick={onClose}
        >
          <IoClose className="w-[20px] h-[20px]" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
