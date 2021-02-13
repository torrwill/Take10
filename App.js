import React, { useRef, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, Button, Dimensions, TouchableOpacity, StyleSheet, Animated, SafeAreaView, SectionList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { Slider } from 'nachos-ui';
import { genericTypeAnnotation } from '@babel/types';
import mindfulnessImage from './assets/images/mindfulness.png';
const mindfullnessImageUri = Image.resolveAssetSource(mindfulnessImage).uri;
import logoImage from './assets/images/logo.png';
const logoImageURI = Image.resolveAssetSource(logoImage).uri;
import groundedImage from './assets/images/astronaut.png'
const groundedImageUri = Image.resolveAssetSource(groundedImage).uri;
import handImage from './assets/images/hand.png'
const handImageUri = Image.resolveAssetSource(handImage).uri;
import tasteImage from './assets/images/taste.jpg'
const tasteImageUri = Image.resolveAssetSource(tasteImage).uri;
import noseImage from './assets/images/nose.png'
const noseImageUri = Image.resolveAssetSource(noseImage).uri;
import eyesImage from './assets/images/eyes.jpg'
const eyesImageUri = Image.resolveAssetSource(eyesImage).uri;
import earImage from './assets/images/ear.png'
const earImageUri = Image.resolveAssetSource(earImage).uri;

const { width, height } = Dimensions.get("window");
const circleWidth = width / 2;
const Pulse = require('react-native-pulse').default;

const Spacer = ({ ...styles }) => (
  <View style={styles} />
)

const HomeScreen = ({ navigation }) => (
  
  <View style={styles.body}>
    <View style = {{ 
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Image
        source={{ uri: logoImageURI }}
          style={{
            height: 300,
            width: 300,
          }}
          resizeMode = "contain"
        />
      </View>
    <TouchableOpacity
      style={{
        backgroundColor: "#accfde",
        padding: 10,
        width: "50%",
        borderRadius: "5%"
      }}
      onPress={() => navigation.navigate("Grounding")}
    >
      <Text
        style={{
          color: "#000",
          fontsize: 24,
          width: "100%",
          textAlign: "center",
        }}
      >
        Grounding
        </Text>
    </TouchableOpacity>
    <Spacer height={20} />
    <TouchableOpacity
      style={{
        backgroundColor: "#accfde",
        padding: 10,
        width: "50%",
        borderRadius: "5%"
      }}
      onPress={() => navigation.navigate("Deep Breathing")}
    >
      <Text
        style={{
          color: "#000",
          fontsize: 24,
          width: "100%",
          textAlign: "center",
        }}
      >
        Deep Breathing
        </Text>
    </TouchableOpacity>
    <Spacer height={20} />
    <TouchableOpacity
      style={{
        backgroundColor: "#accfde",
        padding: 10,
        width: "50%",
        borderRadius: "5%"
      }}
      onPress={() => navigation.navigate("Resources")}
    >
      <Text
        style={{
          color: "#000",
          fontsize: 24,
          width: "100%",
          textAlign: "center",
        }}
      >
        Resources
        </Text>
    </TouchableOpacity>
    <Spacer height={20} />
  </View>
)

const GroundingScreen = ({ navigation }) => {
  const [displayLoadingPage, setLoadingPage] = useState(true)
  const [displayPageOne, setDisplayPageOne] = useState(false)
  const [displayPageTwo, setDisplayPageTwo] = useState(false)
  const [displayPageThree, setDisplayPageThree] = useState(false)
  const [displayPageFour, setDisplayPageFour] = useState(false)
  const [displayPageFive, setDisplayPageFive] = useState(false)  
  const [displayPageSix, setDisplayPageSix] = useState(false)
  const [displayGroundedPage, setGroundedPage] = useState(false) 
  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFF"
      }}
    >
    { displayLoadingPage &&
      <>
      <Spacer height={30} />
      <View
        style={{
          padding: 20,
          backgroundColor: "#EEEEEE",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#accfde", //
            fontSize: 32,
          }}
        >
          Grounding Exercise
        </Text>
      </View>
      <Spacer height={30} />
      <Image
        style={{
          height: 400,
          width: 300,
          resizeMode: "contain",
        }}
        source={{ uri: mindfullnessImageUri }}
      />
      <Text>Please select an image that speaks to you.</Text>
      <Spacer height={30} />
      <Text numberOfLines={2} style={{ width: "75%", textAlign: "center"}}>
        You will be observing parts of an image that stand out to you the most.
      </Text>
      <Spacer height={30} />
      <Text numberOfLines={3} style={{ width: "75%", textAlign: "center" }}>
        This exercise helps bring you back down to earth when you find yourself
        floating away.
      </Text>
      <Spacer height={30} />
      <TouchableOpacity
        style={{
          backgroundColor: "#accfde",
          padding: 10,
          width: "50%",
          borderRadius: "5%"
        }}
        onPress={() => {
          setLoadingPage(false)
          setDisplayPageOne(true)
        }}
      >
        <Text
          style={{
            color: "#000",
            fontsize: 24,
            width: "100%",
            textAlign: "center",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
      </>
    }
    {
      displayPageOne &&
      <View
        style={{
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFF"
        }}
      >
          <Image
            style={{
              height: 400,
              width: 300,
              resizeMode: "contain",
            }}
            source={{ uri: eyesImageUri }}
          />
          <Spacer height={30} />

        <Text numberOfLines={2} style={{ width: "75%", textAlign: "center" }}>
          Take a look around the room.
        </Text>
          <Spacer height={30} />
        <Text numberOfLines={2} style={{ width: "75%", textAlign: "center" }}>
          Name five things you can see around you.
        </Text>
          <Spacer height={30} />
          <Text style={{ width: "75%", textAlign: "center" }}>
          What is it about each thing that you like or don't like about it?
        </Text>
          <Spacer height={20} />
          <TouchableOpacity
            style={{
              backgroundColor: "#accfde",
              padding: 10,
              width: "50%",
              borderRadius: "5%"
            }}
            onPress={() => {
              setDisplayPageOne(false)
              setDisplayPageTwo(true)
            }}
          >
            <Text
              style={{
                color: "#000",
                fontsize: 24,
                width: "100%",
                textAlign: "center",
              }}
            >
              Continue
        </Text>
          </TouchableOpacity>
      </View>
    }
      {
        displayPageTwo &&
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFF"
          }}
        >

          <Image
            style={{
              height: 400,
              width: 300,
              resizeMode: "contain",
            }}
            source={{ uri: tasteImageUri }}
          />
          <Spacer height={30} />
          <Text numberOfLines={2}>
            What is something that you currently taste?
          </Text>
          <Spacer height={30} />
          <Text>
            Example: "I love the taste of caramel apples."
        </Text>
          <Spacer height={30} />
          <TouchableOpacity
            style={{
              backgroundColor: "#accfde",
              padding: 10,
              width: "50%",
              borderRadius: "5%"
            }}
            onPress={() => {
              setDisplayPageTwo(false)
              setDisplayPageThree(true)
            }}
          >
            <Text
              style={{
                color: "#000",
                fontsize: 24,
                width: "100%",
                textAlign: "center",
              }}
            >
              Continue
        </Text>
          </TouchableOpacity>
        </View>
      }
      {
        displayPageThree &&
        <View style={{          
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          backgroundColor: "#FFF"
        }}>

        <Image
            style={{
              height: 400,
              width: 300,
              resizeMode: "contain",
            }}
            source={{ uri: handImageUri }}
          />
          <Spacer height={30} />
          <Text numberOfLines={2}>
            What are four things that you currently feel?
        </Text>
          <Spacer height={30} />
          <Text>
            Example: "I can feel the soft, fleece blanket against my fingertips"
        </Text>
          <Spacer height={30} />
          <TouchableOpacity
            style={{
              backgroundColor: "#accfde",
              padding: 10,
              width: "50%",
              borderRadius: "5%"
            }}
            onPress={() => {
              setDisplayPageThree(false)
              setDisplayPageFive(true)
            }}
          >
            <Text
              style={{
                color: "#000",
                fontsize: 24,
                width: "100%",
                textAlign: "center",
              }}
            >
              Continue
        </Text>
          </TouchableOpacity>
        </View>
      }
      {
        displayPageFive &&
        <View style={{
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          backgroundColor: "#FFF"
        }}>

            <Image
            style={{
              height: 400,
              width: 300,
              resizeMode: "contain",
            }}
            source={{ uri: noseImageUri }}
          />
          <Spacer height={30} />
          <Text numberOfLines={2}>
            What are two things that you can smell around you?
        </Text>
          <Spacer height={30} />
          <Text>
            Example: "I can smell the dinner my Mom is cooking."
        </Text>
          <Spacer height={30} />
          <TouchableOpacity
            style={{
              backgroundColor: "#accfde",
              padding: 10,
              width: "50%",
              borderRadius: "5%"
            }}
            onPress={() => {
              setDisplayPageFive(false)
              setDisplayPageSix(true)
            }}
          >
            <Text
              style={{
                color: "#000",
                fontsize: 24,
                width: "100%",
                textAlign: "center",
              }}
            >
              Continue
        </Text>
          </TouchableOpacity>
        </View>
      }
      {
        displayPageSix &&
        <View style={{
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          backgroundColor: "#FFF"
        }}>
          <Text numberOfLines={2}>
            What is one thing you can taste? Or what is one taste that you like?
        </Text>
          <Spacer height={30} />
          <Text>
            Example: "I love the taste of caramel apples."
        </Text>
          <Spacer height={30} />
          <TouchableOpacity
            style={{
              backgroundColor: "#accfde",
              padding: 10,
              width: "50%",
              borderRadius: "5%"
            }}
            onPress={() => {
              setDisplayPageSix(false)
              setGroundedPage(true)
            }}
          >
            <Text
              style={{
                color: "#000",
                fontsize: 24,
                width: "100%",
                textAlign: "center",
              }}
            >
              Continue
        </Text>
          </TouchableOpacity>
        </View>
      }
      {
        displayGroundedPage &&
        <>
          <Spacer height={30} />
          <View
            style={{
              padding: 20,
              backgroundColor: "#EEEEEE",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#accfde",
                fontSize: 32,
              }}
            >
              Grounding Exercise
        </Text>
          </View>
          <Spacer height={30} />
          <Image
            style={{
              height: 300,
              width: 300,
            }}
            source={{ uri: groundedImageUri }}
          />
          <Spacer height={50} />
          <Text numberOfLines={3} style={{ width: "75%", textAlign: "center", fontSize: 24 }}>
            We hope this exercise brought you back down to Earth!
      </Text>
      <Spacer height={30} />
      </>
      }
    </View>
  );
}

