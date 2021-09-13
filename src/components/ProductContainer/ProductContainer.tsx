import React from 'react'
import Product from '../Product/Product'
import { Container,Wrapper } from './ProductContainerStyled'

function ProductContainer() {
  return (
    <Container>
      <Wrapper>
        <Product/> 
      </Wrapper>
    </Container>
  )
}
export default ProductContainer