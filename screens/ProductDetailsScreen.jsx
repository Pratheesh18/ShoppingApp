import React from "react";
import { ScrollView,Text,Image,View } from "react-native";
import { styled } from "nativewind";


const StyledScrollView  = styled(ScrollView);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledView = styled(View);


const ProductDetailsScreen = ({route}) => {
    const {product} = route.params;

    return(
        <StyledScrollView className="flex-1 p-5 bg-gray-100">
            <StyledImage source={{uri:product.mainImage}} style={{width:'100%',height:100,borderRadius:8}} resizeMode="cover" />
            <StyledText className="text-2xl font-bold mb-3">{product.name}</StyledText>
            <StyledText className="text-lg mb-3">Brand: {product.brandName}</StyledText>
        </StyledScrollView>
    )
};


export default ProductDetailsScreen;