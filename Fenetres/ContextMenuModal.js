import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import FDS from '../commun/feuille_de_style.json'

const ContextMenuModal = ({ isVisible, handleMenuSelection, closeModal }) => {

    return (
        <Modal isVisible={isVisible} animationIn="slideInUp" animationOut="slideOutDown">
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Quelle action souhaitez-vous réaliser ?</Text>

                <TouchableOpacity
                    style={styles.menuOption}
                    onPress={() => handleMenuSelection('takeCoordinates')} >
                    <Text style={styles.menuOptionText}>Trouver autour</Text>
                </TouchableOpacity>
                <TextInput
                    style={{ textAlign: 'center', marginBottom: 10, borderRadius: 10, borderWidth: 1, borderColor: 'gray', padding: 5 }}
                    keyboardType="numeric"
                    placeholder="km"
                />


                <TouchableOpacity
                    style={[styles.menuOption, { backgroundColor: 'red' }]}
                    onPress={closeModal}
                >
                    <Text style={styles.menuOptionText}>Annuler</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create(FDS);

export default ContextMenuModal;
