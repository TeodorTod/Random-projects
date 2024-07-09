import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singleServiceLoader = async ({ params }) => {
    try {
      const res = await apiRequest("/get-service/" + params.id);
      return res.service;
    } catch (error) {
      console.error("Failed to fetch the service", error);
      throw error;
    }
  };