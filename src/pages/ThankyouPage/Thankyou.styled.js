import styled from "styled-components";

export const ThankyouContainer = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ThankyouTitle = styled.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 36px;
  margin-bottom: 4px;
  text-align: center;
`;

export const ThankyouDescription = styled.p`
  font-weight: 600;
  font-size: 17px;
  text-align: center;
  margin-bottom: 56px;
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: green;
  border-radius: 50%;
  position: relative;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 56px;
`;

export const Img = styled.img`
  width: 120px;
`;

export const DownloadInfoBtn = styled.div`
  max-width: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 0 auto 30px;
  cursor: pointer;
`;

export const DownloadInfo = styled.span`
  font-weight: 600;
  font-size: 17px;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
