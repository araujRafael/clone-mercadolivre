import React from 'react'
// images
import phone from '../../assets/phone.jpeg'
import Footer from '../Footer'
import Header from '../Header'
// Styled
import {
  Container,
  RowNav,
  Row,
  Painel,
  Column,
  Gallery,
  WarrantySection,
  ProductAction,
  SellerIinfo,
  Description,
  Suggestive,
  ColumnProductPrice,
  HeaderProductPrice,
  CountAndLike,
  CountStars,
  BestSeller
} from './ProductStyled'
// icons
import { BsHeart } from 'react-icons/bs';
import { AiFillStar,AiOutlineStar } from 'react-icons/ai';

export default function Product() {
  return (
    <>
      <Container>
        <RowNav>
          <Suggestive><p>Você também pode gostar:</p> gabinete rack - suporte para notebook - teclado gamer mecanico - tablet s6gtx 1050ti - conector cat6 furukawa</Suggestive>
        </RowNav>
        <RowNav>
          <nav>
            <p>Voltar a lista: | </p>
            <ul>
              <p> &nbsp; </p>
              <li><a href='#'>Informática</a></li>
              <p> &gt; </p>
              <li><a href='#'>Acessórios para PC Gaming</a></li>
              <p> &gt; </p>
              <li><a href='#'>Fones</a></li>
              <p> &gt; </p>
              <li><a href='#'>Knup</a></li>
              <p> &gt; </p>
              <li><a href='#'>Headset</a></li>
              <p> &gt; </p>
              <li><a href='#'>Com microfone</a></li>
            </ul>
          </nav>

          <div>
            <a href='#'>Compartilhar</a> |
            <a href='#'> Vender um igual</a>
          </div>
        </RowNav>

        {/* White space */}
        <Painel>
          <Column>
            <Row>
              <Gallery>
                <ul className='smallIconsPic'>
                  <li><img alt='T-shirt' src={phone} /></li>
                  <li><img alt='T-shirt' src={phone} /></li>
                </ul>

                <img className='mainPic' alt='T-shirt' src={phone} />
              </Gallery>

              <ProductPrice />

            </Row>
            <Row>
              {/* Tambem comprou */}
            </Row>
            <Row>
              <Description>
                <h2>Descrição</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt explicabo doloremque debitis eos atque alias quidem esse reiciendis tempore consequatur inventore repellendus fuga perferendis accusantium doloribus similique, tempora officia!
              </Description>
            </Row>

          </Column>

          <Column>
            {/* <ProductAction/> */}
            {/* <SellerIinfo/> */}

            <WarrantySection>
              Chegará amanhã
            </WarrantySection>

            <WarrantySection>
              Chegará amanhã
            </WarrantySection>

            <WarrantySection>
              Chegará amanhã
            </WarrantySection>

            <WarrantySection>
              Chegará amanhã
            </WarrantySection>

          </Column>
        </Painel>

      </Container>
    </>
  )
}

function ProductPrice() {
  return (
    <>
      <ColumnProductPrice>
        <HeaderProductPrice>

          <CountAndLike><p>Novo | 20355 vendidos</p> <BsHeart className='iconHeart' /></CountAndLike>
          <h1>Headset gamer Knup KP-397 preto e azul</h1>

          <CountStars>
            {/* Usar contagem */}
            <AiFillStar className='iconStar'/>
            <AiFillStar className='iconStar'/>
            <AiFillStar className='iconStar'/>
            <AiFillStar className='iconStar'/>
            <AiFillStar className='iconStarOut'/>

            <p>1156 opiniões</p>
          </CountStars>
          <BestSeller>
            <span>MAIS VENDIDO</span>
            <a href='/'>14° em fones de ouvido</a>
          </BestSeller>
        </HeaderProductPrice>
      </ColumnProductPrice>
    </>
  )
}