import { TagImg } from "containers/ImageRoom/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { actFetchData } from "store/actions/detailRoom";
import styles from "./Slider.module.css";

export default function Slider() {
  const { detailRoom } = useSelector((state) => state.detailRoomReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(actFetchData(id));
  }, []);

  return (
    <div className={styles.container}>
      <Slide easing="ease">
        <div className={styles.slide}>
          <div>
            <TagImg src={detailRoom?.image} alt="" />
          </div>
        </div>
        <div className={styles.slide}>
          <div>
            <TagImg src={detailRoom?.image} alt="" />
          </div>
        </div>
        <div className={styles.slide}>
          <div>
            <TagImg src={detailRoom?.image} alt="" />
          </div>
        </div>
        <div className={styles.slide}>
          <div>
            <TagImg src={detailRoom?.image} alt="" />
          </div>
        </div>
        <div className={styles.slide}>
          <div>
            <TagImg src={detailRoom?.image} alt="" />
          </div>
        </div>
      </Slide>
    </div>
  );
}
