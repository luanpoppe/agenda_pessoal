const CLIENT_ID = "277984336083-u5qklmlcp5e8q4fb5dq2l3efh4mpahpc.apps.googleusercontent.com"
const API_KEY = "AIzaSyAzNIBBJePGkp9jgtCl8XmXsL9FBtxjb_s"
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/calendar';

let gapiInited = false;
let gisInited = false;

function gapiLoaded() {
  gapi.load('client', initializeGapiClient);
}

/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */
async function initializeGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
  // maybeEnableButtons();
}

function gisLoaded() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: '', // defined later
  });
  gisInited = true;
  // maybeEnableButtons();
}


function createGoogleEvent(eventDetails) {
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      throw (resp);
    }
    await scheduledEvent(eventDetails)
  }
  if (gapi.client.getToken() === null) {
    tokenClient.requestAccessToken({ prompt: 'consent' });
  } else {
    tokenClient.requestAccessToken({ prompt: '' });
  }
}

function scheduledEvent(eventDetails) {
  const event = {
    summary: "Google I/0 2015",
    location: "whatever location",
    description: "descrição "
  }
}

const request = gapi.client.calendar.events.insert({
  calendarId: "primary",
  resource: event
})


