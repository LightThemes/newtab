window.onkeyup = keyup;
var inputTextValue;

function list(result) {
  if (result == "twitch") {openURL("https://www.twitch.tv");}
  else if (result == "youtube") {openURL("https://www.youtube.com/");}
  else if (result == "osu") {openURL("https://osu.ppy.sh/users/16780466");}
  else if (result == "rankings") {openURL("https://osu.ppy.sh/rankings/osu/performance");}
  else if (result == "skinning") {openURL("https://osu.ppy.sh/wiki/en/Skinning");}
  else if (result == "github") {openURL("https://github.com/LightThemes?tab=repositories");}
  else if (result == "mal") {openURL("https://myanimelist.net/profile/LightTheme");}
  else if (result == "aniwave") {openURL("https://aniwave.to/home");}
  else if (result == "amazon") {openURL("https://www.amazon.com/");}
  else if (result == "bestbuy") {openURL("https://www.bestbuy.com/");}
  else if (result == "wiki") {openURL("https://warframe.fandom.com/wiki/WARFRAME_Wiki");}
  else if (result == "market") {openURL("https://warframe.market/");}
  else if (result == "tierlist") {openURL("https://overframe.gg/tier-list/melee-weapons/");}
  else if (result == "xqc") {openURL("https://twitch.tv/xqc");}
  else if (result == "poke") {openURL("https://twitch.tv/pokelawls");}
  else if (result == "btmc") {openURL("https://twitch.tv/btmc");}
  else if (result == "charlie") {openURL("https://www.youtube.com/@penguinz0/videos");}
  else if (result == "ntts") {openURL("https://www.youtube.com/@NoTextToSpeech/videos");}
  else if (result == "stew") {openURL("https://www.youtube.com/@sst3w/videos");}
  
}

function autoOpen() {
  var item = document.getElementById("searchTxt").value;
  result = item.toLowerCase();
  if (item.includes("https://") || item.includes("http://") && item.indexOf(".") !== -1) {window.location = item; return};
  if (item.indexOf(".") !== -1) {window.location = "https://" + item; return}
  list(result);
}

function rafAsync() {
  return new Promise(resolve => {
      requestAnimationFrame(resolve);
  })
};

function checkElement(selector) {
    if (document.querySelector(selector) === null) {
        return rafAsync().then(() => checkElement(selector));
    } else {
        return Promise.resolve(true);
    }
};

function clearInput() {
  checkElement("#searchTxt").then((element) => {
    document.getElementById("searchTxt").value = "";
  })
};

function openURL(link) {
  window.location = link;
}

document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    return
  } else {
    clearInput();
  }
});

function search(e) {
  inputTextValue = e.target.value;
  result = inputTextValue.toLowerCase();
  if (result == "twitch") {openURL("https://www.twitch.tv");}
  else if (result == "youtube") {openURL("https://www.youtube.com/");}
  else if (result == "osu") {openURL("https://osu.ppy.sh/users/16780466");}
  else if (result == "rankings") {openURL("https://osu.ppy.sh/rankings/osu/performance");}
  else if (result == "skinning") {openURL("https://osu.ppy.sh/wiki/en/Skinning");}
  else if (result == "github") {openURL("https://github.com/LightThemes?tab=repositories");}
  else if (result == "mal") {openURL("https://myanimelist.net/profile/LightTheme");}
  else if (result == "aniwave") {openURL("https://aniwave.to/home");}
  else if (result == "amazon") {openURL("https://www.amazon.com/");}
  else if (result == "bestbuy") {openURL("https://www.bestbuy.com/");}
  else if (result == "wiki") {openURL("https://warframe.fandom.com/wiki/WARFRAME_Wiki");}
  else if (result == "market") {openURL("https://warframe.market/");}
  else if (result == "tierlist") {openURL("https://overframe.gg/tier-list/melee-weapons/");}
  else if (result == "xqc") {openURL("https://twitch.tv/xqc");}
  else if (result == "poke") {openURL("https://twitch.tv/pokelawls");}
  else if (result == "btmc") {openURL("https://twitch.tv/btmc");}
  else if (result == "charlie") {openURL("https://www.youtube.com/@penguinz0/videos");}
  else if (result == "ntts") {openURL("https://www.youtube.com/@NoTextToSpeech/videos");}
  else if (result == "stew") {openURL("https://www.youtube.com/@sst3w/videos");}
  else {openURL("https://www.google.com/search?q=" + result);}
}

function keyup(e) {
  inputTextValue = e.target.value;
  if (e.keyCode == 13) {
    if (/^\s*$/.test(inputTextValue)) {return};
    if (inputTextValue.includes("https://") && inputTextValue.indexOf(".") !== -1) {window.location = inputTextValue; return};
    if (inputTextValue.indexOf(".") !== -1) {window.location = "https://" + inputTextValue; return}
    else {
      if (~inputTextValue.indexOf("+")) {
        const newStr = inputTextValue.replace("+", "+%2B+");
        const removeSpStr = newStr.replace(/\s/g, "");
        window.location = "https://www.google.com/search?q=" + removeSpStr;
      } else {
        search(e);
      }
    }
  }
}
