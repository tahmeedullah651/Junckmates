// import React from "react";
// import logo from "../Assets/images/logo.png";
// import { useSelector } from "react-redux";
// import Loader from "../components/Loading/Loader";

// const FormLayout = ({ header, description, onSubmit, onCancel, children }) => {
//   const loading = useSelector((state) => state.loader.loading);

//   return (
//     <div className="w-screen min-h-screen flex justify-center items-center flex-col pt-4 pb-8 px-0 sm:px-4">
//       <div className="w-full py-4 flex justify-center items-center flex-col">
//         <div className="w-[100px] h-[40px] sm:w-[110px] sm:h-[40px] md:w-[130px] md:h-[50px]">
//           <img className="w-full h-full" src={logo} alt="NesMas logo" />
//         </div>
//       </div>
//       <div className="w-full sm:w-[90%] md:w-[70%] bg-white rounded-3xl sm:rounded-lg p-4 px-8 ">
//         {loading ? (
//           <Loader />
//         ) : (
//           <div className="w-full">
//             <div className="w-full py-2">
//               <h1 className="text-[--blue] poppin-700 text-[22px] sm:text-[26px] md:text-[30px]">
//                 {header}
//               </h1>
//             </div>
//             <div>
//               <p className="poppin-500 text-[14px] sm:text-[16px]">
//                 {description}
//               </p>
//             </div>
//             {children}
//             <div className="w-full flex justify-center items-center gap-5 text-center mt-5">
//               <button
//                 onClick={onCancel}
//                 type="button"
//                 className="px-10 py-2  border border-[--dark-blue] text-[--dark-blue] text-[16px] rounded-full poppin-500 transition-all ease-in-out duration-300 hover:text-white hover:bg-[--dark-blue]"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={onSubmit}
//                 type="submit"
//                 className="px-10 py-2 bg-[--dark-blue] border border-[--dark-blue] text-white text-[16px] rounded-full poppin-500 transition-all ease-in-out duration-300 hover:bg-white hover:text-[--dark-blue]"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FormLayout;
