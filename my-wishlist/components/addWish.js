import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showModal } from "../store/utilsAction";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddWish = () => {
  let selector = useSelector(showModal);
  const dispatch = useDispatch();

  const fileUpload = (e) => {
    let type = e.target.files[0].type.split("/")[1];

    if(type === 'png' || type === 'jpg' || type === 'pdf'){
      console.log(type, "e");
    }

  }
  

  const initialValues = {
    _type: "wish",
    title: "",
    category: "",
    description: "",
    attachment: "",
    visibility: ""
  };


  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
  })

  const renderError = (errMessage) => <p className="text-red-500 text-xs normal-case">{ errMessage }</p>;

  const onSubmit = (values) => {
    console.log(values, "values");

    //alert(JSON.stringify(values, null, 2));
  };

  if (selector.payload.utils.status) {
    return (
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          await onSubmit(values);
          resetForm();
        }}
        >
        <Form className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <span
                className="text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none self-end cursor-pointer"
                onClick={() => dispatch(showModal(false))}
              >
                ×
              </span>

              <div className="relative pb-6 px-6 flex-auto">
                <div className="mx-auto max-w-xs">
                  <label className="text-xs text-gray-900 font-medium">
                    Title of your wish <sup className="text-red-500">*</sup>
                  </label>
                  <Field
                    className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-xs focus:outline-none focus:border-gray-400 focus:bg-white mb-2"
                    type="text"
                    name="title"
                    placeholder="Write title here"
                  />
                  <ErrorMessage name="title" render={renderError} />

                  <label className="text-xs text-gray-900 font-medium">
                    Add to a category
                  </label>
                  <Field
                    className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-xs focus:outline-none focus:border-gray-400 focus:bg-white mb-2"
                    type="text"
                    name="category"
                    placeholder="Add or create a category"
                  />

                  <label className="text-xs text-gray-900 font-medium">
                    Description <sup className="text-red-500">*</sup>
                  </label>
                  <Field
                    className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-xs focus:outline-none focus:border-gray-400 focus:bg-white mb-2"
                    type="text"
                    name="description"
                    placeholder="What is your wish?"
                  ></Field>

                  <ErrorMessage name="description" render={renderError} />
                  
                  <label className="text-xs text-gray-900 font-medium">
                    Add an Attachment. ({" "}
                    <span className="text-red-500">jpg</span>,{" "}
                    <span className="text-red-500">png</span> ,{" "}
                    <span className="text-red-500">pdf</span> ).
                  </label>
                  <label className="w-fit flex items-center px-4 py-2 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black mb-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="ml-2 text-xs normal-case">
                      Add an attachment
                    </span>
                    <Field type="file" name="attachment" onChange={fileUpload} className="hidden" />
                  </label>

                  <div className="flex flex-col">
                    <label className="text-xs text-gray-900 font-medium">
                      Who can see this? <sup className="text-red-500">*</sup>
                    </label>
                    <div className="inline-flex">
                      <button 
                        className="w-fit flex items-center px-4 py-1 mr-1 bg-white text-blue rounded text-xs shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue hover:text-black mb-2"
                        name="visibility"
                        >
                        <svg
                          className="w-4 h-4 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        Everyone
                      </button>
                      <button 
                        className="w-fit flex items-center px-4 py-1 bg-white text-blue rounded text-xs shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue hover:text-black mb-2"
                        name="visibility"
                        >
                        <svg
                          className="w-4 h-4 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                          />
                        </svg>
                        Only me
                      </button>
                    </div>
                  </div>

                  <button type="submit" className="mt-5 tracking-wide font-semibold bg-wish-blue text-gray-100 w-full py-2 rounded-lg hover:bg-wish-blue-dark transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                    <span className="ml-3">Send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    );
  }
};

export default AddWish;
