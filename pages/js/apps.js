'use strict';
let Seattle = {
    name: 'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookies: 6.3,
    workingHours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    custPerHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    purchaPerHour: function () {
        return Math.floor(this.custPerHour(this.minCustomer, this.maxCustomer) * this.avgCookies);
    },
    render: function () {
        const parentElement = document.getElementById('salmon-cookies');
        const pElement = document.createElement('p');
        pElement.textContent = 'Seattle';
        parentElement.appendChild(pElement);
        let ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);
        for (let i = 0; i < this.workingHours.length; i++) {
            const liElement = document.createElement('li');
            liElement.textContent = this.workingHours[i] + ' ' + this.purchaPerHour();
            ulElement.appendChild(liElement);
        }
    },
};
let Tokyo = {
    name: 'Tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookies: 1.2,
    workingHours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    custPerHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },    purchaPerHour: function () {
        return Math.floor(this.custPerHour(this.minCustomer, this.maxCustomer) * this.avgCookies);
    },
    renderTokyo: function () {
        const parentElement = document.getElementById('salmon-cookies');
        const pElement = document.createElement('p');
        pElement.textContent = 'Tokyo';
        parentElement.appendChild(pElement);
        let ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);
        for (let i = 0; i < this.workingHours.length; i++) {
            const liElement = document.createElement('li');
            liElement.textContent = this.workingHours[i] + ' ' + this.purchaPerHour();
            ulElement.appendChild(liElement);
        }
    },
};
let Dubai = {
    name: 'Dubai',
    minCustomer: 11,
    maxCustomer: 38,
    avgCookies: 3.7,
    workingHours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    custPerHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    purchaPerHour: function () {
        return Math.floor(this.custPerHour(this.minCustomer, this.maxCustomer) * this.avgCookies);
    },
    renderDubai: function () {
        const parentElement = document.getElementById('salmon-cookies');
        const pElement = document.createElement('p');
        pElement.textContent = 'Dubai';
        parentElement.appendChild(pElement);
        let ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);
   for (let i = 0; i < this.workingHours.length; i++) {
            const liElement = document.createElement('li');
            liElement.textContent = this.workingHours[i] + ' ' + this.purchaPerHour();
            ulElement.appendChild(liElement);
        }
    },
};
let Paris = {
    name: 'Paris',
    minCustomer: 20,
    maxCustomer: 38,
    avgCookies: 2.3,
    workingHours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    custPerHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    purchaPerHour: function () {
        return Math.floor(this.custPerHour(this.minCustomer, this.maxCustomer) * this.avgCookies);
    },
    renderParis: function () {
        const parentElement = document.getElementById('salmon-cookies');

        const pElement = document.createElement('p');
        pElement.textContent = 'Paris';
        parentElement.appendChild(pElement);
        let ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);
        for (let i = 0; i < this.workingHours.length; i++) {
            const liElement = document.createElement('li');
            liElement.textContent = this.workingHours[i] + ' ' + this.purchaPerHour();
            ulElement.appendChild(liElement);
        }
    },
};
let Lima = {
    name: 'Lima',
    minCustomer: 2,
    maxCustomer: 16,
    avgCookies: 4.6,
    workingHours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    custPerHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    purchasedEachHour: function () {
        return Math.floor(this.custPerHour(this.minCustomer, this.maxCustomer) * this.avgCookies);
    },
    renderLima: function () {
        const parentElement = document.getElementById('salmon-cookies');
        const pElement = document.createElement('p');
        pElement.textContent = 'Lima';
        parentElement.appendChild(pElement);
        let ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);
        for (let i = 0; i < this.workingHours.length; i++) {
            const liElement = document.createElement('li');
            liElement.textContent = this.workingHours[i] + ' ' + this.purchasedEachHour();
            ulElement.appendChild(liElement);
        }
    },
};
console.log(Seattle.custPerHour(23, 65));
Seattle.render();
Tokyo.renderTokyo();
Dubai.renderDubai();
Paris.renderParis();
Lima.renderLima();
console.log(Seattle);