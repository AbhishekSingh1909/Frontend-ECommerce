import React from "react";
import Product from "../../types/Product"
import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { User } from "../../types/User";
import { addToCart } from "../../redux/reducers/cart/cartReducer";

type MediaCardProps = {
    product: Product,
    user: User | undefined
    dispatch: any
}

const MediaCard: React.FC<MediaCardProps> = ({ product, user, dispatch }) => {

    const [imageError, setImageError] = React.useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
    };

    return (
        <Card
            sx={{
                width: { lg: '20rem', md: '10rem', xs: '5rem' },
                height: { lg: '20rem', md: '10rem', xs: '5rem' },
                margin: '0.5rem',
                position: 'relative',
                display: 'inline-block',
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                },
            }}>
            <CardMedia
                component='img'
                image={imageError ? 'https://media.istockphoto.com/id/1226328537/vector/image-place-holder-with-a-gray-camera-icon.jpg?s=170667a&w=0&k=20&c=iLBbpRp4D_dbwg39-pubCdie04H1L0X1hPB1A2hJyjU='
                    : product?.images[0]}
                alt={product?.title}
                sx={{ objectFit: "cover", height: { lg: '10rem', md: '5rem', xs: '2rem' } }}
                width={'100%'}
                onError={handleImageError}
            />
            <CardContent sx={{ height: { md: '5rem', xs: '2rem' } }}>
                {product && (
                    <Typography fontWeight={'bold'} sx={{ width: { lg: '20rem', md: '10rem', xs: '5rem' }, wordBreak: 'break-word' }}>
                        Title : {product.title}
                    </Typography>
                )}
                {product && (
                    <Typography variant="caption" color="text.secondary">
                        Category : {product.category.name}
                    </Typography>
                )}
                {product && (
                    <Typography fontWeight={'bold'} color="text.secondary">
                        Price : {product.price}€
                    </Typography>
                )}
            </CardContent>

            <CardActions>
                <Stack direction="row" spacing={2}>
                    {user?.role !== 'Admin' && (
                        <Button onClick={() => handleAddToCart(product)}>
                            Add To Cart
                        </Button>
                    )}
                    <Button component={Link} to={`/product/${product?.id}`}>
                        View
                    </Button>
                </Stack>
            </CardActions>
        </Card>
    );
};

export default MediaCard;