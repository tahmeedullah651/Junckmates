import React, { useEffect, useState } from "react";
import IconButton from "../components/Button/IconButton";
import { useFormik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import {
  addDumpsterData,
  deleteDumpsterData,
  editDumpsterData,
  fetchDumpsterData,
} from "../redux/slices/dumpsterSlice";
import Loader from "../components/Loading/Loader";
import InputWrapper from "../components/Input/InputWrapper";
import InputSmall from "../components/Input/InputSmall";
import { dumpsterSchema } from "../Schema";
import { editJunkData } from "../redux/slices/junkSlice";
import { errorToast, successToast } from "../Utils/Toast";

const Dumpster = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateDataId, setDataId] = useState("");
  const dispatch = useDispatch();
  const dumpsterData = useSelector((state) => state.dumpster.data);
  const isLoading = useSelector((state) => state.dumpster.isLoading);
  const isError = useSelector((state) => state.dumpster.isError);

  // const { isLoading: dumpsterLoading, isError: dumpsterError } = dumpsterData;
  // const { isLoading, isError } = addDumpsterStatus;

  const {
    values,
    handleBlur,
    handleSubmit,
    handleChange,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      dumpsterSize: "",
      loadSize: "",
    },
    validationSchema: dumpsterSchema,
    onSubmit: (values, { resetForm }) => {
      if (isUpdate) {
        console.log(
          "payload frontend",
          values.dumpsterSize,
          updateDataId,
          values.loadSize
        );
        dispatch(
          editDumpsterData({
            dumpsterSize: values.dumpsterSize,
            id: updateDataId,
          })
        )
          .then((res) => {
            setIsUpdate(false);
            values.dumpsterSize = "";
            values.loadSize = "";
          })
          .catch((err) => {
            console.log("error ===>", err);
          });
      } else {
        dispatch(addDumpsterData(values))
          .then(() => {
            resetForm();
            successToast("Data add Successfully!");
          })
          .catch((err) => {
            console.log("Error adding dumpster data:", err);
            errorToast("Something went wrong!");
          });
      }
    },
  });

  useEffect(() => {
    dispatch(fetchDumpsterData());
  }, [dispatch]);
  const handledelete = (id) => {
    console.log("click me", id);
    dispatch(deleteDumpsterData(id))
      .then((res) => {
        console.log("Response delete Data==>", res);
      })
      .catch((err) => {
        console.log("error delete ===>", err);
      });
  };

  const handleEdit = (dataItem) => {
    setIsUpdate(true);
    values.dumpsterSize = dataItem.dumpsterSize;
    values.loadSize = dataItem.loadSize;
    setDataId(dataItem._id);
  };
  return (
    <div className="w-full h-screen my-3 rounded-lg px-4 ">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div>Error: {isError}</div>
      ) : (
        <>
          <div className="pb-3 flex gap-3 w-full items-center">
            <form onSubmit={handleSubmit}>
              <div className="w-full ml-4 flex justify-start gap-3 flex-col md:flex-row">
                <div>
                  {" "}
                  <InputSmall
                    label="Add Dumpster size"
                    id="dumpsterSize"
                    name="dumpsterSize"
                    autoComplete="off"
                    type="number"
                    placeholder="Add Dumpster Size"
                    value={values.dumpsterSize}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    touch={touched.dumpsterSize}
                    error={errors.dumpsterSize}
                    customClasses={"!w-[250px]"}
                  />
                </div>
                <div>
                  <InputSmall
                    label="Add load size"
                    id="loadSize"
                    name="loadSize"
                    autoComplete="off"
                    type="text"
                    placeholder="Add load Size"
                    value={values.loadSize}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    touch={touched.loadSize}
                    error={errors.loadSize}
                    disable={isUpdate}
                    customClasses={"!w-[250px]"}
                    // customClasses={"lg:!w-[250px] md:!w-[150px]"}
                  />
                </div>
                <div className="pt-6">
                  <IconButton
                    text={isUpdate ? "Update Size" : "Add Size"}
                    type="submit"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="mt-7 bg-emerald-100 rounded-md mb-3 dashboardTableWrapper">
            <table className="w-full mr-6 min-w-[520px] border-collapse !overflow-x-auto ">
              <thead>
                <tr>
                  <th className="border text-left font-semibold py-5 px-2 pl-8">
                    Sr No.
                  </th>
                  <th className="border text-left font-semibold py-5 px-2">
                    Dumpster Sizes
                  </th>
                  <th className="border text-left font-semibold py-5 px-2">
                    Load Sizes
                  </th>
                  <th className="border text-left font-semibold py-5 px-2 pl-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {dumpsterData.map((item, index) => (
                  <tr key={index}>
                    <td className="border pl-8 text-left px-2 text-sm py-2 capitalize">
                      {index + 1}
                    </td>
                    <td className="text-left px-1 text-sm py-2 capitalize">
                      {item?.dumpsterSize}
                    </td>
                    <td className="text-left px-1 text-sm py-2 capitalize">
                      {item?.loadSize}
                    </td>
                    <td className="border text-sm py-2 capitalize pl-3">
                      <div className="max-w-[160px]">
                        <button
                          className="bg-emerald-400 px-4 py-2 rounded-md"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="border-2 border-emerald-400 px-4 py-2 rounded-md text-emerald-400 ml-2"
                          onClick={() => handledelete(item._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Dumpster;

// import React, { useEffect } from "react";
// import IconButton from "../components/Button/IconButton";
// import { useFormik } from "formik";

// import { useDispatch, useSelector } from "react-redux";
// import { fetchDumpsterData } from "../redux/slices/dumpsterSlice";
// import Loader from "../components/Loading/Loader";
// import InputWrapper from "../components/Input/InputWrapper";
// import InputSmall from "../components/Input/InputSmall";
// import { dumpsterSchema } from "../Schema";
// import { addDumpsterData } from "../redux/slices/addDumpsterSlice";

// const Dumpster = () => {
//   const dispatch = useDispatch();
//   const details = useSelector((state) => state.dumpster);
//   const { isLoading, isError, data } = details;

//   const { values, handleBlur, handleSubmit, handleChange, touched, errors } =
//     useFormik({
//       initialValues: {
//         dumpsterSize: "",
//         loadSize: "",
//       },
//       validationSchema: dumpsterSchema,
//       onSubmit: (values) => {
//         dispatch(addDumpsterData(values))
//           .then((res) => {
//             console.log("Response Add Data==>", res);
//           })
//           .catch((err) => {
//             console.log("error ===>", err);
//           });
//       },
//     });

//   useEffect(() => {
//     dispatch(fetchDumpsterData());
//   }, [dispatch]);

//   return (
//     <div className="w-full h-screen my-3 rounded-lg px-4 ">
//       {isLoading ? (
//         <Loader />
//       ) : isError ? (
//         <div>{isError}</div>
//       ) : (
//         <>
//           <div className="pb-3 flex gap-3 w-full items-center">
//             <form onSubmit={handleSubmit}>
//               <InputWrapper>
//                 <InputSmall
//                   label="Add Dumpster size"
//                   id="dumpsterSize"
//                   name="dumpsterSize"
//                   autoComplete="off"
//                   type="number"
//                   placeholder="Add Dumpster Size"
//                   value={values.dumpsterSize}
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   touch={touched.dumpsterSize}
//                   error={errors.dumpsterSize}
//                 />
//                 <InputSmall
//                   label="Add load size"
//                   id="loadSize"
//                   name="loadSize"
//                   autoComplete="off"
//                   type="text"
//                   placeholder="Add load Size"
//                   value={values.loadSize}
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   touch={touched.loadSize}
//                   error={errors.loadSize}
//                 />
//               </InputWrapper>
//               <span className="pt-5">
//                 <IconButton text="Add Size" type="submit" />
//               </span>
//             </form>
//           </div>
//           <div className="mt-7 bg-emerald-100 rounded-md mb-3 dashboardTableWrapper">
//             <table className="w-full min-w-[520px]  border-collapse !overflow-x-auto ">
//               <thead>
//                 <tr>
//                   <th className="border text-left font-semibold py-5 px-2 pl-8">
//                     Sr No.
//                   </th>
//                   <th className="border text-left font-semibold py-5 px-2">
//                     Dumpster Sizes
//                   </th>
//                   <th className="border text-left font-semibold py-5 px-2">
//                     Load Sizes
//                   </th>
//                   <th className="border text-left font-semibold py-5 px-2 pl-3">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data &&
//                   data.map((item, index) => (
//                     <tr key={index}>
//                       <td className="border pl-8 text-left px-2 text-sm py-2 capitalize">
//                         {index + 1}
//                       </td>
//                       <td className="text-left px-1 text-sm py-2 capitalize">
//                         {item.dumpsterSize}
//                       </td>
//                       <td className="text-left px-1 text-sm py-2 capitalize">
//                         {item.loadSize}
//                       </td>
//                       <td className="border text-sm py-2 capitalize pl-3">
//                         <div className="max-w-[160px]">
//                           <button className="bg-emerald-400  px-4 py-2 rounded-md">
//                             Edit
//                           </button>
//                           <button className="border-2 border-emerald-400  px-4 py-2 rounded-md text-emerald-400 ml-2">
//                             Delete
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Dumpster;
