# Truncate sting helper
The helper comes with 3 methods:

```javascript
  fromStart(string, charCount, ellips = '...') {
    /**/
  }
  
  fromEnd(string, charCount, ellips = '...') {
    /**/
  }
  
  fromMiddle(string, charCount, ellips = '[...]') {
    /**/
  }
```
Each function accepts 3 parameteres:


| Param | Type | Description |
|-------|-------|-------|
| string | String | The string you'd like to truncate |
| charCount | Number | The number of characters you'd like to remain |
| ellips | String | The style of the ellipsis |
