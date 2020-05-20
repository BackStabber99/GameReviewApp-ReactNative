import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import RootDrawerNavigator from './routes/drawer';


export default function App() {
  /*
  can make it inot a method as well and use a state as flag to keey a track of it
    
    const [fontsaLoaded,setFontLoaded]=useState(false);
  
    const get fonts=()=>Font.loadasync({
    key/fontanme:require("site or web link")
    })
    */
  let [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });



  if (fontsLoaded)
    return (
      <RootDrawerNavigator />
    );
  else {
    return (
      <AppLoading />
      //<AppLoading startAsync={getFonts} onfinish{()=>setFontsLoaded(true)}
    )
  }
}
