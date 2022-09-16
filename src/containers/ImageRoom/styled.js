import styled from "styled-components";
import { devices } from "themes/commonStyles";

const GridDiv = styled.div`
  margin: auto;
  width: 100%;
  height: 80vh;
  display: grid;
  grid-auto-columns: 1fr;
  gap: 1em;
  grid-template-areas:
    "one one one two two  three three"
    "one one one four four  five five";
  .grid-item:nth-child(1) {
    grid-area: one;
  }
  .grid-item:nth-child(2) {
    grid-area: two;
  }
  .grid-item:nth-child(3) {
    grid-area: three;
  }
  .grid-item:nth-child(4) {
    grid-area: four;
  }
  .grid-item:nth-child(5) {
    grid-area: five;
  }
 
  @media ${devices.mobile} {
    grid-template-areas: 
    'one'
    'two'
    'three'
    'four'
    'five';
  }
  @media ${devices.tablet} {
    grid-template-areas: 
    'one one two two two'
    'three three three five five'
    'four four four four four'
  }
  @media ${devices.laptop} {
    grid-template-areas: 
    "one one one two two  three three"
    "one one one four four  five five";
    }
  }
`;

const GridItem = styled.div`
  text-align: center;
  border-radius: 10px;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => (props.mgb ? props.mgb * 1 : "10")}px;
  border-bottom: ${(props) => (props.bdb ? "1px solid gray" : "")};
  flex-direction: row;

  @media ${devices.mobile} {
    flex-direction: column;
  }
  @media ${devices.mobileS} {
    flex-direction: column;
  }
  @media ${devices.tablet} {
    font-size: 14px;
    flex-direction: column;
  }
  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

const TagImg = styled.img`
  width: ${(props) => (props.w ? "150%" : "100%")};
  height: 100%;
  border-radius: ${(props) => (props.bdr ? "50%" : "10px")};
`;

const DivIcon = styled.div`
  display: block;
  width: 30px;
  height: 30px;
  border: 1px solid;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  color: gray;
  &:hover {
    background-color: #f1204e;
    color: white;
    transition: all 0.3s;
    border: none;
  }
`;

const DivHover = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  width: 70px;
  height: 50px;
`;

const DivShare = styled.div`
  gap: 5px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  ${DivHover}:hover & {
    display: none;
  }
`;

const TagA = styled.a`
  display: block;
  color: gray;
  &:hover {
    color: white;
  }
`;

const DivSocial = styled.div`
  display: flex;
  position: absolute;
  right: 170px;
  opacity: 0;
  visibility: hidden;
  width: 85px;
  ${DivHover}:hover & {
    display: flex;
    gap: 10px;
    right: 210px;
    transition: all 0.9s;
    opacity: 1;
    width: 110px;
    visibility: visible;
  }
`;

const ButtonSave = styled.button`
  text-decoration: underline;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

const DivHeart = styled.div`
  gap: 5px;
  margin-bottom: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const IconHeart = styled.i`
  color: ${(props) => (props.active ? " #f1204e" : "gray")};
  ${DivHeart}:hover & {
    color: #f1204e;
    transition: all 0.3s;
  }
`;

const DivMarginBottom = styled.div`
  margin-bottom: ${(props) => (props.mgb ? "1rem" : "2rem")};
  border-bottom: ${(props) => (props.bdb ? "1px solid  #808080" : "")};
  .titleRoom {
    @media ${devices.mobile} {
  
    }
    @media ${devices.tablet} {
      font-size: 14px;
      flex-direction: row;
    }
    @media ${devices.laptop} {
     
    }
  }
  .infoRoom {
    @media ${devices.mobile} {
      flex-direction: row;
    }
    @media ${devices.mobileS} {
      flex-direction: row;
    }
    @media ${devices.tablet} {
      font-size: 14px;
      flex-direction: row;
    }
    @media ${devices.laptop} {
     
    }
  }
  .nameMasterRoom {
   
    @media ${devices.mobile} {
  
    }
    @media ${devices.tablet} {
      font-size: 22px;

    }
    @media ${devices.laptop} {
     
    }
  }

  .numberOfRoom {
    
      @media ${devices.mobile} {
  
      }
      @media ${devices.tablet} {
        margin-top: 10px;

      }
      @media ${devices.laptop} {
       
      }
    }
  }
`;

const TagH1 = styled.h1`
  margin-bottom: 0px;
  font-size: ${(props) => (props.size ? props.size * 1 : "24")}px;
  margin-top: 15px;
`;

const TagSpan = styled.span`
  text-decoration: underline;
  @media ${devices.mobile} {
  }
  @media ${devices.tablet} {
    font-size: 13px;
  }
  @media ${devices.laptop} {
  }
`;

const BillDiv = styled.div`
  .billAndService {
    @media ${devices.mobile} {
      flex-direction: row;
    }
    @media ${devices.mobileS} {
      flex-direction: row;
    }
    @media ${devices.tablet} {
      font-size: 14px;
      flex-direction: row;
    }
    @media ${devices.laptop} {
    }
  }
  .total {
    @media ${devices.mobile} {
      flex-direction: row;
    }
    @media ${devices.mobileS} {
      flex-direction: row;
    }
    @media ${devices.tablet} {
      font-size: 14px;
      flex-direction: row;
      justify-content: space-between;
      align-items: start;
    }
    @media ${devices.laptop} {
    }
  }
`;

export {
  TagImg,
  DivHover,
  DivSocial,
  GridDiv,
  GridItem,
  Container,
  FlexDiv,
  DivIcon,
  DivShare,
  TagA,
  DivHeart,
  IconHeart,
  TagSpan,
  DivMarginBottom,
  TagH1,
  ButtonSave,
  BillDiv,
};
