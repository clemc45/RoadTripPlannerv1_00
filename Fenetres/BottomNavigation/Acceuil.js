// Écran d'accueil

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'; // Importez le composant Text de react-native
import FDS from '../../commun/feuille_de_style.json'


function AccueilScreen() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'space-around',
        }}>
            {/* Utilisez le composant Text pour afficher du texte */}
            <TouchableOpacity
                style={styles.menuOption}
            >
                <Text style={styles.menuOptionText}>Endroits à visiter autour de moi</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuOption}
            >
                <Text style={styles.menuOptionText}>Iitinéraires à découvrir</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuOption}
            >
                <Text style={styles.menuOptionText}>Nous contacter</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create(FDS);


export default AccueilScreen;