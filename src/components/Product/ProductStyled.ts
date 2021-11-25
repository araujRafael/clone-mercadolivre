import styled from "styled-components";

export const Container = styled.div`
  width:100% ;

  margin: 0;
  padding: 0;
`
export const RowNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  div{
    a{
      font-size: 13px;
      color: var(--color-blue);
    }
    span{
      font-size: 14px;

      font-weight: 100;
      color: var(--color-gray);

      margin: 0 8px;
    }
  }

  nav{
    margin-top: 2rem;
    margin-bottom: 0.5rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    
    p{
      font-size: 13px;
      font-weight: normal;
    }
    ul{
      display: flex;
      flex-direction: row;
      gap: 5px;
      li{
        font-size: 13px;
        a{
          color: var(--color-blue);
        }
      }
    }
  }
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`
export const Painel = styled.div`
  display: flex;
  flex-direction: row;

  padding: 16px;

  background-color: white;

  box-shadow: rgba(0,0,0,0.05) 1px 1px 3px 1px ;
  border-radius: 5px;
  width: 100%;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
export const Gallery = styled.div`
  display: flex;
  flex-direction: row;

  width: min-content;
  height: 100%;

  
  
  .mainPic {
    /* width: 350px; */
    height: 420px;
    padding: 16px;
    margin-top: 24px;
    position: sticky ;
    top: 16px;
  }

  .smallIconsPic{
    width: fit-content;
    height: fit-content;
    
    position: sticky ;
    top: 16px;
    li{
      margin-bottom: 10px;
      border: 1px solid var(--color-border);
      border-radius: 5px;
      img{

        margin: 5px;

        width: 40px;
        height: 40px;
      }
    }
  }
`

export const WarrantySection = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 10px;
  
  padding: 25px 16px;
  width: 305px;
  min-height: 200px;

  margin-bottom: 25px;

  .warapper_info-sellerInfo{
    .lider{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
    }
    span{
      font-size: 13px;
    }
    .span_info-sellerInfo{
      color: var(--color-blue);
    }
    .pipe{
      font-size: 6px;
      color: var(--color-gray);
    }
  }

  .warapper_info-btnBuy{
    margin-top: 10px;
    h4{
      margin-bottom: 20px;
    }


  }

  .wrapper_info{
    display: flex;
    flex-direction: row;

    margin-bottom: 20px;

    .wrapper_icon{
      margin: -1px 10px 0 0;
    }

    .wrapper_text-takeInLocation{
      color: #000;
      font-size: 14px;
        strong{
          font-weight: 600;
        }
        margin: 0 0 5px 0 ;
    }

    .wrapper_text{  
      .textHeader{
        color: var(--color-green);
        font-size: 14px;
        strong{
          font-weight: 600;
        }
        margin: 0 0 5px 0 ;
      }
      .textContent{
        font-size: 13px;
        line-height: 1.4;
        color: var(--color-gray);
      }
    }
  }
  
`
export const ProductAction = styled.div`
  
`
export const SellerIinfo = styled.div`
  
`
export const Description = styled.div`
  h2{
    margin: 15px 0px 20px 5px;
    font-weight: 400;
  }
`
export const Suggestive = styled.p`
  display: flex;
  gap: 8px;

  font-size: 13px;
  padding: 0;
  margin: 1rem 0 0 0;

  p{
    font-size: 13px;
    font-weight: 600;
  }
`

// ProductPrice
export const ColumnProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  margin:0px 32px 8px 0;
`

export const HeaderProductPrice = styled.div`
  padding: 16px 15px 8px 0px;
  h1{
    font-size: 22px;
    font-weight: 600;
  }
`

export const CountAndLike = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--color-gray);
  font-size: 14px;
  margin: 0 0px 8px 0; 

  .iconHeart{
    width: 22px;
    height: 22px;
    color: var(--color-blue);

    cursor: pointer;
  }
`
export const CountStars = styled.div`
  display: flex;
  margin: 10px 0;
  p{
    margin-left: 10px;
    font-size: 12px;
    color: var(--color-gray);
  }
  .iconStar{
    color: var(--color-blue);
    margin-right: 2px;
    font-size: 16px;
  }
  .iconStarOut{
    font-size: 16px;
    color: var(--color-border);
  }
