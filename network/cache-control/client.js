const fetchData = async (url) => {
  const startTime = Date.now();

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache'
      }
    });

    const cacheControl = response.headers.get('cache-control');
   
    const elapsedTime = Date.now() - startTime; // Calculate the time taken to fetch

    console.log('Response Status:', response.status);
    console.log('Cache-Control Header:', cacheControl);
    console.log('Time taken for request:', elapsedTime, 'ms');

    const data = await response.json();
    // console.log('Fetched Data:', data);
    // console.log('Data fetched at:', new Date().toISOString());

    return { response, elapsedTime, cacheControl };
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

const url = 'http://localhost:3000/data';

const testCaching = async () => {
  const url = 'http://localhost:3000/data';

  // First request
  await fetchData(url);

  // Wait 100ms before second request
  await new Promise(resolve => setTimeout(resolve, 100));

  // Second request
  await fetchData(url);

  // Wait 500ms before third request
  await new Promise(resolve => setTimeout(resolve, 500));

  // Third request
  await fetchData(url);

   // Wait 500ms before third request
   await new Promise(resolve => setTimeout(resolve, 500));

   // Third request
   await fetchData(url);
};

testCaching();