const DeepBreathingScreen = ({ navigation }) => {
  const [breathingTime, setBreathingTime] = useState(5000)
  const [renderBreathing, setRenderBreathing] = useState(false)
  
  function Breathe() {
    const move = useRef(new Animated.Value(0)).current;
    const textOpacity = useRef(new Animated.Value(1)).current;
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(textOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(move, {
            toValue: 1,
            duration: breathingTime,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(textOpacity, {
            delay: 100,
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(move, {
            delay: 1000,
            toValue: 0,
            duration: breathingTime,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
    const translate = move.interpolate({
      inputRange: [0, 1],
      outputRange: [0, circleWidth / 6],
    });
    const exhale = textOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            width: circleWidth,
            height: circleWidth,
            ...StyleSheet.absoluteFill,
            alignItems: "center",
            justifyContent: "center",
            opacity: textOpacity,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Inhale
          </Text>
        </Animated.View>
        <Animated.View
          style={{
            width: circleWidth,
            height: circleWidth,
            ...StyleSheet.absoluteFill,
            alignItems: "center",
            justifyContent: "center",
            opacity: exhale,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Exhale
          </Text>
        </Animated.View>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
          const rotation = move.interpolate({
            inputRange: [0, 1],
            outputRange: [`${item * 45}deg`, `${item * 45 + 180}deg`],
          });
          return (
            <Animated.View
              key={item}
              style={{
                opacity: 0.1,
                backgroundColor: "purple",
                width: circleWidth,
                height: circleWidth,
                borderRadius: circleWidth / 2,
                ...StyleSheet.absoluteFill,
                transform: [
                  {
                    rotateZ: rotation,
                  },
                  { translateX: translate },
                  { translateY: translate },
                ],
              }}
            ></Animated.View>
          );
        })}
      </View>
    );
  }
  
  return (
    <View>
      <Breathe />     
    </View>
  )
}

const DATA = [
  {
    title: "Coping Mechanisms",
    data: [
      "Practice yoga, listen to music, meditate, get a massage, or learn relaxation techniques", 
      "Eat well-balanced meals", 
      "Limit alcohol and caffeine", 
      "Get enough sleep", 
      "Exercise daily", 
      "Count to 10 slowly",
      "Instead of aiming for perfection, which isn't possible, be proud of however close you get", 
      "Maintain a positive attitude. Make an effort to replace negative thoughts with positive ones", 
      "Volunteer or find another way to be active in your community, which creates a support network and gives you a break from everyday stress.", 
      "Learn what triggers your anxiety. Is it work, family, school, or something else you can identify? Write in a journal when you’re feeling stressed or anxious, and look for a pattern.", 
      "Accept that you cannot control everything. Put your stress in perspective: Is it really as bad as you think?", 
      "Tell friends and family you’re feeling overwhelmed, and let them know how they can help you. Talk to a physician or therapist for professional help."]
  },
  {
    title: "Counseling",
    data: [
      "https://www.psychologytoday.com/us/therapists/", 
      "https://www.betterhelp.com/helpme/"]
  },
  {
    title: "Hotlines",
    data: [
      "National Alliance on Mental Illness (NAMI) Helpline: 1-800-950-NAMI (6264); Available Monday through Friday from 10 a.m. to 6 p.m. EST, this organization provides free information and referrals to treatment programs, support groups, and educational programs. NAMI also offers help for family members, information about jobs programs, and connections to legal representation in your area.", 
      "Substance Abuse and Mental Health Services Administration (SAMHSA) National Helpline: 1-800-662-HELP (4357); SAMHSA’s free, 24/7 hotline provides referrals to therapists, counselors, treatment programs, and support groups in your area. They also have an online behavioral health treatment services locator, so you can find resources for yourself or a loved one who struggles with anxiety or other mental health issues."
    ]
  },
  {
    title: "Hotline Questions",
    data: [
      "Do I have an anxiety disorder? How do I know?", 
      "What steps should I take if I am having an anxiety attack?",
      "Can anxiety attacks be successfully treated?", 
      "Do I need medication to treat my anxiety?", 
      "What are the symptoms of anxiety?", "What happens if I also suffer from other mental health problems, such as depression or substance abuse?", 
      "Do people with anxiety need to go to specialized treatment programs?", 
      "How much does treatment cost?", 
      "Will my insurance cover the cost of treatment?", 
      "What can I do now?"]
  },
]
const styles = StyleSheet.create({

  cardContainer:
  {
    flex: 1,
    width: '50%',
    height: '35%',
  },

  body: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center", 
    justifyContent: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    left: width / 4,
    top: height / 4,
  },


  button: {
    marginTop: 32,
    backgroundColor: "#23A6D9",
    paddingVertical: 12,
    width: 250,
    borderRadius: 12,
    alignItems: "center",
  },
});

const ResourcesScreen = ({ navigation }) => (
  <SafeAreaView // The whole container
    style={{
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16
    }}
  >
    <SectionList // Header
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View style={{
          backgroundColor: "#6699cc",
          padding: 20,
          marginVertical: 8,
          justifyContent: "center",
        }}>
          <Text style={{ // items in the array
            fontSize: 24,
            color: "#000000",
            justifyContent: "center",
          }}>{item}</Text> 
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => <Text style={{ 
        fontSize: 32,
        backgroundColor: "#add8e6",
        color: "#000000",
        justifyContent: "center",
      }}>{title}</Text>} // Section title text
    />
  </SafeAreaView>
);

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Grounding" component={GroundingScreen} />
        <Stack.Screen name="Deep Breathing" component={DeepBreathingScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export function Card() {
  const randomImage =
    images[Math.floor(Math.random() * images.length)];
  console.log(randomImage);

  return (
    <View style={styles.cardContainer}>
      <Image source={randomImage} style={{height: 200, width: 200}}/>
    </View>
  );
}