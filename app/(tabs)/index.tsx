import { Text, View, Image, ImageBackground, ScrollView } from "react-native";
const image = require("../../assets/images/w_model.jpg");

export default function HomeScreen() {
  return (
    <View style={{padding:30}}>
     <ScrollView>
     <Text
        style={{ color: "red",alignSelf:"center", fontWeight: "bold", fontSize: 30 }}>
        Home Screen
      </Text>
      <ImageBackground source={image} style={{width:300, height:300,alignSelf:"center",marginVertical:10}}>
        <Text style={{color:"white",alignSelf:"center"}}>Modal Image</Text>
      </ImageBackground>
      <Text style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod commodi eaque eos at, animi cupiditate laudantium assumenda quam accusantium delectus soluta ullam temporibus quae perspiciatis, molestias minus accusamus quo doloremque rerum magnam iusto, saepe illum voluptate? Suscipit debitis repellendus quia numquam temporibus ut! Dolorem pariatur nobis neque iusto provident. Pariatur dicta obcaecati magni quo animi molestiae inventore ab minima quisquam incidunt suscipit temporibus omnis id voluptate amet, blanditiis voluptatibus ex quod voluptatum. Eum praesentium dolores, sequi corporis ad itaque dignissimos iure. Natus maiores alias cum eveniet, aliquid iusto consequatur, incidunt excepturi voluptates dolorem vero est voluptas quos minus officiis beatae. Aperiam, earum provident, consequatur aspernatur harum voluptates vel, tempora labore dolore inventore sed aut quibusdam doloribus dolorum animi cupiditate odit sunt maxime quasi unde eius. Aspernatur voluptas unde accusantium mollitia explicabo natus eveniet, quo sapiente ipsa illum culpa qui enim nemo distinctio quidem? Quas doloribus voluptatem eius aspernatur, nesciunt repellendus voluptatum cumque? Similique impedit velit odio commodi, beatae tempore alias ipsam obcaecati voluptate ut deserunt praesentium dicta consequatur magni inventore porro tempora nisi eaque accusamus facere, error numquam quo. Tempore quibusdam reprehenderit voluptas quae mollitia ratione nostrum explicabo laudantium non sint eius at aliquid, dignissimos ipsum facere in, esse architecto.</Text>
      <Image source={{uri:"https://picsum.photos/200/300"}} style={{width:300,height:300,alignSelf:"center"}}/>
     </ScrollView>
    </View>
  );
}
