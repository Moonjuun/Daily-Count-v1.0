import React, { useEffect } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { useScript } from "../../hooks";

// 제목과 버튼을 감싸는 컨테이너
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 버튼을 배치시키는 컨테이너
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 48px);
  grid-column-gap: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

// Style을 적용한 버튼 컴포넌트 추가
const URLShareButton = styled.button`
  width: 48px;
  height: 48px;
  color: white;
  border-radius: 24px;
  border: 0px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  background-color: #7362ff;
  &:hover {
    background-color: #a99fee;
  }
  padding: 0px;
`;

// 카카오버튼
const KakaoButtonWrapper = styled.div`
  display: flex;
`;

const KakaoShareButton = styled.a`
  cursor: pointer;
`;

const KakaoIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-bottom: 20px;
`;

const Footer = () => {
  // window 객체에서 현재 url 가져오기
  const currentUrl = window.location.href;

  // kakao SDK import하기
  const status = useScript(
    "https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
  );

  // kakao sdk 초기화하기
  // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init("d3bc5655e50ada258ccb3361b6cb0e40");
      }
    }
  }, [status]);

  const handleKakaoButton = () => {
    window.Kakao.Share.sendScrap({
      requestUrl: currentUrl,
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <p> © 2023 cmoonjun11@gmail.com</p>
      <FlexContainer>
        <h5>공유하기</h5>
        <GridContainer>
          <FacebookShareButton url={currentUrl}>
            <FacebookIcon
              size={48}
              round={true}
              borderRadius={24}
            ></FacebookIcon>
          </FacebookShareButton>
          <TwitterShareButton url={currentUrl}>
            <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
          </TwitterShareButton>
          <CopyToClipboard text={currentUrl}>
            <URLShareButton>URL</URLShareButton>
          </CopyToClipboard>{" "}
          <KakaoButtonWrapper>
            <KakaoShareButton onClick={handleKakaoButton}>
              <KakaoIcon
                src={process.env.PUBLIC_URL + `assets/kakaoIcon.png`}
              ></KakaoIcon>
            </KakaoShareButton>
          </KakaoButtonWrapper>
        </GridContainer>
      </FlexContainer>
    </div>
  );
};

export default Footer;
