import { useState, useEffect } from 'react';

import { getMemes } from './api/endpoints.js';
import PageContent from './components/PageContent';

export default function Home() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    async function getPageInfo() {
      getMemes().then(response => setMemes(response));
    }

    getPageInfo();
  }, [])

  return (
    <PageContent
      memes={memes}
      title="Client Side Fetch"
      page="client"
    />
  )
}
