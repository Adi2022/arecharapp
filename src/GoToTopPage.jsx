import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const GoToTopPage = () => {
    const [isVisible, setIsVisible] = useState(false);
  const handleButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <Wrapper>
         {isVisible && (
      <div className="btn-top" onClick={handleButton}>
        <FaArrowUp className="top-btn--icon" />
      </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .btn-top {
    font-size: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    color: #fff;
    background-color: #009090;
    
    border-radius: 100%;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
        animation: GoToTopPage 1.2s linear infinite alternate-reverse;
      }
      @keyframes GoToTopPage {
        0% {
          transform: translateY(-0.5rem);
        }
        100% {
          transform: translateY(1rem);
        }
      }
    }
    @media (max-width:300px) {
      .btn-top {
        right: 0;
        left: 40%;
      }
    }
  }
`;

export default GoToTopPage;