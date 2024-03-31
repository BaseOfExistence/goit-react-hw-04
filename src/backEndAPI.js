import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/"
export default async function getGallery(searchQuery, page) {
    const data = await axios.get("/search/photos", {
        params: {
            query: searchQuery,
            per_page: 12,
            page
        },
        headers: {
            Authorization: "Client-ID sxG7x-UnCbQk_VbTdN2i7Yarr7o6s42B9sVoS-P1trU",
            "Accept-Version": "v1",
        }
    })
    return data
}