import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import {
  BtnWrapper,
  DownloadInfo,
  DownloadInfoWrapper,
  Img,
  ImgWrapper,
  ThankyouDescription,
  ThankyouTitle,
} from "./Thankyou.styled";
import Button from "../../components/Button/Button";
import { saveAs } from "file-saver";

const Thankyou = () => {
  const { t } = useTranslation("translations");
  const data = t("thankyou", { returnObjects: true });
  const navigate = useNavigate();

  const downloadData = () => {
    const data = [];
    for (let i = 1; i <= 6; i++) {
      const item = localStorage.getItem(i.toString());
      if (item) {
        data.push(JSON.parse(item));
      }
    }
    const csv = data.map((row) => Object.values(row).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "data.csv");
  };

  return (
    <>
      <ThankyouTitle>{data.title}</ThankyouTitle>
      <ThankyouDescription>{data.description ?? null}</ThankyouDescription>
      <ImgWrapper>
        <Img src="/src/assets/checkmark.png" alt="checkmark" />
      </ImgWrapper>
      <DownloadInfoWrapper onClick={downloadData}>
        <BsDownload size={28} />
        <DownloadInfo>{data.download}</DownloadInfo>
      </DownloadInfoWrapper>
      <BtnWrapper>
        <Button
          button={data.button}
          type="button"
          onClick={() => navigate("/")}
        />
      </BtnWrapper>
    </>
  );
};

export default Thankyou;
