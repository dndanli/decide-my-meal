import axios from "axios";

async function postFormData(formData: Object) {
  try {
    // console.log("called");
    await axios.post("http://localhost:5000/post_data", {
      formData,
    });
  } catch (error) {
    console.log(error);
  }
}

export default postFormData;
