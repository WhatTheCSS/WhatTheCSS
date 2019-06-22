import styled from "@emotion/styled"

export const TwoThirdGridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  grid-column-gap: 50px;
  @media screen and (max-width: 776px) {
    grid-template-columns: 1fr;
  }

  @media all and (-ms-high-contrast: none) {
    @media screen and (max-width: 776px) {
      -ms-grid-template-columns: 2fr 1fr;
    }
  }
`

export const TwoThirdGridContainerReverse = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  align-items: center;
  grid-column-gap: 50px;
  @media screen and (max-width: 776px) {
    grid-template-columns: 1fr;
  }
`

export const HalfGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  @media screen and (max-width: 776px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 776px) {
    -ms-grid-template-columns: 2fr 1fr;
  }
  media all and (-ms-high-contrast: none) {
    @media screen and (max-width: 776px) {
      -ms-grid-template-columns: 2fr 1fr;
    }
  }
`
