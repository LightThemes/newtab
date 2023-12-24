window.onkeyup = keyup;
var inputTextValue;

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
  if (result == "twitch") {window.open("https://www.twitch.tv", "_blank"); clearInput()}
  else if (result == "youtube") {window.open("https://www.youtube.com/", "_blank"); clearInput()}
  else if (result == "osu") {window.open("https://osu.ppy.sh/users/16780466", "_blank"); clearInput()}
  else if (result == "rankings") {window.open("https://osu.ppy.sh/rankings/osu/performance", "_blank"); clearInput()}
  else if (result == "skinning") {window.open("https://osu.ppy.sh/wiki/en/Skinning", "_blank"); clearInput()}
  else if (result == "github") {window.open("https://github.com/LightThemes?tab=repositories", "_blank"); clearInput()}
  else if (result == "mal") {window.open("https://myanimelist.net/profile/LightTheme", "_blank"); clearInput()}
  else if (result == "aniwave") {window.open("https://aniwave.to/home", "_blank"); clearInput()}
  else if (result == "amazon") {window.open("https://www.amazon.com/", "_blank"); clearInput()}
  else if (result == "bestbuy") {window.open("https://www.bestbuy.com/", "_blank"); clearInput()}
  else if (result == "wiki") {window.open("https://warframe.fandom.com/wiki/WARFRAME_Wiki", "_blank"); clearInput()}
  else if (result == "market") {window.open("https://warframe.market/", "_blank"); clearInput()}
  else if (result == "tierlist") {window.open("https://overframe.gg/tier-list/melee-weapons/", "_blank"); clearInput()}
  else if (result == "xqc") {window.open("https://twitch.tv/xqc", "_blank"); clearInput()}
  else if (result == "poke") {window.open("https://twitch.tv/pokelawls", "_blank"); clearInput()}
  else if (result == "btmc") {window.open("https://twitch.tv/btmc", "_blank"); clearInput()}
  else if (result == "charlie") {window.open("https://www.youtube.com/@penguinz0/videos", "_blank"); clearInput()}
  else if (result == "ntts") {window.open("https://www.youtube.com/@NoTextToSpeech/videos", "_blank"); clearInput()}
  else if (result == "stew") {window.open("https://www.youtube.com/@sst3w/videos", "_blank"); clearInput()}
  else {window.open("https://www.google.com/search?q=" + result, "_blank"); clearInput()}
}

function keyup(e) {
  inputTextValue = e.target.value;
  if (e.keyCode == 13) {
    if (inputTextValue == "") {
      return
    } else {
      search(e);
    }
  }
}
