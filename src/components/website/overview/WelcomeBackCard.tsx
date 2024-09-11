import styled from "styled-components";
import Link from "../../common/Link";
import { useRecoilValue } from "recoil";
import { userState } from "../../../state/userState";
import Badge from "../../common/Badge";
import { useNavigate, useParams } from "react-router";
import { ReactComponent as LightbulbIcon } from "../../../assets/Icons/Lightbulb.svg";
import IconDataBox from "../../../components/website/overview/IconDataBox";
import { ReactComponent as PlusIcon } from "../../../assets/Icons/Plus.svg";
import { ReactComponent as ViewsIcon } from "../../../assets/Icons/Views.svg";
import { ReactComponent as ArticleIcon } from "../../../assets/Icons/WebsiteIcons/Blog.svg";
import Button from "../../common/form/Button";
import { useState } from "react";
import React from "react";
import Preloader from "../../common/Preloader";
import useNavigator from "../../../hooks/useNavigator";
import welcomeBG from "../../../assets/images/dnetDradient.png";
import InputStyle from "../../common/form/InputStyle";
import { InputText } from "primereact/inputtext";

const NoticeWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    width: 20px;
    height: 20px;
    path {
      fill: white !important;
    }
  }

  small {
    color: #d1d1d1;

    a {
      color: white;
    }
  }
`;

const CardStyle = styled.div`
  background-color: #6300c1;
  background-blend-mode: soft-light;
  padding: 0 3rem;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  color: white;
  background-image: url(${welcomeBG});
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-family: "Assistant";
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.045rem;
    text-transform: capitalize;
  }

  h2 {
    position: relative;
    font-family: "Assistant";
    font-size: 38px;
    font-style: normal;
    font-weight: bold;
    line-height: 130%; /* 1rem */
    letter-spacing: -0.08rem;
    text-transform: capitalize;
  }
`;

const InputWrapper = styled(InputStyle)`
  margin-top: 32px;
  width: 550px;
`;

const StyledButton = styled(Button)`
  font-weight: bold;

  font-size: 12px;

  /* font-size: 14px; */
  background: var(--primary-purple);
  color: white;

  svg {
    fill: white;
    width: 15px;
    height: 15px;
  }
`;

interface Props {
  isCmsConnected: boolean;
  setSearchTerm: (term: string) => void;
}

const WelcomeBackCard: React.FC<Props> = ({
  isCmsConnected,
  setSearchTerm,
}) => {
  const user = useRecoilValue(userState);
  const { websiteId } = useParams();
  const [showGenerateArticleModal, setShowGenerateArticleModal] =
    useState(false);

  const navigate = useNavigator();

  return (
    <CardStyle>
      <div className="grid">
        <div className="col-12">
          <h1>היי, {user?.firstname} 👋 </h1>
          <h2>איך אפשר לעזור היום? </h2>

          <InputWrapper>
            <InputText
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ביטחון מידע"
            />
          </InputWrapper>
        </div>
      </div>
    </CardStyle>
  );
};

export default WelcomeBackCard;
