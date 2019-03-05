# cash

> Get the conversion of the currency set by default

<img src="img//Currency_ Converter.jpg" >


## Installation

Use the package manager [npm](https://www.npmjs.com/)
to install all modules listed as dependencies in package.json.

```bash
❯ npm install
```

## Usage

```js
const cash = require('cash')
const amount = cash.amount
const from = cash.from
const to = cash.to 

```

## Running the tests
Choose the value of all currencies that you want to get from the API.
Set the value of defaultFrom of currency that you want to convert.
```
Usage
  $ cash <amount> <from> <to>
  $ cash <options>
Options
--set -s  Set default currencies
Examples	
  $ cash 10 usd eur pln
  $ cash --set usd aud
```

## Buitl With 

* [Java Script](https://www.javascript.com/) - Java Script 
* [npm](https://www.npmjs.com/) - Node js 
* [JSDoc](http://usejsdoc.org/)- JSDoc format


## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
