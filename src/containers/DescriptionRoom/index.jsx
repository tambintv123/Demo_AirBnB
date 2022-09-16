import React from "react";
import { DescriptionDiv, StyledP } from "./styled";
import { useSelector } from "react-redux";
import { ButtonShowAll } from "containers/ReviewRoom/styled";
import { useTranslation } from "react-i18next";

export default function DescriptionRoom() {
  const { t, i18n } = useTranslation();
  const { detailRoom } = useSelector((state) => state.detailRoomReducer);

  const handleTranslate = () => {
    i18n.changeLanguage("en");
  };
  return (
    <DescriptionDiv>
      <ButtonShowAll onClick={handleTranslate}>
        Dịch sang tiếng anh
      </ButtonShowAll>
      <div>
        <StyledP>{t(detailRoom.description)}</StyledP>
      </div>
    </DescriptionDiv>
  );
}
