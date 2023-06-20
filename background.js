chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("youtube.com/shorts")) {
     
        
      chrome.tabs.create(
        { url: "https://drive.google.com/file/d/1qTmt0qR_VP6geGUk1WE7IO7-ydB1HVHN/view?usp=sharing" }
      );

      chrome.tabs.getCurrent(function(tab) {
        chrome.tabs.remove(tabId, function(){});
    });

    }
  });



  //https://drive.google.com/file/d/1qTmt0qR_VP6geGUk1WE7IO7-ydB1HVHN/view?usp=sharing
