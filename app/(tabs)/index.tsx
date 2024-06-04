import { useState } from "react";
import { Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar } from "react-native";
const image = require("../../assets/images/w_model.jpg");

export default function HomeScreen() {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={{ padding: 30 }}>
      <StatusBar backgroundColor="blue" barStyle="default"/>
      <ScrollView>
        <Text
          style={{ color: "red", alignSelf: "center", fontWeight: "bold", fontSize: 30 }}>
          Home Screen
        </Text>
        <ImageBackground source={image} style={{ width: 300, height: 300, alignSelf: "center", marginVertical: 10 }}>
          <Text style={{ color: "white", alignSelf: "center" }}>Modal Image</Text>
        </ImageBackground>
        <Pressable onPress={() => console.log("Text Pressed!")
        }>
          <Text style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod commodi eaque eos at, animi cupiditate laudantium assumenda quam accusantium delectus soluta ullam temporibus quae perspiciatis, molestias minus accusamus quo doloremque rerum magnam iusto, saepe illum voluptate? Suscipit debitis repellendus quia numquam temporibus ut! Dolorem pariatur nobis neque iusto provident. Pariatur dicta obcaecati magni quo animi molestiae inventore ab minima quisquam incidunt suscipit temporibus omnis id voluptate amet, blanditiis voluptatibus ex quod voluptatum. Eum praesentium dolores, sequi corporis ad itaque dignissimos iure. Natus maiores alias cum eveniet, aliquid iusto consequatur, incidunt excepturi voluptates dolorem vero est voluptas quos minus officiis beatae. Aperiam, earum provident, consequatur aspernatur harum voluptates vel, tempora labore dolore inventore sed aut quibusdam doloribus dolorum animi cupiditate odit sunt maxime quasi unde eius. Aspernatur voluptas unde accusantium mollitia explicabo natus eveniet, quo sapiente ipsa illum culpa qui enim nemo distinctio quidem? Quas doloribus voluptatem eius aspernatur, nesciunt repellendus voluptatum cumque? Similique impedit velit odio commodi, beatae tempore alias ipsam obcaecati voluptate ut deserunt praesentium dicta consequatur magni inventore porro tempora nisi eaque accusamus facere, error numquam quo. Tempore quibusdam reprehenderit voluptas quae mollitia ratione nostrum explicabo laudantium non sint eius at aliquid, dignissimos ipsum facere in, esse architecto.
          </Text>
        </Pressable>
        <Pressable onPress={() => console.log("Image Pressed!")}>
          <Image source={{ uri: "https://picsum.photos/200/300" }} style={{ width: 300, height: 300, alignSelf: "center", marginVertical: 10 }} />
        </Pressable>
        <Button title="Modal" onPress={() => { console.log("Clicked"); setIsVisible(true) }} color="red" />

        <Modal visible={isVisible}
          onRequestClose={() => setIsVisible(false)}
          animationType="slide">
          <ScrollView>
            <View style={{ backgroundColor: "black", padding: 30 }}>
              <Text
                style={{ color: "skyblue", alignSelf: "center", fontWeight: "bold", fontSize: 30 }}>
                Home Screen
              </Text>
              <ImageBackground source={image} style={{ width: 300, height: 300, alignSelf: "center", marginVertical: 10 }}>
                <Text style={{ color: "white", alignSelf: "center" }}>Modal Image</Text>
              </ImageBackground>
              <Pressable onPress={() => console.log("Text Pressed!")
              }>
                <Text style={{ textAlign: "justify", color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod commodi eaque eos at, animi cupiditate laudantium assumenda quam accusantium delectus soluta ullam temporibus quae perspiciatis, molestias minus accusamus quo doloremque rerum magnam iusto, saepe illum voluptate? Suscipit debitis repellendus quia numquam temporibus ut! Dolorem pariatur nobis neque iusto provident. Pariatur dicta obcaecati magni quo animi molestiae inventore ab minima quisquam incidunt suscipit temporibus omnis id voluptate amet, blanditiis voluptatibus ex quod voluptatum. Eum praesentium dolores, sequi corporis ad itaque dignissimos iure. Natus maiores alias cum eveniet, aliquid iusto consequatur, incidunt excepturi voluptates dolorem vero est voluptas quos minus officiis beatae. Aperiam, earum provident, consequatur aspernatur harum voluptates vel, tempora labore dolore inventore sed aut quibusdam doloribus dolorum animi cupiditate odit sunt maxime quasi unde eius. Aspernatur voluptas unde accusantium mollitia explicabo natus eveniet, quo sapiente ipsa illum culpa qui enim nemo distinctio quidem? Quas doloribus voluptatem eius aspernatur, nesciunt repellendus voluptatum cumque? Similique impedit velit odio commodi, beatae tempore alias ipsam obcaecati voluptate ut deserunt praesentium dicta consequatur magni inventore porro tempora nisi eaque accusamus facere, error numquam quo. Tempore quibusdam reprehenderit voluptas quae mollitia ratione nostrum explicabo laudantium non sint eius at aliquid, dignissimos ipsum facere in, esse architecto.
                </Text>
              </Pressable>
              <Pressable onPress={() => { console.log("Image Pressed!")}}>
                <Image source={{ uri: "https://picsum.photos/200/300" }} style={{ width: 300, height: 300, alignSelf: "center", marginVertical: 10 }} />
              </Pressable>
              <Button title="Modal" onPress={() => { console.log("Clicked"); setIsVisible(true) }} color="red" />
            </View>
          </ScrollView>
        </Modal>
      </ScrollView>
    </View>
  );
}
