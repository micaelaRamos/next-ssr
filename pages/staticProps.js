import { getMemes } from './api/endpoints.js';

import PageContent from './components/PageContent';

export async function getStaticProps() {
  const memes = await getMemes();
  return {props: { memes }};
};

function StaticProps({ memes }) {
  return (
    <PageContent memes={memes} title="Static Rendering"/>
  )
  }
  
  export default StaticProps;
