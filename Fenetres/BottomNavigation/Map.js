// Écran de la carte
import React, { useState } from 'react';
import { Text, View } from 'react-native'; // Importez le composant Text de react-native
import MapView from 'react-native-maps';
import ContextMenuModal from '../ContextMenuModal';
import PlacerPoints from '../../Fonctions/MapViewComponent';



function MapScreen() {
    const [selectedCoordinate, setSelectedCoordinate] = useState(null);
    const [isMenuVisible, setMenuVisible] = useState(false);


    // Gérer le long clic sur la carte
    const handleMapLongPress = (e) => {
        const coordinate = e.nativeEvent.coordinate;
        setSelectedCoordinate(coordinate); // Stocker les coordonnées sélectionnées
        setMenuVisible(true); // Afficher le menu contextuel
        console.log('Long Press Coordinate:', coordinate);
    };

    // Gérer la sélection d'une option dans le menu contextuel
    const handleMenuSelection = (action) => {
        if (action === 'takeCoordinates' && selectedCoordinate) {
            console.log('Coordonnées sélectionnées:', selectedCoordinate);
            // Faites quelque chose avec les coordonnées (par exemple, les enregistrer)
        }
        setMenuVisible(false); // Cacher le menu contextuel
    };

    // Fermer le menu contextuel
    const closeModal = () => {
        setMenuVisible(false);
    }

    return (
        <View style={{ flex: 1 }} >
            {/* Utilisez le composant Text pour afficher du texte */}
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 47.8566,
                    longitude: 2.3522,
                    latitudeDelta: 10,
                    longitudeDelta: 10,
                }}

                onLongPress={handleMapLongPress}

            >
                <PlacerPoints />
            </MapView>



            {/* Menu contextuel */}
            <ContextMenuModal
                isVisible={isMenuVisible}
                handleMenuSelection={handleMenuSelection}
                closeModal={closeModal}

            />
        </View>
    );
}

export default MapScreen;