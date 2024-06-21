import React, { useRef, useState, useCallback } from "react";
import { SafeAreaView, ScrollView, RefreshControl, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  const [webViewKey, setWebViewKey] = useState(0);
  const [localScript, setLocalScript] = useState(null);
  const webViewRef = useRef(null);
  const scrollViewRef = useRef(null);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setWebViewKey(prevKey => prevKey + 1);
    setRefreshing(false);
  }, []);


  const injectJavaScript = `

    // Function to remove elements
    function removeElementsByClassName(className) {
        var elements = document.getElementsByClassName(className);
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    // Remove the ytm-pivot-bar-item-renderer elements
    var pivotBarItems = document.getElementsByTagName('ytm-pivot-bar-item-renderer');
    for (var i = pivotBarItems.length - 1; i >= 0; i--) {
        var childDiv = pivotBarItems[i].querySelector('.pivot-bar-item-tab.pivot-shorts');
        if (childDiv) {
            pivotBarItems[i].parentNode.removeChild(pivotBarItems[i]);
        }
    }

    // Remove the ytm-reel-shelf-renderer elements
    var reelShelfItems = document.getElementsByTagName('ytm-reel-shelf-renderer');
    for (var i = reelShelfItems.length - 1; i >= 0; i--) {
        reelShelfItems[i].parentNode.removeChild(reelShelfItems[i]);
    }

    true; // Note: this is required, or you'll sometimes get silent failures
 

    (function () {
      var script = document.createElement('script');
      script.src = './adBlocker.js';
      document.body.appendChild(script);


    })();
  `;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            enabled={scrollViewRef.current ? scrollViewRef.current.scrollTop === 0 : true}
          />
        }
      >
        <View style={styles.container}>
          <WebView
            key={webViewKey}
            ref={webViewRef}
            source={{ uri: "https://youtube.com" }}
            onLoadEnd={() => {
              if (webViewRef.current) {
                webViewRef.current.injectJavaScript(injectJavaScript);
              }
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
    height: '100%', // Ensure the WebView takes the full height within the ScrollView
  },
});
