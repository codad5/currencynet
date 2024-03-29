﻿
# CUURENCYNET

> Currencynet is a javascript light framework that helps to convert currency between different html tags

<br/>

## Documentation : Usage

> For `react package` check out the [react-currencynet repo](https://github.com/codad5/react-currencynet)

### Import Currencynet

```html
<script src="https://codad5.github.io/currencynet/main/v1.js"></script>
```

### Initialize Currencynet

 Create a new currencyNet Object

```html
    <script>
        window.addEventListener("load", async () => {
        // `NGN` this is our application build currency
        const currencyChange = new currrencyNet('NGN', false);
        await currencyChange.reWrite();
        });
    </script>
```

`NGN` - This can be replaced by any of [ISO 4217 CODE](https://en.wikipedia.org/wiki/ISO_4217) based on the currency used in building your application

Now add your the `currencynet-init` className to the desired element

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
<select class="currencynet-select">
    <option name="USD" id="">USD</option>
    <option name="NGN" id="">NGN</option>
    <option name="EUR" id="">EUR</option>
    <option name="INR" id="">INR</option>
</select>
```

> NOTE: use the className `currencynet-select` for the drop down menu

### changing the data type of your output

You can change the data type of your output from `float` to `int` by adding this few code at the bottom of your html code

###### To return a float data type

```html
</body>
<script>
    // this will make the output a float of 2 decimal plcae `2.00` on true else a Integer `2` 
    currencyChange.float(true); 
    
</script>
```

- `float` method : this will make the output a float of 2 decimal plcae `2.00` on true else a Integer `2`

### Table for all avaliable currency class

| COUNTRY | ISO 4217 CODE | CLASSNAME |
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
- [x] Fix Documentation UI
