import axios from "axios";
import { NewOfficePost } from "../../type/agentTypes";

export const postNewOfficeData = async (newOfficeData: NewOfficePost) => {
  try {
    const response = await axios.post("/api/agents/offices", newOfficeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
