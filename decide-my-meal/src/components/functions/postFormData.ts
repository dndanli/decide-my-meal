import axios from "axios";

async function postFormData(formData: Object, foodChosen: string) {
  try {
    await axios.post("https://decidemymeal.herokuapp.com/data", {
      formData,
      foodChosen,
    });
  } catch (error) {
    console.log(error);
  }
}

export default postFormData;
