import styled from 'styled-components'

const CabecalhoTag = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const Cabecalho = () => (
  <CabecalhoTag>
    <h1>EBAC Jobs</h1>
  </CabecalhoTag>
)

export default Cabecalho
