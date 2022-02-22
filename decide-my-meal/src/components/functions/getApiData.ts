import axios from "axios";

async function getApiData() {
  try {
    const respose = await axios.get("https://decidemymeal.herokuapp.com/data");
    return respose.data;
  } catch (error) {
    console.log(error);
  }
}

export default getApiData;
