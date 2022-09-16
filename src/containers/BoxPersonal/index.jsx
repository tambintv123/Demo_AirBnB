import { DivGap } from "containers/InfoRoom/styled";
import { ButtonShowAll } from "containers/ReviewRoom/styled";
import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchData } from "store/actions/updateAvatar";
import {
  Avatar,
  BoxDiv,
  CenterDiv,
  TagH3,
  TagP,
  Title,
  UpdateAvatar,
} from "./styled";

export default function BoxPersonal() {
  const { detailUser } = useSelector((state) => state.detailUserReducer);
  const { updateAvatar } = useSelector((state) => state.updateAvatarReducer);
  const avatar = useRef(0);
  const handleOnChange = (e) => {
    const value = e.target?.files?.[0];
    avatar.current = value;
    console.log(avatar.current);
  };

  const [image, setImage] = useState(`${detailUser.avatar}`);
  const dispatch = useDispatch();

  const handleUpdateAvatar = () => {
    if (avatar.current !== 0) {
      dispatch(actFetchData(`${avatar.current}`));
      setImage(`${avatar.current}`);
    }
  };

  return (
    <BoxDiv>
      <CenterDiv>
        <Avatar src={image} alt="img" />
        <div>
          <UpdateAvatar onClick={handleUpdateAvatar}>
            <label htmlFor="avatar">Cập nhật ảnh</label>
          </UpdateAvatar>
        </div>
        <div>
          <input
            onChange={handleOnChange}
            id="avatar"
            type="file"
            style={{ display: "none" }}
          />
        </div>
      </CenterDiv>
      <div>
        <i
          className="fa-solid fa-shield-halved"
          style={{ fontSize: "30px" }}
        ></i>
      </div>
      <div>
        <Title>Xác minh danh tính</Title>
        <TagP>Xác thực danh tính của bạn với huy hiệu xác minh danh tính</TagP>
      </div>
      <div>
        <ButtonShowAll mb>Nhận huy hiệu</ButtonShowAll>
      </div>
      <hr />
      <div>
        <h3>{detailUser?.name} đã xác nhận</h3>
      </div>
      <DivGap mgb={1} gap={10}>
        <div>
          <i className="fa-solid fa-check"></i>
        </div>
        <div>
          <TagH3>Địa chỉ email</TagH3>
        </div>
      </DivGap>
    </BoxDiv>
  );
}
