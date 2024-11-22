import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";

const babyImage = require("../../assets/images/art2.png");
const router = useRouter();

export default function BabyCuesPage() {
  return (
    <ScreenWrapper bg="white">
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <MaterialIcons
            name="cancel"
            size={30}
            color="#000"
            onPress={() => router.back()}
          />
        </View>

        <View style={styles.headerText}>
          <Text style={styles.title}>
            How to stay relaxed when your baby wont't eat
          </Text>
          <Image source={babyImage} style={styles.image} />
        </View>

        <View style={styles.content}>
          <Text style={styles.paragraph}>
            It’s natural to feel worried when your baby refuses to eat, but
            staying calm is essential for both you and your baby. Babies’
            appetites often fluctuate due to growth spurts, teething, or simply
            a lack of hunger, and they typically self-regulate their intake.
          </Text>
          <Text style={styles.paragraph}>
            Focus on their overall nutrition over a week rather than one meal,
            and create a positive mealtime environment without pressure or
            force.
          </Text>
          <Text style={styles.subheading}>Tips and ways:</Text>

          <Text style={styles.paragraph}>
            When your baby refuses to eat, it’s natural to feel concerned or
            frustrated, but staying calm is essential for maintaining a positive
            mealtime environment. Babies’ appetites often fluctuate due to
            normal factors such as growth spurts, teething, or simply not being
            hungry, and they are typically good at self-regulating how much food
            they need. It’s helpful to focus on their overall food intake over
            the course of a day or week rather than stressing about a single
            meal.</Text> 
            <Text style={styles.paragraph}>Creating a consistent routine for meals and snacks can help
            regulate their hunger cues, while avoiding constant grazing ensures
            they come to the table ready to eat. Offer a variety of healthy
            foods in small portions and allow your baby to choose what and how
            much they want to eat, as this gives them a sense of control and
            reduces resistance. Avoid pressuring or forcing them to eat, as this
            can create a negative association with food and make mealtimes more
            challenging. Instead, keep the atmosphere light and enjoyable—smile,
            talk, or sing to make eating a pleasant experience. If they refuse a
            meal, don’t panic or insist; they may simply not be hungry and are
            likely to make up for it later.</Text>
            <Text style={styles.paragraph}> Take a step back if you feel stress
            rising, practice deep breathing, or ask another caregiver to take
            over for a moment. Remember, this is often just a phase, and babies
            are naturally intuitive eaters. Trust their ability to signal when
            they are hungry or full. If you have ongoing concerns about their
            eating habits or growth, consulting a pediatrician or a pediatric
            dietitian can provide reassurance and tailored advice.</Text>
            <Text style={styles.paragraph}> Staying
            patient and calm will help your baby develop a healthy relationship
            with food and foster a more enjoyable mealtime experience for both
            of you.
          </Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  header: {
    marginBottom: 30,
  },
  headerText: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0078A4",
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  content: {
    paddingHorizontal: 10,
  },
  paragraph: {
    fontSize: 16,
    color: "#333",
    marginBottom: 19,
    lineHeight: 24,
  },
  subheading: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
    color: "#333",
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    color: "#333",
  },
  bulletList: {
    marginTop: 5,
    paddingLeft: 10,
  },
  bulletPoint: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
});
