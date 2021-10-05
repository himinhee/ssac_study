import styled from "styled-components";
import ShowMoreText from "react-show-more-text";

const BorderBox = styled.div`
  border: 1px solid #dbdbdb;
  margin-bottom: 1.2rem;
  background-color: #fff;
  /* width: 100%; */
`;

const WriterWrap = styled.div`
  margin: 1.6rem 1.6rem 1.2rem 1.6rem;
  display: flex;
  cursor: pointer;
`;

const WriterProfileImg = styled.div`
  width: 4rem;
  height: 4rem;
  min-width: 4rem;
  border: 1px solid #dbdbdb;
  background-color: #eee;
  border-radius: 50%;
  margin-right: 1.6rem;
  overflow: hidden;
`;

const WriterInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const WriterProfile = styled.div`
  display: flex;
  font-size: 1.4rem;
  line-height: 1.5;
`;

const WriterName = styled.div`
  color: #333333;
  margin-right: 0.8rem;
  font-weight: bold;
`;

const WriterTitle = styled.div`
  color: #999999;
`;

const WritingTime = styled.div`
  color: #999999;
  font-size: 1.2rem;
`;

const TextWrap = styled.div`
  margin: 0 1.6rem 1.2rem 1.6rem;
  font-size: 1.4rem;
  line-height: 1.8;
`;

const ArticleWrap = styled.div`
  margin: 0 1.6rem 1.2rem 1.6rem;
  padding: 1.6rem;
  background-color: #f7f7f7;
  border-radius: 0.8rem;
  display: flex;
  cursor: pointer;
`;

const ArticleInfo = styled.div`
  margin-right: 1.6rem;
`;

const ArticleTitle = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
  line-height: 1.3;
  color: #333333;
`;

const ArticleSource = styled.div`
  font-size: 1.2rem;
  color: #999999;
`;

const ArticleImgWrap = styled.div`
  width: 8rem;
  height: 8rem;
  margin-left: auto;
  justify-content: center;
  overflow: hidden;
  background-color: #eeeeee;
`;

const ArticleImg = styled.img`
  height: 100%;
  width: auto;
  vertical-align: middle;
  border-style: none;
`;

const RecommendationWrap = styled.div`
  height: 2rem;
  position: relative;
  margin: 0.8rem 1.6rem;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

const RecommenderImgWrap = styled.div`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  position: absolute;
  overflow: hidden;
  margin-right: 0.4rem;
  justify-content: center;
  border-radius: 50%;
  border-color: #ffffff;
  border: 1px solid #dbdbdb;
  background-color: #eeeeee;
`;

const RecommenderImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  border-style: none;
`;

const RecommendationNum = styled.div`
  position: absolute;
  left: 5.28rem;
  font-size: 1.2rem;
  color: #333333;
`;

const BottomIconWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomLeftWrap = styled.div`
  padding: 1.2rem 1.6rem;
  display: flex;
  font-size: 1.2rem;
  cursor: pointer;
`;

const BottomIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 0.4rem;
  overflow: hidden;
  justify-content: center;
`;

const BottomIconImg = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: middle;
  border-style: none;
`;

const BottomRightWrap = styled.div`
  display: flex;
  align-items: center;
`;

const ShareWrap = styled.div`
  position: relative;
  padding: 1.2rem 1.6rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
`;

const ShareCount = styled.div`
  font-weight: 700;
  margin-left: 0.4rem;
`;

const SeparatorBar = styled.div`
  width: 0.1rem;
  height: 1.2rem;
  right: 0px;
  /* position: absolute; */
  background-color: #dbdbdb;
`;

function PostContainer() {
  return (
    <>
      <BorderBox>
        <WriterWrap>
          <WriterProfileImg src="https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png" />
          <WriterInfo>
            <WriterProfile>
              <WriterName>이민희</WriterName>
              <WriterTitle>애견애묘인</WriterTitle>
            </WriterProfile>
            <WritingTime>4시간전</WritingTime>
          </WriterInfo>
        </WriterWrap>
        <TextWrap>
          <ShowMoreText
            lines={5}
            more={<span style={{ color: "#999999" }}>더 보기</span>}
            less={<span style={{ color: "#999999" }}>줄이기</span>}
            className="content-css"
            anchorClass="my-anchor-css-class"
            onClick={ShowMoreText.executeOnClick}
            expanded={false}
            width={0}
            truncatedEndingComponent={"... "}
          >
            필자는 현재 9살된 품종불명프롬보호소종인 고양이의 집사이자, 5개월된
            골든리트리버 미친 갱얼쥐의 집사이다. 물론 둘은 현재 매일매일이
            하악질과 chasing의 연속인 삶을 보내고 있다. 도대체 왜 이런 사태를
            유발했는지에 대해서는 묻지 말길 바란다. 본인은 전혀 의도한 바가 없이
            벌어지고 받아들였어야만 했던 상황이기에 현재는 그저 문제 해결에
            집중중이다. 수많은 Youtube 고양이 전문가들이 개와 고양이의
            합사과정에 대해 가르쳐주고 있다. 이 사태가 벌어지자 마자 급히 공부를
            마치고 격리단계부터 시작하여 하나하나씩 따라해보았다. 모두가
            궁금해할 결과는? 30% 성공 70% 실패라고 할 수 있다.
          </ShowMoreText>
        </TextWrap>
        <ArticleWrap>
          <ArticleInfo>
            <ArticleTitle>합사 대 실패</ArticleTitle>
            <ArticleSource>brunch</ArticleSource>
          </ArticleInfo>
          <ArticleImgWrap>
            <ArticleImg src="https://t1.daumcdn.net/thumb/R1280x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/68t4/image/uC4WUnECeHQNVM9He3eOyP3OgOc.png" />
          </ArticleImgWrap>
        </ArticleWrap>
        <RecommendationWrap>
          <RecommenderImgWrap style={{ left: 0 }}>
            <RecommenderImg src="https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png" />
          </RecommenderImgWrap>
          <RecommenderImgWrap style={{ left: "1.44rem" }}>
            <RecommenderImg src="https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png" />
          </RecommenderImgWrap>
          <RecommenderImgWrap style={{ left: "2.88rem" }}>
            <RecommenderImg src="https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png" />
          </RecommenderImgWrap>
          <RecommendationNum>
            <span style={{ fontWeight: 800 }}>32명</span>이 추천했어요.
          </RecommendationNum>
        </RecommendationWrap>
        <BottomIconWrap>
          <BottomLeftWrap>
            <BottomIcon>
              <BottomIconImg src="https://careerly.co.kr/_next/static/images/icn_bulb_line_teal-400_20-5bd11236c0f7f1e75452e7ea98523505.png" />
            </BottomIcon>
            <p>추천해요</p>
          </BottomLeftWrap>
          <BottomRightWrap>
            <ShareWrap>
              <BottomIcon>
                <BottomIconImg src="https://careerly.co.kr/_next/static/images/icn_share_line_teal-400_20-0e80c7fa3b61aef1833979eaad8df0a1.png" />
              </BottomIcon>
              <p>공유하기</p>
              <ShareCount>127</ShareCount>
            </ShareWrap>
            <SeparatorBar />
            <ShareWrap>
              <BottomIcon>
                <BottomIconImg src="https://careerly.co.kr/_next/static/images/icn_chat_line_teal-400_20-93d3e378c1623aa5fee3da15583f6aa6.png" />
              </BottomIcon>
              <p>댓글</p>
              <ShareCount>27</ShareCount>
            </ShareWrap>
          </BottomRightWrap>
        </BottomIconWrap>
      </BorderBox>
    </>
  );
}

export default PostContainer;
