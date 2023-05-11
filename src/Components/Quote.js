import { useEffect, useState } from 'react';
import styles from './Quote.module.css';

const Quote = () => {
  const [qouteResult, setQouteResult] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [errorState, setErrorState] = useState(false);

  const category = 'computers';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            method: 'GET',
            withCredentials: true,
            headers: {
              'X-Api-Key': 'mTAX8mjo76+AlFPlXASyCg==WSfxrthcCwbMDsPX',
              'Content-Type': 'application/json',
            },
          },
        );
        setLoadingState(false);
        setErrorState(false);
        const json = await res.json();
        setQouteResult(json[0]);
      } catch (err) {
        setErrorState(true);
        setLoadingState(false);
        setQouteResult([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div data-testid="main-container">
      <div className={styles.quote_container}>
        <h1>{loadingState && 'LOADING...'}</h1>
        <h3>{!errorState && !loadingState && `"${qouteResult.quote}"`}</h3>
        <span className={styles.author}>
          {!loadingState && qouteResult.author}
        </span>
        <span className={styles.error}>
          {errorState && 'Something went wrong!'}
        </span>
      </div>
    </div>
  );
};

export default Quote;
