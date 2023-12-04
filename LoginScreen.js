// LoginScreen.js
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [receivePassword, setReceivePassword] = useState('');
    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    const check = () => {
        setLoading(true);

        // Simulating an asynchronous authentication request to a server
        setTimeout(() => {
            if (username === 'user' && receivePassword === 'password') {
                setIsLoggedIn(true); // Set authentication status to true
            } else {
                setOutput('Either Username Or Password Is Wrong');
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <ImageBackground
            source={require('./food.png')}
            style={styles.backgroundImage}
        >
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Text style={styles.welcomeText}>Welcome Back, Customer!</Text>
                <TextInput
                    placeholder="Enter Username"
                    keyboardType="default"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Enter Password"
                    secureTextEntry
                    value={receivePassword}
                    onChangeText={(text) => setReceivePassword(text)}
                    style={styles.input}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={check}
                    disabled={loading}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                {loading && <ActivityIndicator />}
                <View>
                    <Text style={styles.errorMessage}>{output}</Text>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
};

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 18,
        marginBottom: 20,
        color: '#ffffff', // Text color on top of the image
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        padding: 8,
        width: 250,
        borderRadius: 20,
        backgroundColor: '#ffffff', // Background color of the input field
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    errorMessage: {
        color: 'red',
        fontSize: 16, // Set a font size that is easily readable
        marginTop: 10,
        fontWeight: 'bold',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        width: '100%', // Set width to 100% to cover the entire screen
    },
};

export default LoginScreen;
