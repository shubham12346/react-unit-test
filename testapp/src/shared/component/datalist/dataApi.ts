import axios from "axios";
type dataArrytype = {
    id: number;
    title: string;
    description: string;
  };

export const getDataList = async() :Promise<dataArrytype[]> =>{
    const res = await axios.get('../datalist.json');
    let result = await res.data;
    return result;
}