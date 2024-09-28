import React , {useState,useEffect} from 'react';
import { View,FlatList } from 'react-native';
import { styled } from 'nativewind';
import axios from 'axios';
import ProductCard from './ProductCard';


const StyledView = styled(View);


const ProductListScreen = ({navigation}) => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await axios.get('https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json');
                setProducts(response.data.data);
            }catch(error){
                console.error('Error fetching products',error);
            }
        };

        fetchProducts();
    },[]);

    const renderItem = ({item}) => {
        return(
        <ProductCard product={item} onPress={() => navigation.navigate('ProductDetails',{product:item})} />
    );
    }

    return(
        <StyledView className='flex-1 p-4 bg-gray-100'>
            <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </StyledView>
    )
};

export default ProductListScreen;