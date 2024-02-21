import { useTranslation } from "react-i18next";
import { LoaderContainer } from "./LoaderPage.styled";
import Loader from "../../components/Loader/Loader";

const LoaderPage = () => {
  const { t } = useTranslation("translations");
  const title = t("loader");
  return (
    <LoaderContainer>
      <Loader title={title} />
    </LoaderContainer>
  );
};

export default LoaderPage;
