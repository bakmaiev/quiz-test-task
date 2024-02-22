import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import {
  BtnWrapper,
  DownloadInfo,
  DownloadInfoBtn,
  Img,
  ImgWrapper,
  ThankyouContainer,
  ThankyouDescription,
  ThankyouTitle,
} from "./Thankyou.styled";
import Button from "../../components/Button/Button";
import checkmark from "../../assets/checkmark.png";
import { saveAs } from "file-saver";

const Thankyou = () => {
  const { t } = useTranslation("translations");
  const data = t("thankyou", { returnObjects: true });
  const { totalCards } = data;
  const navigate = useNavigate();

  const downloadData = () => {
    const data = [];
    for (let i = 1; i <= totalCards; i++) {
      const item = localStorage.getItem(i.toString());
      if (item) {
        data.push(JSON.parse(item));
      }
    }
    const headerRow = "order,title,type,answer";
    const csvData = [headerRow];
    data.forEach((row) => {
      const csvRow = Object.values(row)
        .map((value) => value)
        .join(",");
      csvData.push(csvRow);
    });
    const csv = csvData.join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "data.csv");
  };

  return (
    <ThankyouContainer>
      <ThankyouTitle>{data.title}</ThankyouTitle>
      <ThankyouDescription>{data.description ?? null}</ThankyouDescription>
      <ImgWrapper>
        <Img src={checkmark} alt="checkmark" />
      </ImgWrapper>
      <DownloadInfoBtn onClick={downloadData}>
        <BsDownload size={28} />
        <DownloadInfo>{data.download}</DownloadInfo>
      </DownloadInfoBtn>
      <BtnWrapper>
        <Button
          button={data.button}
          type="button"
          onClick={() => navigate("/")}
        />
      </BtnWrapper>
    </ThankyouContainer>
  );
};

export default Thankyou;
