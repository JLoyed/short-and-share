var url = 'https://www.googleapis.com/urlshortener/v1/url';
var key = 'AIzaSyBiRNe53MwpzxjO0zMNrSfqM9z6jztMsr8'
GetShortUrl(url, key);
var getUrl = chrome.tabs.getSelected(null, function(tab) {
  return tab.url;
});

function GetShortUrl(restUrl, authKey) {
  var longUrl = getUrl
  var request = '{longUrl: "' + getUrl + '"}';
  $.ajax({
    type: 'POST',
    url: restUrl + '?key=' + authKey,
    contentType: 'application/json',
    data: request,
    dataType: 'JSON',
    success: function(data) {
      $('#url').text(data.id);
    },
    error: function(er) {
      $('#url').text(er);
    }
  });
};
