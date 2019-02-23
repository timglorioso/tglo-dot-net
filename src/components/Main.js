import styled from 'styled-components'

const Main = styled.main`
  max-width: 800px;
  @media (max-width: 432px) {
    margin-right: 16px;
    margin-left: 16px;
  }
  @media (min-width: 433px) and (max-width: 866px) {
    margin-right: 40px;
    margin-left: 40px;
  }
  @media (min-width: 867px) and (max-width: 1200px) {
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 1201px) and (max-width: 1680px) {
    margin-left: 40px;
    margin-right: 40px;
    width: calc(50vw - 80px);
  }
  @media (min-width: 1681px) {
    margin-left: 80px;
    margin-right: 80px;
    width: calc(50vw - 160px);
  }
  @media (min-width: 1201px) {
    position: relative;
    left: 50vw;
    min-height: 100vh;
  }
`

export default Main
