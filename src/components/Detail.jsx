import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (id) {
        try {
          const docRef = doc(db, "movies", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setDetailData(docSnap.data());
          } else {
            console.log("No such document in Firebase!");
          }
        } catch (error) {
          console.error("Error fetching document:", error);
        }
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>
      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <img src="/images/group-icon.png" alt="" />
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  top: 80px;
  overflow-x: hidden;
  position: relative;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  top: 80px;
  position: fixed;
  left: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;

  img {
    height: 100vh;
    width: 100vw;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  -webkit-box-pack: start;
  margin: 0 auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  flex-wrap: row nowrap;
  align-items: center;
  min-height: 56px;
  margin: 24px 0;
`;

const Player = styled.button`
  font-size: 18px;
  margin: 0 22px 0 0;
  padding: 0 24px 0 18px;
  height: 56px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  letter-spacing: 1.5px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  background: rgb(249, 249, 249);
  color: rgb(0, 0, 0);

  img {
    width: 32px;
    margin-right: 5px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0 12px 0 8px;
    font-size: 14px;
    margin: 0 10px 0 0;

    img {
      width: 25px;
      margin-right: 2px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.5);
  border: 1.5px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  border: 1.5px solid white;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 44px
    height: 44px
  }

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 1.5px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      width: 1.5px;
      transform: translate(-8px) rotate(0deg);
    }
  }
    
`;

const GroupWatch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  cursor: pointer;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1.5px solid white;

  @media (max-width: 768px) {
        width: 44px
        height: 44px
    }
    
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 20px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Description = styled.div`
  font-size: 22px;
  line-height: 1.4;
  padding: 16px 0;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export default Detail;
