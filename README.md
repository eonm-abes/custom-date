<div align="center">

# Custom Date

_Computes custom dates within Postman tests and prerequest scripts_

[![build](https://github.com/eonm-abes/custom-date/actions/workflows/build.yml/badge.svg)](https://github.com/eonm-abes/custom-date/actions/workflows/build.yml)
[![Latest Build](https://img.shields.io/badge/%F0%9F%93%A6%20lastest%20build-custom%20date%20.js-yellow)](https://github.com/eonm-abes/custom-date/releases/latest/download/custom-date.js)
[![GitHub release](https://img.shields.io/github/release/eonm-abes/custom-date.svg)](https://github.com/eonm-abes/custom-date/releases/latest)
[![Contribution Welcome](https://img.shields.io/badge/contribution-welcome-green.svg)](https://github.com/eonm-abes/custom-date/pulls)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

# Installation

You have to copy the content of the [custom-date.js script](https://github.com/eonm-abes/custom-date/releases/latest/download/custom-date.js) inside your PM global variables (`Environments > Globals`) :

| VARIABLE     | INITIAL VALUE                  | CURRENT VALUE                  |
| ------------ | ------------------------------ | ------------------------------ |
| `customDate` | `paste customDate script here` | `paste customDate script here` |

# Usage

Inside your prerequest script and/or your tests :

```js
eval(pm.globals.get("customDate"));

let past_date = new customDate.customDate({month:-6, year: -1});
console.log(past_date.to_string())

let future_date = new customDate.customDate({month:3});
console.log(future_date.to_string())

let today = new customDate.customDate();
// = today +2 years
today.year(2)
// = today +2 year +2 months
today.month(2)
// = today
today.tweak({month:-2, year: -2})

console.log(today.to_string())
```
