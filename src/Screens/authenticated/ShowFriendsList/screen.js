import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  BackHandler,
  View,
  TouchableOpacity,
  Text,
  Button,
  Image,
  StatusBar,
  ActivityIndicator,
  DrawerLayoutAndroid,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {SearchBar,Icon } from 'react-native-elements';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {FlatList, TextInput} from 'react-native-gesture-handler';


const Item = ({ item,set,requestedFriends,requested }) => {
  
  return (
    <View style={styles.inside}>
      <View
        style={{
          width: '100%',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{width: '15%'}}>
          <Image
            style={styles.roundImg}
            source={{uri: item.picture.medium}}></Image>
        </View>
        <View style={{width: '57%', justifyContent: 'center'}}>
          <Text style={styles.text}>
            {item.name.first + ' ' + item.name.last}
          </Text>
          <Text
            style={{marginLeft: 10, color: 'dodgerblue', fontWeight: '600'}}>
            17 mutual friends
          </Text>
        </View>
        <View style={styles.addTextView}>
          {requested.length>0 ? (
            <TouchableOpacity
              style={{
                width: 100,
                height: 35,
              marginRight:10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="check" type="entypo" color="green"></Icon>
              <Text style={{color: 'green', fontSize: 15, fontWeight: '600'}}>
                Request sent
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() =>
                set([
                  ...requestedFriends,
                  {name: item.name.first + ' ' + item.name.last},
                ])
              }
              style={{
                borderColor: 'red',
                borderRadius: 20,
                width: 100,
                height: 35,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'red'}}>Add friend</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
const ShowFriendsList = (props) => {

  const [search, onChangeText] = useState('');
  const [clicked, setClicked] = useState(false);
  const [requestedFriends, setRequestedFriends] = useState([]);
  useEffect(() => {
    props.showList();
  },[])
 
  
  const renderItem = ({ item, index }) => {
    const requested= requestedFriends.filter(data =>
        {
         return data = data.name == (item.name.first+" "+item.name.last)
          })
    if (search && search.length > 0)
    {
      if ((item.name.first + " " + item.name.last).toLowerCase().includes(search.toLowerCase()))
      {
        return <Item item={item} requested={requested} requestedFriends={requestedFriends} set={setRequestedFriends}></Item>
      }
    else
      {
        return  null
      }
      }
    return <Item item={item} requested={requested} requestedFriends={requestedFriends} set={setRequestedFriends}/>;
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Suggested Friends</Text>
      <View>
        <SearchBar
          placeholder="Search"
          value={search}
          containerStyle={{
            backgroundColor: 'white',
            borderTopColor: 'white',
            borderBottomColor: 'white',
            width: '100%',
          }}
          onChangeText={(text) => onChangeText(text)}
          lightTheme
          round
          inputStyle={{color: 'black'}}
          inputContainerStyle={{
            width: '98%',
            backgroundColor: 'white',
            borderColor: 'gray',
            borderWidth: 1,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            borderRadius: 40,
          }}
        />
      </View>

      {props.loading ? (
        <ActivityIndicator size="large" color="gray" />
      ) : (
         
        <FlatList
          style={{flex: 1, width: '100%', marginTop: 10}}
          data={props.friendsList}
          renderItem={renderItem}
          keyExtractor={(item, index) => item + index}
          extraData={clicked}></FlatList>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },

  text: {
    fontSize: 20,
    padding: 10,

  },
  headerText: {
    fontSize: 25,  
    padding: 10,
    fontWeight:"500",
  },
  roundImg: {
    width: 50,
    height: 50,
    borderRadius:50,
  },
  addTextView: {
    flex: 3,
    width: "28%",
    alignItems: "flex-end",
 flexDirection:"row",
  justifyContent:"center",
    marginRight:10,
},
  inside: {
    flexDirection:"row",
    marginVertical: 8,
    borderRadius:15,
    width: "100%",
    padding:10,
   
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  button: {
    elevation: 2,
    padding: 15,
    borderRadius: 10,
    marginTop:10,
    backgroundColor: '#f9c2ff',
  },
  BarStyle: {
    
  },
 
});

export default ShowFriendsList;
