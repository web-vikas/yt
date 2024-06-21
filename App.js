import React, { useState, useCallback } from "react";
import {
  SafeAreaView,
  ScrollView,
  RefreshControl,
  StyleSheet,
  View,
} from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  const [webViewKey, setWebViewKey] = useState(0);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Refresh WebView by changing the key
    setWebViewKey((prevKey) => prevKey + 1);
    setRefreshing(false);
  }, []);

  const injectedJavaScript = `
  // Function to remove elements
  function removeElementsByClassName(className) {
      var elements = document.getElementsByClassName(className);
      while (elements.length > 0) {
          elements[0].parentNode.removeChild(elements[0]);
      }
          
  }
document.getElementsByTagName(' ytm-reel-shelf-renderer').remove()

  // Remove the ytm-pivot-bar-item-renderer elements
  var pivotBarItems = document.getElementsByTagName('ytm-pivot-bar-item-renderer');
  for (var i = pivotBarItems.length - 1; i >= 0; i--) {
      var childDiv = pivotBarItems[i].querySelector('.pivot-bar-item-tab.pivot-shorts');
      if (childDiv) {
          pivotBarItems[i].parentNode.removeChild(pivotBarItems[i]);
      }
  }

  true; 
  `;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          <WebView
            key={webViewKey}
            source={{ uri: "https://youtube.com" }}
            injectedJavaScript={injectedJavaScript}
            onMessage={(event) => {
              console.log(event.nativeEvent.data);
            }}
            style={styles.webview}
          />
        </View>
      </ScrollView>
      <StatusBar hidden />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    height: "100%", // Ensure the WebView takes the full height within the ScrollView
  },
});
