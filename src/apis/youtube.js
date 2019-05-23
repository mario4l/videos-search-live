import axios from "axios";

const KEY = "AIzaSyB-J2T9qXPcDVmzBSmwb9fHtxfkNQUMcak";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
