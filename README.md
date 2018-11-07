# Kinokava

Movie schedules from [kinokavad.ee](https://kinokavad.ee).

Kinokavade otsing [kinokavad.ee](https://kinokavad.ee)-st.

# Installation

    $ npm install kinokava

# Usage examples

For example:
```javascript
const kinokava = require('kinokava')
kinokavad().then(res => console.log(res))
```
results in:

```javascript
[ { time: '12:50', cinema: 'mustamäe', title: 'Pisipäkk (3D, EST)' },
  { time: '12:55', cinema: 'viimsi', title: 'Tondiloss  (5D)' },
  { time: '13:00', cinema: 'kosmos', title: 'Bohemian Rhapsody IMAX 2D' },
  { time: '13:05', cinema: 'viimsi', title: 'Lumeinimese poeg  (5D, EST)' },
  ... 74 more items ]
```
and
```javascript
const kinokava = require('kinokava')
kinokavad({cinema: 'ccplaza', time: '22:00'}).then(res => console.log(res))
```
results in:
```javascript
[ { time: '22:00', cinema: 'ccplaza', title: 'KINOKLASSIKA: Pahad poisid' },
  { time: '22:15', cinema: 'ccplaza', title: 'Operatsioon "Hunter Killer"' },
  { time: '22:15', cinema: 'ccplaza', title: 'Colette' },
  { time: '22:30', cinema: 'ccplaza', title: 'Halloween' } ]
```
# Options

`city:` (String) Possible values are 'tallinn' (default), 'tartu' and 'pärnu'. Must be only specified if trying to find movies from non-Tallinn cinemas.

`time:` (String) Displays only movies starting after (and including) chosen time. Format examples: '22:15', '22'

`cinema:` (String) Name of cinema in lowercase. Example values: 'ccplaza', 'solaris', 'tasku', 'kosmos', 'kristiine' etc. To discover other values do a more general search.



# Licence

[MIT](http://vjpr.mit-license.org)