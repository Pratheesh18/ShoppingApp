import { View,Text,FlatList,Button } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { removeFromCart } from "../slices/cartSlice";
import { styled } from "nativewind";



const StyledView = styled(View);
const StyledText = styled(Text);




const CartScreen = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const renderItem = ({item}) => {
        return(
           <StyledView className="p-4 bg-white rounded-lg shadow mb-4">
            <StyledText className="text-lg font-bold"> {item.name} </StyledText>
            <StyledText className="text-gray-500"> {item.price.amount} </StyledText>
            <Button title="Remove from Cart" onPress={() => handleRemoveFromCart(item.id)} color="#ff0000" />
           </StyledView>
        )
    };


    return(
        <StyledView className="flex-1 p-4 bg-gray-100">
            <FlatList data={cartItems} renderItem={renderItem} keyExtractor={(item) => item.id} ListEmptyComponent={<StyledText> No items in cart </StyledText>} />
        </StyledView>
    )
};

export default CartScreen;