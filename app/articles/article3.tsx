import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";

const babyImage = require("../../assets/images/art3.png");
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
          <Text style={styles.title}>A letter to you, from your baby</Text>
          <Image source={babyImage} style={styles.image} />
        </View>

        <View style={styles.content}>
          <Text style={styles.subheading}>
            This is a letter that can be possibly written by your baby!!
          </Text>

          <Text style={styles.paragraph}>
            Dear Mommy and Daddy, Hi, it’s me—your little bundle of joy. I can’t
            talk yet, but I have so much I want to tell you. Life is new,
            exciting, and sometimes a little overwhelming for me. Thank you for
            being my safe place, even when I don’t quite know how to show it.
            Sometimes, I cry—not because you’re doing something wrong, but
            because it’s the only way I know how to tell you I need something.</Text>
           
            <Text style={styles.paragraph}> Maybe I’m hungry, tired, or just want to feel the comfort of your
            arms. Please don’t feel upset or worry too much when you can’t
            figure out what I need right away. You’re learning my language, and
            I’m learning yours. We’re a team, and it’ll get easier with time.
            There are days when I don’t want to eat, even though you’ve worked
            so hard to prepare my food. It’s not that I don’t appreciate it—I
            promise I do! My tiny tummy has its own schedule, and sometimes I’m
            just not ready. </Text>
            <Text style={styles.paragraph}>Thank you for being patient and trying again later.
            When I look at you and smile, it’s my way of saying, “I love you.”
            Your voice, your smell, and your touch are my world right now. I
            don’t care if your hair is messy or if you haven’t figured
            everything out yet—you’re perfect to me. I know I keep you up at
            night and make your days unpredictable. Please know it’s not on
            purpose. I’m adjusting to this big, bright world, and I need your
            guidance and comfort as I learn. When you rock me to sleep, hum a
            lullaby, or simply hold me close, you’re teaching me about love and
            trust. You might sometimes feel like you’re not doing enough, but to
            me, you’re doing everything. Every smile, cuddle, and kiss is
            exactly what I need to grow into the person I’m meant to be.</Text> 
            <Text style={styles.paragraph}>I know
            it’s hard, and some days you might feel exhausted, but I hope you
            remember you’re my hero. So, thank you—for loving me, for trying
            your best, and for being there even when things feel tough. You’re
            doing an amazing job, and I couldn’t ask for better parents. Love,
            Your Baby ❤️
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
