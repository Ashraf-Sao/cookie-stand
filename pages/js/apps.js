'use strict';
document.getElementById(form)

let workingHours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
function Cookies(name, minCust, maxCust, averageCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookies = averageCookies;
  this.cookiesPerHourArr = [];
  this.total = 0;
};


Cookies.prototype.custPerHour = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};


Cookies.prototype.cookiesPerHour = function () {
  return Math.ceil(this.custPerHour(this.minCust, this.maxCust) * this.averageCookies);
};


Cookies.prototype.pushCustPerHourArr = function () {
  this.cookiesPerHourArr.push(this.cookiesPerHour());
};


const parentElement = document.getElementById('salmon-cookies');
let tableElement = document.createElement('table');
parentElement.appendChild(tableElement);
Cookies.prototype.renderSeattle = function () {
  generateTableHead(tableElement);
  const trSeattle = document.createElement('tr');
  tableElement.appendChild(trSeattle);
  const tdSeattle = document.createElement('td');
  trSeattle.appendChild(tdSeattle);
  tdSeattle.textContent = this.name;
  let Total = 0;
  for (let i = 0; i < workingHours.length; i++) {
    this.pushCustPerHourArr();
    Total += this.cookiesPerHourArr[i];
    const tdSeattle = document.createElement('td');
    trSeattle.appendChild(tdSeattle);
    tdSeattle.textContent = this.cookiesPerHourArr[i];
  };


  const tdDailyLocTotal = document.createElement('td');
  trSeattle.appendChild(tdDailyLocTotal);
  tdDailyLocTotal.textContent = Total;
};


Cookies.prototype.renderTokyo = function () {
  const trTokyo = document.createElement('tr');
  tableElement.appendChild(trTokyo);
  const tdTokyo = document.createElement('td');
  trTokyo.appendChild(tdTokyo);
  tdTokyo.textContent = this.name;
  let Total = 0;
  for (let i = 0; i < workingHours.length; i++) {
    this.pushCustPerHourArr();
    Total += this.cookiesPerHourArr[i];
    const tdTokyo = document.createElement('td');
    trTokyo.appendChild(tdTokyo);
    tdTokyo.textContent = this.cookiesPerHourArr[i];
  };


  const tdDailyLocTotal = document.createElement('td');
  trTokyo.appendChild(tdDailyLocTotal);
  tdDailyLocTotal.textContent = Total;
};


Cookies.prototype.renderDubai = function () {
  const trDubai = document.createElement('tr');
  tableElement.appendChild(trDubai);
  const tdDubai = document.createElement('td');
  trDubai.appendChild(tdDubai);
  tdDubai.textContent = this.name;
  let Total = 0;
  for (let i = 0; i < workingHours.length; i++) {
    this.pushCustPerHourArr();
    Total += this.cookiesPerHourArr[i];
    const tdDubai = document.createElement('td');
    trDubai.appendChild(tdDubai);
    tdDubai.textContent = this.cookiesPerHourArr[i];
  };


  const tdDailyLocTotal = document.createElement('td');
  trDubai.appendChild(tdDailyLocTotal);
  tdDailyLocTotal.textContent = Total;
};


Cookies.prototype.renderParis = function () {
  const trParis = document.createElement('tr');
  tableElement.appendChild(trParis);
  const tdParis = document.createElement('td');
  trParis.appendChild(tdParis);
  tdParis.textContent = this.name;
  let Total = 0;
  for (let i = 0; i < workingHours.length; i++) {
    this.pushCustPerHourArr();
    Total += this.cookiesPerHourArr[i];
    const tdParis = document.createElement('td');
    trParis.appendChild(tdParis);
    tdParis.textContent = this.cookiesPerHourArr[i];
  };


  const tdDailyLocTotal = document.createElement('td');
  trParis.appendChild(tdDailyLocTotal);
  tdDailyLocTotal.textContent = Total;
};


Cookies.prototype.renderLima = function () {
  const trLima = document.createElement('tr');
  tableElement.appendChild(trLima);
  const tdLima = document.createElement('td');
  trLima.appendChild(tdLima);
  tdLima.textContent = this.name;
  let Total = 0;
  for (let i = 0; i < workingHours.length; i++) {
    this.pushCustPerHourArr();
    Total += this.cookiesPerHourArr[i];
    const tdLima = document.createElement('td');
    trLima.appendChild(tdLima);
    tdLima.textContent = this.cookiesPerHourArr[i];
  };


  const tdDailyLocTotal = document.createElement('td');
  trLima.appendChild(tdDailyLocTotal);
  tdDailyLocTotal.textContent = Total;
};


let seattle = new Cookies('Seattle', 23, 65, 6.3);
seattle.cookiesPerHour();
seattle.pushCustPerHourArr();
seattle.renderSeattle();
let tokyo = new Cookies('Tokyo', 3, 24, 1.2);
tokyo.cookiesPerHour();
tokyo.pushCustPerHourArr();
tokyo.renderTokyo();
let dubai = new Cookies('Dubai', 3, 24, 1.2);
dubai.cookiesPerHour();
dubai.pushCustPerHourArr();
dubai.renderDubai();
let paris = new Cookies('Paris', 3, 24, 1.2);
paris.cookiesPerHour();
paris.pushCustPerHourArr();
paris.renderParis();
let lima = new Cookies('Lima', 3, 24, 1.2);
lima.cookiesPerHour();
lima.pushCustPerHourArr();
lima.renderLima();
function generateTableHead(parentElement) {
  const trHeader = document.createElement('tr');
  parentElement.appendChild(trHeader);
  const thHeader = document.createElement('th');
  trHeader.appendChild(thHeader);
  thHeader.textContent = 'location/hour';
  for (let i = 0; i < workingHours.length; i++) {
    let thHeader = document.createElement('th');
    trHeader.appendChild(thHeader);
    thHeader.textContent = workingHours[i];
  };


  let thTotal = document.createElement('th');
  trHeader.appendChild(thTotal);
  thTotal.textContent = 'Daily location Total';
};

newBranchForm.addEventListener('form', eventButton);
function eventButton(event) {
  event.preventDefault();
  console.log(event, minCust, maxCust, averageCookies);

}