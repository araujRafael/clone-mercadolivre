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
  
`
export const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  
  .mainPic {
    /* width: 350px; */
    height: 420px;

    margin-top: 40px;
    margin-left: 15px;
  }

  .smallIconsPic{
    width: fit-content;
    height: fit-content;
    
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
  padding: 40px 15px 8px 0px;
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
    background-color: orange;
    color: white;
    font-size: 12px;
    padding: 2px 5px;
    margin-right: 10px;
  }

  a{
    font-size: 12px;
    color: var(--color-blue);

  }
`