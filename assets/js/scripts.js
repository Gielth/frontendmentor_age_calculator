const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const submitButton = document.getElementById('submit');
const yearsSpan = document.getElementById('years');
const monthsSpan = document.getElementById('months');
const daysSpan = document.getElementById('days');
const singleYear = document.getElementById('years-s-span');
const singleMonth = document.getElementById('months-s-span');
const singleDay = document.getElementById('days-s-span');
const errorDay = document.getElementById('error-day');
const errorMonth = document.getElementById('error-month');
const errorYear = document.getElementById('error-year');
const labelDay = document.getElementById('label-day')
const labelMonth = document.getElementById('label-month')
const labelYear = document.getElementById('label-year')
let day = 0;
let month = 0;
let year = 0;
let date = new Date();

function yearInputValidation() {
    if (yearInput.validity.valueMissing || +yearInput.value === 0) {
        errorYear.innerText = 'This is a required field.';
        labelDay.classList.add('error');
        labelMonth.classList.add('error');
        labelYear.classList.add('error');
        return false;
    } else if (+yearInput.value > date.getFullYear()) {
        errorYear.innerText = 'Must be in the past.';
        labelDay.classList.add('error');
        labelMonth.classList.add('error');
        labelYear.classList.add('error');
        return false;
    } else {
        errorYear.innerText = "";
        return true;
    }
}

function monthInputValidation() {
    if (monthInput.validity.valueMissing || +monthInput.value === 0) {
        errorMonth.innerText = 'This is a required field.';
        labelDay.classList.add('error');
        labelMonth.classList.add('error');
        labelYear.classList.add('error');
        return false;
    } else if (+monthInput.value < 1 || +monthInput.value > 12) {
        errorMonth.innerText = 'Must be a valid month.';
        labelDay.classList.add('error');
        labelMonth.classList.add('error');
        labelYear.classList.add('error');
        return false;
    } else if (+yearInput.value >= date.getFullYear() && +monthInput.value > (date.getMonth() + 1)) {
        errorMonth.innerText = 'Must be a valid month.';
        labelDay.classList.add('error');
        labelMonth.classList.add('error');
        labelYear.classList.add('error');
        return false;
    } else {
        errorMonth.innerText = "";
        return true;
    }
}

function dayInputValidation() {
    if (dayInput.validity.valueMissing || +dayInput.value === 0) {
        errorDay.innerText = 'This is a required field.';
        labelDay.classList.add('error');
        labelMonth.classList.add('error');
        labelYear.classList.add('error');
        return false;
    } else if (+dayInput.value < 1) {
        errorDay.innerText = 'Must be a valid day.';
        labelDay.classList.add('error');
        labelMonth.classList.add('error');
        labelYear.classList.add('error');
        return false;
    } else if (+monthInput.value === 2 && +dayInput.value > 28 && +yearInput.value % 4 != 0) {
        errorDay.innerText = 'Must be a valid day.';
        labelDay.classList.add('error');
        labelMonth.classList.add('error');
        labelYear.classList.add('error');
        return false;
    } else if (+monthInput.value === 2 && +dayInput.value > 29 && +yearInput.value % 4 === 0 && +yearInput.value & 100 != 0) {
        errorDay.innerText = 'Must be a valid day.';
        labelDay.classList.add('error');
        labelMonth.classList.add('error');
        labelYear.classList.add('error');
        return false;
    } else if (+monthInput.value === 4  && dayInput.value > 30) {
        errorDay.innerText = 'Must be a valid day.';
        labelDay.classList.add('error');
        labelMonth.classList.add('error');
        labelYear.classList.add('error');
        return false;
    } else if (+monthInput.value === 6  && dayInput.value > 30) {
        errorDay.innerText = 'Must be a valid day.';
        labelDay.classList.add('error');
        labelMonth.classList.add('error');
        labelYear.classList.add('error');
        return false;
    } else if (+monthInput.value === 9  && dayInput.value > 30) {
        errorDay.innerText = 'Must be a valid day.';
        labelDay.classList.add('error');
        labelMonth.classList.add('error');
        labelYear.classList.add('error');
        return false;
    } else if (+monthInput.value === 11  && dayInput.value > 30) {
        errorDay.innerText = 'Must be a valid day.';
        labelDay.classList.add('error');
        labelMonth.classList.add('error');
        labelYear.classList.add('error');
        return false;
    } else if (+dayInput.value > 31) {
        errorDay.innerText = 'Must be a valid day.';
        labelDay.classList.add('error');
        labelMonth.classList.add('error');
        labelYear.classList.add('error');
        return false;
    } else if (+yearInput.value >= date.getFullYear() && +monthInput.value >= (date.getMonth() + 1) && +dayInput.value > date.getDate()) {
        errorDay.innerText = 'Must be a valid day.';
        labelDay.classList.add('error');
        labelMonth.classList.add('error');
        labelYear.classList.add('error');
        return false;
    } else {
        errorDay.innerText = "";
        return true;
    }
}

function calculateAge() {
    let years = date.getFullYear() - year;
    let months = 1 + date.getMonth() - month;
    let days = date.getDate() - day;

    if (days < 0) {
        days = 30 + date.getDate() - day;
        months--;
        if (singleDay.classList.contains('hidden')) {
            singleDay.classList.remove('hidden');
        }
    } else if (days === 1) {
        singleDay.classList.add('hidden');
    } else if (days > 1 && singleDay.classList.contains('hidden')) {
        singleDay.classList.remove('hidden');
    }

    if (months < 0) {
        months = 12 + date.getMonth() - month;
        years--;
        if (singleMonth.classList.contains('hidden')) {
            singleMonth.classList.remove('hidden');
        }
    } else if (months === 1) {
        singleMonth.classList.add('hidden');
    } else if (days > 1 && singleMonth.classList.contains('hidden')) {
        singleMonth.classList.remove('hidden');
    }

    if (years === 1) {
        singleYear.classList.add('hidden');
    } else if (years > 1 && singleYear.classList.contains('hidden')) {
        singleYear.classList.remove('hidden');
    }
    return { years, months, days };
}

submitButton.addEventListener('click', () => {

    const dayOk = dayInputValidation();
    const monthOk = monthInputValidation();
    const yearOk = yearInputValidation();

    if (dayOk && monthOk && yearOk) {
        labelDay.classList.remove('error');
        labelMonth.classList.remove('error');
        labelYear.classList.remove('error');

        day = dayInput.value;
        month = monthInput.value;
        year = yearInput.value;

        let { years, months, days } = calculateAge();

        yearsSpan.innerText = years;
        monthsSpan.innerText = months;
        daysSpan.innerText = days;
    }

})



