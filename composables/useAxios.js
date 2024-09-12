import axios from "axios";

export default function useAxios() {
  const rtConfig = useRuntimeConfig();

  let api = axios.create({
    baseUrl: rtConfig.public.API_URL,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization" : "Bearer " + localStorage.getrItem("token"),

    },
    withCredentials: true,
    withXSRFToken: true,
  });

  async function csrf() {

    return await api.get("/sanctum/csrf-cookie")

}

  return {api, csrf };
}
