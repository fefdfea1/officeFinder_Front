import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";


export const renderStarRating = (rating: number) => {
    const stars = [];
    let remainingRating = rating;

    for (let i = 0; i < 5; i++) {
        if (remainingRating >= 1) {
            stars.push(<ImStarFull className="text-base" key={i} />);
            remainingRating -= 1;
        } else if (remainingRating >= 0.5) {
            stars.push(<ImStarHalf className="text-base" key={i} />);
            remainingRating -= 0.5;
        } else {
            stars.push(<ImStarEmpty className="text-base" key={i} />);
        }
    }

    return stars;
};
