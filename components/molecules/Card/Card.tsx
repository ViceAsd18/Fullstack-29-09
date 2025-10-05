import { Card } from 'antd';


interface ItemCardProps {
    title : string;
    description : string;
    image : string
}

const ItemCard = ({title, description, image} : ItemCardProps) => {
    return (
        <Card className='card' style={{
        width: 380, 
        height: 350,
        borderRadius: 12,
        }}
            hoverable
            cover={<img alt="Python" src={image} 
            style={{            
            height: 215,
            objectFit: "cover",
            }} 
            />}
        >
            <Card.Meta title={title} description={description}/>
        </Card>
    )
}

export default ItemCard