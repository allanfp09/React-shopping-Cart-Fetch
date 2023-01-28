import React, { Fragment, useCallback, useEffect, useState } from 'react';
import NotFound from '../responsestatus/NotFound';
import FoodList from './FoodList';

const Food = () => {
    const [foods, setFoods] = useState([]);
    const [isResponseError, setIsResponseError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const fetchFoods = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                'https://react-swap-default-rtdb.firebaseio.com/foods.json'
            );

            if (!response.ok) {
                setIsResponseError(true);
                throw new Error('error when fetching data from db');
            }

            const responseData = await response.json();

            let fetchedData = [];

            for (let key in responseData) {
                fetchedData.push({
                    id: responseData[key].id,
                    name: responseData[key].name,
                    price: responseData[key].price,
                });
            }

            setFoods(fetchedData);
            setIsLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    useEffect(() => {
        fetchFoods();
    }, [fetchFoods]);
    return (
        <Fragment>
            <h1 className="text-[30px] font-semibold mt-3">Foods...</h1>
            {isResponseError && isLoading && <NotFound />}
            {!isResponseError && isLoading && <p>Loading...</p>}
            {!isResponseError && !isLoading && (
                <ul className="space-y-3 mt-5">
                    {foods.map((food) => (
                        <FoodList
                            key={food.id}
                            id={food.id}
                            name={food.name}
                            price={food.price}
                        />
                    ))}
                </ul>
            )}
        </Fragment>
    );
};

export default Food;
