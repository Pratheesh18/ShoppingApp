import React from 'react';
import { View,Text,TouchableOpacity,Image } from 'react-native';
import { styled } from 'nativewind';
import { addToCart } from '../slices/cartSlice';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

const Card = styled(TouchableOpacity);
const StyledView = styled(View);
const StyledText = styled(Text);

const ProductCard = ({product , onPress}) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        navigation.navigate('Cart');
    }

    return(
        <Card className='bg-white rounded-lg  p-4 mb-7 mt-10' onPress={onPress}>
            <Image source={{uri:product.mainImage}} style={{width:'100%',height:160,borderRadius:8}} resizeMode="cover" />
            <StyledView className='mt-2'>
                <StyledText className='text-lg font-bold'> {product.name} </StyledText>
                <StyledText className='text-sm text-gray-500'> {product.price.amount} </StyledText>
            </StyledView>
            <TouchableOpacity style={{ backgroundColor: 'green', marginTop: 10, padding: 10, borderRadius: 5 }} onPress={handleAddToCart}>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>Add To Cart</Text>
            </TouchableOpacity>
        </Card>
    )
};

export default ProductCard;