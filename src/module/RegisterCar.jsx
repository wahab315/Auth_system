import React, { useRef, useState } from "react";
import { Formik, Form } from "formik";
import {
  Heading,
  InputField,
  Button,
  Navbar,
  ImagePreview,
} from "../components";
import { carRegisterrationForm } from "../data/validation";

const RegisterCar = () => {
  // Image Upload
  const [image, setImage] = useState([]);
  const imageRef = useRef();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      let newImages = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImage((prevImages) => [...prevImages, ...newImages]);
    }
  };

  console.log(image);

  return (
    <>
      <Navbar />
      <Heading>Vehicle Registerration Form</Heading>

      <div className="informationform">
        <div className="informationform-container">
          <Formik
            initialValues={{
              modal: "",
              price: "",
              phone: "",
              images: [],
            }}
            validateOnMount
            validationSchema={carRegisterrationForm}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm({ values: "" });
            }}
          >
            {(formik) => (
              <Form>
                <InputField
                  name="modal"
                  label="Car modal"
                  place="Enter car modal"
                  type="text"
                />
                <InputField
                  name="price"
                  label="Car price"
                  place="Enter car price"
                  type="number"
                />
                <InputField
                  name="phone"
                  label="Phone number"
                  place="Enter phone number"
                  type="text"
                />
                {/* Images Upload  */}
                <center>
                  <div
                    className="upload-button"
                    onClick={() => imageRef.current.click()}
                  >
                    Upload images
                  </div>
                  <p className="notice">Maximum 10 images allowed</p>
                </center>
                <div style={{ display: "none" }}>
                  <input
                    type="file"
                    name="images[]"
                    ref={imageRef}
                    onChange={onImageChange}
                    multiple
                  />
                </div>

                {/* Image Preview Section  */}
                {image && <ImagePreview images={image} />}

                <Button>Submit</Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default RegisterCar;
