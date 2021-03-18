interface CardProps {
    title: string;
    subTitle: string;
    tier?: number;
    views: number;
}


const Card = (props: CardProps) => {
    const {title, subTitle, tier, views} = props;

    return (
        <div>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <h3>Tier: {tier}</h3>
            <p>Views: {views}</p>
        </div>
    );
}

export default Card;