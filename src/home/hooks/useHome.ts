import React from "react";
import { useGetProductsQuery } from "./index";

// create a simple hook to get the home data
const useHome = () => {
    const [showAll, setShowAll] = React.useState(false);
    const [showWins, setShowWins] = React.useState(false);
    const { data, isLoading, isError, isFetching, isSuccess } = useGetProductsQuery({});

    const handleShowAll = () => {
        setShowAll(!showAll);
        setShowWins(false);
    };

    const handleShowWins = () => {
        setShowAll(true);
        setShowWins(true);
    };

    const handleShowRedeemed = () => {
        setShowAll(true);
        setShowWins(false);
    };

    const getAllPoints = () => {
        let points = 0;
        data?.forEach((product) => {
            points += product.points;
        });
        return formatPoints(points, true);
    };

    const formatPoints = (points: number, withSuffix: boolean = false) => {
        const formatPoint = new Intl.NumberFormat("es-MX", { minimumFractionDigits: 2 }).format(points);
        return withSuffix ? `${formatPoint} pts` : formatPoint;
    };

    const getMonthFromData = () => {
        if (!data) return;
        const date = new Date(data[0].createdAt);
        const month = date.toLocaleDateString("es-MX", { month: 'long' });
        return month[0].toUpperCase() + month.substring(1);
    };

    const showDate = (date: string) => {
        const newDate = new Date(date);
        return newDate.toLocaleDateString("es-MX", {
            year: 'numeric', month: 'long', day: 'numeric'
        });
    };

    return {
        data,
        isLoading,
        isError,
        isFetching,
        isSuccess,
        showAll,
        showWins,
        handleShowAll,
        handleShowWins,
        handleShowRedeemed,
        getAllPoints,
        showDate,
        formatPoints,
        getMonthFromData
    };
};

export default useHome;