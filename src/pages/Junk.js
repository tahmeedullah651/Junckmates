import React, { useEffect, useState } from "react";
import IconButton from "../components/Button/IconButton";
import {
  addJunkData,
  deleteJunkData,
  editJunkData,
  fetchJunkData,
} from "../redux/slices/junkSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loading/Loader";
import { junkSchema } from "../Schema";
import { useFormik } from "formik";
import InputSmall from "../components/Input/InputSmall";
import InputWrapper from "../components/Input/InputWrapper";
let Once = true;

const initialState = {
  name: "",
};

const Junk = () => {
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateDataId, setDataId] = useState("");
  const data = useSelector((state) => state.junk.data);
  const isError = useSelector((state) => state.junk.isError);
  const isLoading = useSelector((state) => state.junk.isLoading);
  // const { isLoading, isError, data } = details;
  // console.log("khdsh", details.data[_id]);
  // const categoryIds = details.data.map((item) => item._id);
  // console.log("data Junk===>", categoryIds);
  const { values, handleBlur, handleSubmit, handleChange, touched, errors } =
    useFormik({
      initialValues: initialState,
      validationSchema: junkSchema,
      onSubmit: (values, action) => {
        if (isUpdate) {
          dispatch(editJunkData({ name: values.name, id: updateDataId }))
            .then((res) => {
              setIsUpdate(false);
              values.name = "";
            })
            .catch((err) => {
              console.log("error ===>", err);
            });
        } else {
          dispatch(addJunkData(values))
            .then((res) => {
              console.log("Response Add Data==>", res);
              action.resetForm();
            })
            .catch((err) => {
              console.log("error ===>", err);
            });
        }
      },
    });

  useEffect(() => {
    if (Once) {
      Once = false;
      if (!data) {
        dispatch(fetchJunkData());
      }
    }
  }, []);
  const handledelete = (id) => {
    console.log("click me", id);
    dispatch(deleteJunkData(id))
      .then((res) => {
        console.log("Response delete Data==>", res);
      })
      .catch((err) => {
        console.log("error delete ===>", err);
      });
  };
  const handleEdit = (dataItem) => {
    setIsUpdate(true);
    values.name = dataItem.name;
    setDataId(dataItem._id);
  };
  return (
    <div className="w-full h-screen my-3 rounded-lg px-4 ">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div>Error:{isError}</div>
      ) : (
        <>
          <div className="pb-3 flex gap-3 w-full items-center">
            <form onSubmit={handleSubmit}>
              <div className="flex ml-4 items-start gap-2 flex-col sm:flex-row sm:ml-0">
                <div>
                  {" "}
                  <InputSmall
                    label="Add Category"
                    id="name"
                    name="name"
                    autoComplete="off"
                    type="text"
                    placeholder="Add Category"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    touch={touched.name}
                    error={errors.name}
                  />
                </div>

                <div className="sm:pt-[25px]">
                  <IconButton
                    text={isUpdate ? "Update" : "Add"}
                    type="submit"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="mt-7 bg-emerald-100 rounded-md mb-3 dashboardTableWrapper">
            <table className="w-full min-w-[520px] border-collapse !overflow-x-auto mr-6 sm:mr-0">
              <thead>
                {/* <th className="text-[--gray] font-[600] text-[16px] py-5 px-2 border">
          S/N
        </th> */}
                <tr className="mb-4 pb-4 text-zinc-500 font-satoshi font-medium text-[16px] ">
                  <th className="border text-left font-[600] text-[16px] py-5 px-2 pl-8">
                    Name of category
                  </th>
                  <th className="border text-left font-[600] text-[16px] py-5 px-2 ">
                    Number of posts
                  </th>
                  <th className=" border text-left font-[600] text-[16px] py-5 px-2 pl-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data && data.length
                  ? data.map((item, index) => {
                      return (
                        <tr key={index} className="w-full">
                          <td className="border pl-8 text-left px-2 text-sm py-2 capitalize">
                            {item?.name}
                          </td>

                          <td className=" border text-left px-1 text-sm py-2 pl-8 capitalize ">
                            {item?.posts || 0}
                          </td>

                          <td className="border  text-sm py-2 capitalize pl-3">
                            <div className="max-w-[160px]">
                              <button
                                className="bg-emerald-400  px-4 py-2 rounded-md"
                                onClick={() => handleEdit(item)}
                              >
                                Edit
                              </button>
                              <button
                                className="ml-3 border-2 border-emerald-400  px-4 py-2 rounded-md text-emerald-400"
                                onClick={() => handledelete(item._id)}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Junk;
