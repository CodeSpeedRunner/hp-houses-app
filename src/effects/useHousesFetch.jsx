import { useState, useEffect, useContext } from 'react';
import { API_URL } from '../constants';
import { IsLoadingContext } from '../context';
import axios from 'axios';

const useHousesFetch = () => {
  const [fetchedHouses, setFetchedHouses] = useState();
  const { setIsLoading } = useContext(IsLoadingContext);

  const fetchHousesData = async () => {
    try {
      setIsLoading(true);
      const response = await axios(API_URL);
      setFetchedHouses(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchHousesData();
  }, []);

  return fetchedHouses;
};

export { useHousesFetch };
