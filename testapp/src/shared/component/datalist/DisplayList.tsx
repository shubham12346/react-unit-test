import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getListData } from "./datalist.service";
import { AppDispatch, RootState } from "../../../store";

const DisplayList = () => {
  const [data, setData] = useState<any>([]);
  const dispatch = useDispatch<AppDispatch>();
  const listData = useSelector((state: RootState) => state.listDataReducer);

  useEffect(() => {
    dispatch(getListData());
  }, []);

  useEffect(() => {
    if (listData.datalist) {
      setData(listData.datalist);
    }
  }, [listData]);

  return (
    <>
      <div> Displaying a list of data </div>
      <div className="boxStyle">
        {data &&
          data.map((item: any) => (
            <div className="boxItemStyle" key={item?.id}> {item?.title} </div>
          ))}
      </div>
    </>
  );
};

export default DisplayList;
