import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import colors from '../constants/colors';
import SaleBanner from '../../assets/sale_banner.jpg';
import Steak from '../../assets/steak.jpg';
import { FontAwesome5 } from '@expo/vector-icons';

interface PItem {
  title: string;
  description: string;
  price: string;
}

const Home = ({ navigation }: any) => {
  const items = [
    {
      title: 'Steak',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$150',
    },
    {
      title: 'Chicken',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$220',
    },
    {
      title: 'Pork',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$180',
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <FontAwesome5 name={'search'} solid />
          <TextInput style={styles.input} placeholder='Search' />
        </View>
        {/*** Banner***/}
        <View style={styles.bannerContainer}>
          <View style={styles.bannerItem}>
            <Text style={styles.bannerTitle}>Food Delivery</Text>
            <Text style={styles.bannerSubtitle}>Craving? Order now!</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <View style={styles.bannerTwoItems}>
              <Text style={styles.bannerTitle}>Buy items!</Text>
              <Text style={styles.bannerSubtitle}>Grocery now!</Text>
            </View>
            <View style={styles.bannerTwoItems}>
              <Text style={styles.bannerTitle}>Need a rider?</Text>
              <Text style={styles.bannerSubtitle}>Book now!</Text>
            </View>
          </View>
        </View>
        <View>
          <Image style={styles.bannerImg} source={SaleBanner} />
        </View>
        <View style={styles.bannerBtnContainer}>
          <Pressable style={styles.bannerBtnSelected}>
            <Text style={styles.bannerBtnTextSelected}>Text</Text>
          </Pressable>
          <Pressable style={styles.bannerBtn}>
            <Text>Text</Text>
          </Pressable>
          <Pressable style={styles.bannerBtn}>
            <Text>Text</Text>
          </Pressable>
          <Pressable style={styles.bannerBtn}>
            <Text>Text</Text>
          </Pressable>
        </View>
        {/*** Popular items***/}
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 10 }}>
            Popular Items
          </Text>
          <View style={{ gap: 10 }}>
            {items.map((item, index) => {
              return (
                <ItemCard
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  key={index}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const ItemCard = ({ title, description, price }: PItem) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#B0B0B0',
        padding: 10,
        borderRadius: 5,
      }}
    >
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text>{description}.</Text>
        <Text style={styles.itemPrice}>{price}</Text>
      </View>
      <View style={styles.itemImgContainer}>
        <Image source={Steak} style={styles.itemImg} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  wFull: {
    width: '100%',
  },
  bannerContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    paddingBottom: 10,
  },
  bannerItem: {
    borderColor: colors.primary,
    borderWidth: 4,
    // borderStyle: 'solid',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  bannerTwoItems: {
    borderColor: colors.primary,
    borderWidth: 4,
    // borderStyle: 'solid',
    alignItems: 'center',
    padding: 10,
    flexBasis: '48%',
    borderRadius: 5,
  },
  bannerTitle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 18,
  },
  bannerSubtitle: {
    textTransform: 'uppercase',
    fontSize: 18,
  },
  bannerImg: {
    width: '100%',
    height: 120,
    borderColor: 'black',
    borderWidth: 1,
    // borderStyle: 'solid',
  },
  bannerBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  bannerBtn: {
    borderRadius: 5,
    borderWidth: 1,
    color: colors.black,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 6,
  },
  bannerBtnSelected: {
    borderRadius: 5,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 6,
  },
  bannerBtnTextSelected: {
    color: colors.white,
  },
  itemImg: {
    width: '100%',
    height: 120,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  itemPrice: {
    fontWeight: 'bold',
  },
  itemTextContainer: {
    flexBasis: '50%',
    justifyContent: 'space-between',
  },
  itemImgContainer: {
    flexBasis: '50%',
  },
});

export default Home;
