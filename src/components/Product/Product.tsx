import React, { useState } from 'react'
// images
import phone from '../../assets/phone.jpeg'
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
  BestSeller,
  ProductPriceMain,
  PriceBefore,
  ContentMainPrice,
  Installments,
  PromotionSpan,
  PaymentsType,
  OfferPill,
  WrapperProductDetails,
  ProductVariant,
  CounterToBuy,
  SendToLocation
} from './ProductStyled'
// icons
import { TruckIcon } from '../../assets/Icons'
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { BiStoreAlt } from 'react-icons/bi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { VscLocation } from 'react-icons/vsc';
import ButtonBlue from '../Buttons/ButtonBlue';

export default function Product() {
  return (
    <>
      <Container>
        <RowNav>
          <Suggestive><p>Você também pode gostar:</p> gabinete rack - suporte para notebook - teclado gamer mecanico - tablet s6gtx 1050ti - conector cat6 furukawa</Suggestive>
        </RowNav>
        <RowNav>
          <nav>
            <p>Voltar à lista: | </p>
            <ul>
              <p> &nbsp; </p>
              <li><a href='/'>Informática</a></li>
              <p> &gt; </p>
              <li><a href='/'>Acessórios para PC Gaming</a></li>
              <p> &gt; </p>
              <li><a href='/'>Fones</a></li>
              <p> &gt; </p>
              <li><a href='/'>Knup</a></li>
              <p> &gt; </p>
              <li><a href='/'>Headset</a></li>
              <p> &gt; </p>
              <li><a href='/'>Com microfone</a></li>
            </ul>
          </nav>

          <div>
            <a href='#'>Compartilhar</a>
            <span> | </span>
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
              <div className='wrapper_info'>

                <div className='wrapper_icon'>
                  <TruckIcon />
                </div>
                <div className='wrapper_text'>
                  <p className='textHeader'>Chegará grátis <strong>amanhã</strong></p>
                  <p className='textContent'>
                    Comprando dentro das próximas
                    <CounterToBuy>
                      12 h 58 min
                    </CounterToBuy>
                    Benefício Mercado Pontos

                    <SendToLocation>
                      <VscLocation style={{ width: '20px', height: '20px', position: 'relative', top: '5px' }} />
                      Enviar para {'Avenida dos Pardais 1234'}
                    </SendToLocation>
                  </p>
                </div>
              </div>

              <div className='wrapper_info'>

                <div className='wrapper_icon'>
                  <BiStoreAlt/>
                </div>
                <div className='wrapper_text-takeInLocation'>
                  <p className='textContent'>
                    Retire <strong>a partir de quarta-feira</strong> em uma agência Mercado Livre por 13,20
                    <SendToLocation>
                      ver no mapa
                    </SendToLocation>
                  </p>
                </div>
              </div>

              <div className="warapper_info-sellerInfo">
                <span >Vendido por</span>{' '} 
                <span className='span_info-sellerInfo'>Nome da loja</span>
                <div className='lider'>
                  <span>Mercado líder</span>
                  <span className='pipe'>{" | "}</span>
                  <span>1.454</span>
                </div>
              </div>

              <div className="warapper_info-btnBuy">
                <h4>Último disponível!</h4>
                <ButtonBlue descrip='Comprar agora'/>
              </div>

            </WarrantySection>

            <WarrantySection>
              Informações sobre o vendedor

            </WarrantySection>

            <WarrantySection>
              Outras opções de compra

            </WarrantySection>

            <WarrantySection>
              Meios de pagamento
            </WarrantySection>

          </Column>
        </Painel>

      </Container>
    </>
  )
}

function ProductPrice() {
  const [likedHeart, setLikedHeart] = useState(false)

  function onClickHeartIcon() {
    // update on database
    setLikedHeart(!likedHeart)
  }

  return (
    <>
      <ColumnProductPrice>
        <HeaderProductPrice>

          <CountAndLike><p>Novo | 20355 vendidos</p>

            <div
              onClick={onClickHeartIcon}
            >
              {likedHeart ? <BsHeartFill className='iconHeart' /> : <BsHeart className='iconHeart' />}
            </div>

          </CountAndLike>
          <h1>Headset gamer Knup KP-397 preto e azul</h1>

          <CountStars>
            {/* Usar contagem */}
            <AiFillStar className='iconStar' />
            <AiFillStar className='iconStar' />
            <AiFillStar className='iconStar' />
            <AiFillStar className='iconStar' />
            <AiFillStar className='iconStarOut' />

            <p>1156 opiniões</p>
          </CountStars>
          <BestSeller>
            <span>MAIS VENDIDO</span>
            <a href='/'>14° em fones de ouvido</a>
          </BestSeller>
          <ProductPriceMain>

            <div>
              <PriceBefore>
                <span className='PriceBefore-main'>R$ 78</span>
                <span className='PriceBefore-cents'>99</span>
              </PriceBefore>

              <ContentMainPrice>
                <span className='currentSymbol'>R$</span>
                <span className='MainPrice'>71</span>
                <span className='MainCent'>09</span>
                <span className='MainDiscount'>10% OFF</span>
              </ContentMainPrice>
              <Installments>
                <span >em</span>
                <span >12x</span>
                <span >R$</span>
                <span className='ContentMainPrice'>
                  <span className='IsntallMainPrice'>6</span>
                  <span className='IsntallCentsPrice'>78</span>
                </span>
              </Installments>
            </div>

            <PromotionSpan>
              <p>10% OFF</p>
            </PromotionSpan>

            <PaymentsType>
              Ver meios de pagamento
            </PaymentsType>

          </ProductPriceMain>

          <ProductDetails />

        </HeaderProductPrice>
      </ColumnProductPrice>
    </>
  )
}

function ProductDetails() {
  return (
    <Column>
      <WrapperProductDetails>
        <OfferPill>
          OFERTA DO DIA
        </OfferPill>

        <ProductVariant>
          <div className='contentVariant'>
            <span>Cor:</span> <span className='variant'>Preto/Azul</span>
          </div>

          <div className="imageContent">
            <img src={phone} alt="foto da variante do produto" />
            <img src={phone} alt="foto da variante do produto" />
          </div>


          <div className="UlAboutProduct">
            <div>
              <p>O que você precisa saber sobre esse produto.</p>
            </div>

            <div>
              <ul>
                <li>Compatível com PS4.</li>
                <li>Inclui microfone.</li>
                <li>Tipo de conector: Jack.</li>
                <li>O comprimento do cabo é de 1.8m.</li>
                <li>Som superior e ilimitado.</li>
                <li>Confortávels e práticos.</li>
              </ul>

            </div>
          </div>

        </ProductVariant>


      </WrapperProductDetails>
    </Column>
  )
}