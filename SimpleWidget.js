import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SimpleWidget = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
      <View style={styles.widgetContainer}>
        <Text>Meu Primeiro Widget</Text>
      </View>
    </View>
  );
};

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Cabeçalho - amo meus cachorros</Text>
    </View>
  );
};

const Body = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Corpo - theo</Text>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Rodapé - nick</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#e0e0e0',
    padding: 20,
    alignItems: 'center',
    flex: 1,
  },
  footer: {
    backgroundColor: '#c0c0c0',
    padding: 20,
    alignItems: 'center',
  },
  widgetContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 560,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
  },
});

export default SimpleWidget;