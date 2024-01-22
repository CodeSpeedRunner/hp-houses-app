import React, { useContext } from 'react';
import { HouseListItem } from '../../components/HouseListItem/HouseListItem';
import { IsLoadingContext } from '../../context';
import { SpinnerCircle } from '../../components/SpinnerCircle/SpinnerCircle';
import styles from './HousesMainPage.module.css';
import { useHousesFetch } from '../../effects/useHousesFetch';
import { v4 as uuidv4 } from 'uuid';

const HousesMainPage = () => {
  const { isLoading: isLoadingData } = useContext(IsLoadingContext);
  const { container } = styles;
  const housesData = useHousesFetch();

  return (
    <div className={container}>
      {isLoadingData ? (
        <SpinnerCircle />
      ) : (
        housesData.map((house) => <HouseListItem house={house} key={uuidv4()} />)
      )}
    </div>
  );
};

export { HousesMainPage };
