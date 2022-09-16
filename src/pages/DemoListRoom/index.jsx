import React from "react";
import { Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { actFetchData } from "store/actions/listRooms";
import { Link } from "react-router-dom";

export default function DemoListRooms() {
  const data = {
    locationId: "6169521befe193001c0a5b33",
    skip: 0,
    limit: 2,
  };
  const { listRooms } = useSelector((state) => state.listRoomsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchData(data));
  }, []);

  const renderListRooms = () => {
    return listRooms?.map((item) => {
      return (
        <Card
          key={item._id}
          title="Card title"
          bordered={false}
          style={{ width: 300 }}
        >
          <p>{item.name}</p>
          <Link to={`detail-room/${item._id}`}>Chi tiet</Link>
        </Card>
      );
    });
  };
  return <div>{renderListRooms()}</div>;
}
