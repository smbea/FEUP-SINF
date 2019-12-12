var axios = require('axios');
const FormData = require('form-data');

async function getAcessToken(grapeCompany, wineCompany) {

  let grapeData = generateGrapeBody(grapeCompany);
  let wineData = generateWineBody(wineCompany);

  await sendTokenRequest('post', 'https://identity.primaverabss.com/connect/token', grapeData).then((res) => {
    global.grapeToken = "Bearer " + res.data.access_token;
  }).catch((err) => {
    console.log(err);
  });

  await sendTokenRequest('post', 'https://identity.primaverabss.com/connect/token', wineData).then((res2) => {
    global.wineToken = "Bearer " + res2.data.access_token;
  }).catch((err) => {
    console.log(err);
  });
}

function sendRequest(method, url, company, bodyData) {
  var headers = { ...new FormData().getHeaders };
  if (company === 1) {
    headers['Authorization'] = global.grapeToken;
  } else if (company === 2) {
    headers['Authorization'] = global.wineToken;
  }

  return axios({
    url: url,
    method: method,
    data: bodyData,
    responseType: 'json',
    headers: headers
  });
}

function sendTokenRequest(method, url, bodyData) {
  return axios({
    url: url,
    method: method,
    data: bodyData,
    headers: { ...bodyData.getHeaders() }
  });

}

function generateGrapeBody(grapeCompany) {
  let bodyData = new FormData();

  bodyData.append("client_id", grapeCompany.client_id);
  bodyData.append("client_secret", grapeCompany.secret_id);
  bodyData.append("grant_type", "client_credentials");
  bodyData.append("scope", "application");

  return bodyData;
}

function generateWineBody(wineCompany) {
  let bodyData = new FormData();

  bodyData.append("client_id", wineCompany.client_id);
  bodyData.append("client_secret", wineCompany.secret_id);
  bodyData.append("grant_type", "client_credentials");
  bodyData.append("scope", "application");

  return bodyData;
}




module.exports = { getAcessToken, sendRequest };
