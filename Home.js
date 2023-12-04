import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const menuData = [
    {
        id: '1',
        name: 'Pepperoni Pizza',
        image: require('./food.png'),
    },
    {
        id: '2',
        name: 'Margherita Pizza',
        image: require('./food.png'),
    },
    {
        id: '3',
        name: 'Vegetarian Pizza',
        image: require('./food.png'),
    },
    {
        id: '4',
        name: 'Hawaiian Pizza',
        image: require('./food.png'),
    },
    // Add more items as needed
];

const MenuItemCard = ({ name, image }) => (
    <View style={styles.card}>
        <Image source={image} style={styles.cardImage} />
        <Text style={styles.cardText}>{name}</Text>
    </View>
);

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleLogout = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    return (
        <ImageBackground
            source={require('./food.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Welcome to Godman's Pizza!</Text>
                    <Text style={styles.description}>
                        Explore our delicious menu and place your order.
                    </Text>
                    <Button title="Logout" onPress={handleLogout} />
                </View>
                <FlatList
                    data={menuData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MenuItemCard name={item.name} image={item.image} />}
                    showsVerticalScrollIndicator={false} // Remove horizontal prop
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        color: '#555',
        textAlign: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    card: {
        marginVertical: 10, // Adjusted margin to create space between cards
        borderRadius: 10,
        overflow: 'hidden',
    },
    cardImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    cardText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
