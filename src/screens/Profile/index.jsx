import { View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
    const navigation = useNavigation();

  return (
    <View style= {styles.container}>
    <Text>Profile</Text>

    <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
      <Text>Home</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Contact")}>
      <Text>Contact</Text>
    </TouchableOpacity>

    </View>
  )
}