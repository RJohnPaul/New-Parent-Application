import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";

const babyImage = require("../../assets/images/art1.png");
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
          <Text style={styles.title}>Your baby's cues and signals</Text>
          <Image source={babyImage} style={styles.image} />
        </View>

        <View style={styles.content}>
          <Text style={styles.paragraph}>
            If you are opting for baby-led parenting or a schedule that suits
            your baby, his cues and signals will be key to working out what he
            wants to do or what he needs next.
          </Text>
          <Text style={styles.paragraph}>
            They will take a while to learn but you will soon get the hang of
            them.
          </Text>
          <Text style={styles.subheading}>
            Here are a few early signs to look out for.
          </Text>

          <Text style={styles.listTitle}>When he is hungry, he may:</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletPoint}>• Seem restless</Text>
            <Text style={styles.bulletPoint}>• Suck his fist or fingers</Text>
            <Text style={styles.paragraph}>
              Your baby may not be able to speak yet, but they are constantly
              communicating with you through subtle cues and signals, expressing
              their needs, emotions, and preferences in their unique ways. These
              cues are their language, and understanding them is essential to
              ensuring their well-being and strengthening the bond you share.
              For instance, hunger cues can be seen in behaviors like sucking on
              their fingers, rooting (turning their head toward a touch on their
              cheek), or making smacking sounds. 
              </Text>

              <Text style={styles.paragraph}>
              Responding to these early signs
              prevents distress, as crying is usually a late sign of hunger.
              Similarly, when your baby is tired or overstimulated, they might
              yawn, rub their eyes, avoid eye contact, or become fussy. These
              signals are their way of asking for a break or some rest. A baby
              who is happy and content will likely smile, coo, or make relaxed
              movements with their arms and legs, signaling that they are
              comfortable and enjoying their environment. On the other hand,
              fussiness, whimpering, or loud crying may indicate discomfort,
              overstimulation, or a need for comfort and reassurance. As a
              parent, one of your most important tasks is to observe and
              interpret these cues. </Text>

              <Text style={styles.paragraph}>Each baby is unique, and learning to
              understand your child’s specific signals takes time, patience, and
              attention. Over time, you’ll start to notice patterns in their
              behavior that will guide you in meeting their needs effectively.
              Responding to their cues promptly not only helps soothe them but
              also builds trust and emotional security, reinforcing their sense
              of safety in the world. For example, responding to hunger cues
              with feeding or providing comfort when they reach out will teach
              your baby that their needs are heard and met. This consistent
              responsiveness strengthens the emotional connection between you
              and your baby, which is crucial for their development.</Text>
              
              <Text style={styles.paragraph}>
               It’s also important to remember that interpreting baby cues is not always
              straightforward, and sometimes it may take trial and error to
              understand what your baby needs. They might cry because they’re
              tired, overstimulated, hungry, or simply need a cuddle. In these
              moments, staying calm and flexible is key. Your baby’s signals are
              not only a way to express their needs but also a way to
              communicate with you and build a two-way relationship.</Text>
              
              <Text style={styles.paragraph}> By paying
              attention, responding with patience, and trusting your instincts,
              you’re creating an environment where your baby feels safe, loved,
              and understood. This early communication lays the foundation for a
              strong bond, setting the stage for a lifelong relationship filled
              with trust and connection.
            </Text>
          </View>
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
