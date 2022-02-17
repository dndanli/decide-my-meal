import axios from "axios";

async function getApiData() {
  try {
    const respose = await axios.get("http://localhost:5000/data");
    return respose.data;
  } catch (error) {
    console.log(error);
  }
}

export default getApiData;