import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled.a `
  text-decoration: none;
  color: rgb(29, 155, 240);
  font-size: 14px;
  margin-right: 12px;
  ${props => props.actual && css`
    color: rgba(0,0,0,0.4);
  `}
`

export default function NavBar({ actualPage }) {
  return (
    <Container>
      <Link href='/' actual={actualPage === 'client'}>Client fetch</Link>
      <Link href='/ssr' actual={actualPage === 'ssr'}>Server Side Rendering</Link>
      <Link href='/staticProps' actual={actualPage === 'static'}>Static Rendering</Link>
    </Container>
  )
}
