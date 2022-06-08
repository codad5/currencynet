

# CUURENCYNET
> Currencynet is a javascript light framework that helps to convert currency between different html tags

<br/>


## Documentation : Usage
To begin using this in your web application you have to signup  at our [website](https://currencynet.sanctablog.com/)

### Import Currencynet

```html
<script src="https://codad5.github.io/currencynet/main/production.js"></script>
```

### Initialize Currencynet

```html
<span class="currencynet-init"></span>
```

### Declare your element Value(data)

```html
<span class="currencynet-init" data-currencynet-value="345"></span>
```

###### You can also set (change) the currency data for a particular element 
> This is important if you want to show the difference between two currency

> For this example i have changing the currency to `India rupee`

```html
<span class="currencynet-init-inr" data-currencynet-value="345"></span>
```

### Adding a dropdown option

```html
<select id="currency-option" onchange="changeCurrency">
    <option name="USD" id="">USD</option>
    <option name="NGN" id="">NGN</option>
    <option name="EUR" id="">EUR</option>
    <option name="INR" id="">INR</option>
</select>
<script>
    //add event listner for the select tag 
    document.getElementById('currency-option').addEventListener('change', () => {

    const currencyChanger = new currencynet(false); // The false here determin if to return the value as a float or boolean 
        currencyChanger.clientCurrency = document.getElementById('currency-option').value; // this will return the value of the selected currency option  
        currencyChanger.reWrite(true); 

    });
</script>
```
### changing the data type of your output

You can change the data type of your output from `float` to `int` by adding this few code at the bottom of your html code 

###### To return a float data type 
```html 
</body>
<script>
    //add event listner to make sure all element with class currencynet are loaded into the script on window load
    window.addEventListener('load', () => {
    const currencyChanger = new currencynet(true); // The true here tells it to return a float
    currencyChanger.reWrite(); 
    });
</script>
```
> OR 
###### To return a int data type 

```html
</body>
<script>
    //add event listner to make sure all element with class currencynet are loaded into the scripts on window load
    window.addEventListener('load', () => {
    let currencyChanger = new currencynet(false) //the false here tells it is to return a integer 
    currencyChanger.reWrite(); 
    });

</script>
```
### Table for all avaliable currency class 

| COUNTRY | ISO 3 CODE | CLASSNAME |
| :---: | :---:| :---|
|Your Build Country | NULL | currencynet-init |
| US Dollar | USD | currencynet-init-usd |
| Indian Rupee | INR | currencynet-init-inr |
| Euro  | EUR | currencynet-init-eur |
| Chinese Yuan | CYN | currencynet-init-cyn |
| Nigerian Naira| NGN | currencynet-init-ngn |

more are avaliable at [our documentation](https://codad5.github.io/currencynet/#country_table)

#### TODO

- [ ] Making a google web crawler to make the application use it own personal currency converter
- [ ] Fix Documentation UI

