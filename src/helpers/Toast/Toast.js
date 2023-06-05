import { toast } from "react-toastify";


export const SuccessToast = (text) => {
 return toast.success(text, {
position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
theme: "light",
});
};

export const FailedToast = (text) => {
 return toast.error(text, {
position: "top-center",
autoClose: 4000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
theme: "light",
});
};
