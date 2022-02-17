import axios from "axios";

async function postFormData(formData: Object, foodChosen: string) {
  console.log("in the post form");
  console.log(formData, foodChosen);
  try {
    await axios.post("http://localhost:5000/data", {
      formData,
      foodChosen,
    });
  } catch (error) {
    console.log(error);
  }
}

export default postFormData;