`
export const BestSeller = styled.div`
  span{
    background-color: #ff7733;
    color: white;

    font-size: 12px;
    font-weight: 600;

    padding: 2px 5px;
    margin-right: 10px;

    border-radius: 4px;
  }

  a{
    font-size: 12px;
    color: var(--color-blue);

  }
`
export const ProductPriceMain = styled.div`
  width: 179px;
  height: fit-content;
  margin: 16px 0 0 0;

  display: flex; 
  flex-direction: column;
  gap: 10px;

`
export const PriceBefore = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 0 0 4px;

  span{
    font-family: 'Roboto Condensed',sans-serif;
    font-weight: 200;
    font-size: 16px;
    color: var(--color-gray);

  }
  .PriceBefore-cents{
    position: relative;
    top: 1px;
    font-size: 10px;
  }

  &::after{
  content: ' ';
  position: relative;
  display: flex;
  left: -48px;
  bottom: -8px;
  width: 50px;
  height: 0.01rem;
  background: var(--color-gray);
 }
`

export const ContentMainPrice = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 35px;

  .currentSymbol{
    color: #333;
    font-size: 36px;
    margin: 0 10.8px 0 0;
  }
  .MainPrice{
    color: #333;
    font-size: 36px;
    font-weight: 100;
    font-family: 'Roboto Condensed', sans-serif;
    position:relative;
    top: 1px;
  }
  .MainCent{
    font-size: 18px;
    position: relative;
    bottom:6px;
    font-weight: 100;
  }

  .MainDiscount{
    width: 68.5px;
    height: 24px;
    display: flex;
    flex-direction: row;
    color: var(--color-green);

    font-size: 16px;
    font-weight: 500;
    margin: 0 0 0 10px;
  }
`
export const Installments = styled.div`
  display: flex;
  gap: 4px;

  .ContentMainPrice{
    font-weight: 400;
    display: flex;
    align-items: flex-start;
  }

  .IsntallCentsPrice{
    font-size: 12px;
    margin: 0.45px 0 0 1px;
  }
`

export const PromotionSpan = styled.div`
  width: 70.44px;
  height: 24px;
  padding: 7px 8px;

  border-radius: 3px;

  background: #4189e632;

  display: flex;
  justify-content: center;
  align-items: center;


  p{
    color: var(--color-blue);
    font-size: 12px;
    font-weight: 600;
    padding: 0;
  }
`

// ProductDetails

export const PaymentsType = styled.p`
  color: var(--color-blue);
  font-size: 14px;
`
export const OfferPill = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--color-blue);
  color: #fff;
  font-size: 8px;
  font-weight: 600;
  width: fit-content;
  height: fit-content;
  padding: 3px 4px;
  margin: 12px 0 0 0 ;
  border-radius: 3px;
`
export const WrapperProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

`

export const ProductVariant = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  font-size:16px;
  .variant{
    font-weight: 600;
  }

  .contentVariant{
    margin: 0 0 10px 0
  }

  img{
    width: 45px;
    height: 45px;

    padding: 3px;
    margin: 0 8px 8px 0; 
    border: 1px solid var(--color-border);
    border-radius: 5px;

  }

  .imageContent{
    margin: 0 0 30px 0;
  }

  
  .UlAboutProduct{
    display: flex;
    flex-direction: column;
    p{
      font-size: 12px;
      font-weight: 600;
      margin: 0 0 20px 0;
    }
    ul{
      display: flex;
      flex-direction: column;
      gap: 12px;
      position: relative;
      left: 18px;
      li{
        font-size: 14px;
        font-family: 'Robot Condensed';
        font-weight: 400;
        list-style: disc;
        color:#333;
      }
    }
  }
`

export const CounterToBuy = styled.p`
  color: black;  
  font-weight: 400;
`
export const SendToLocation = styled.p`
  color: var(--color-blue);  
  font-weight: 400;
  font-size: 13px;
  word-wrap: break-word;
  line-height: 1.6;
`
