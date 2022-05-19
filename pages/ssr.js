import { getMemes } from './api/endpoints.js';

import PageContent from './components/PageContent';

export async function getServerSideProps() {
  const memes = await getMemes();
  return {props: { memes }};
};

export default function Ssr({ memes }) {
  return (
    <PageContent memes={memes} title="Server Side Rendering" />
  )
}
