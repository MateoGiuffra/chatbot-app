import axios from "axios";
import { URI } from "./constants";

async function call(prompt) {
  try {
    const response = await axios.post(`${URI}/sendMessage`, {
      prompt: prompt,
    });
    return response.data.answerIA;
  } catch (error) {
    console.error("Something was wrong: ", error);
    return "Error al obtener respuesta de la IA";
  }
}

export default call;

