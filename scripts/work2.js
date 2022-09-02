let currencyList = { AFA: { name: "Afghan Afghani", symbol: "؋" }, ALL: { name: "Albanian Lek", symbol: "Lek" }, DZD: { name: "Algerian Dinar", symbol: "دج" }, AOA: { name: "Angolan Kwanza", symbol: "Kz" }, ARS: { name: "Argentine Peso", symbol: "$" }, AMD: { name: "Armenian Dram", symbol: "֏" }, AWG: { name: "Aruban Florin", symbol: "ƒ" }, AUD: { name: "Australian Dollar", symbol: "$" }, AZN: { name: "Azerbaijani Manat", symbol: "m" }, BSD: { name: "Bahamian Dollar", symbol: "B$" }, BHD: { name: "Bahraini Dinar", symbol: ".د.ب" }, BDT: { name: "Bangladeshi Taka", symbol: "৳" }, BBD: { name: "Barbadian Dollar", symbol: "Bds$" }, BYR: { name: "Belarusian Ruble", symbol: "Br" }, BEF: { name: "Belgian Franc", symbol: "fr" }, BZD: { name: "Belize Dollar", symbol: "$" }, BMD: { name: "Bermudan Dollar", symbol: "$" }, BTN: { name: "Bhutanese Ngultrum", symbol: "Nu." }, BOB: { name: "Bolivian Boliviano", symbol: "Bs." }, BAM: { name: "Bosnia-Herzegovina Convertible Mark", symbol: "KM" }, BWP: { name: "Botswanan Pula", symbol: "P" }, BRL: { name: "Brazilian Real", symbol: "R$" }, GBP: { name: "British Pound Sterling", symbol: "£" }, BND: { name: "Brunei Dollar", symbol: "B$" }, BGN: { name: "Bulgarian Lev", symbol: "Лв." }, BIF: { name: "Burundian Franc", symbol: "FBu" }, KHR: { name: "Cambodian Riel", symbol: "KHR" }, CAD: { name: "Canadian Dollar", symbol: "$" }, CVE: { name: "Cape Verdean Escudo", symbol: "$" }, KYD: { name: "Cayman Islands Dollar", symbol: "$" }, XOF: { name: "CFA Franc BCEAO", symbol: "CFA" }, XAF: { name: "CFA Franc BEAC", symbol: "FCFA" }, XPF: { name: "CFP Franc", symbol: "₣" }, CLP: { name: "Chilean Peso", symbol: "$" }, CNY: { name: "Chinese Yuan", symbol: "¥" }, COP: { name: "Colombian Peso", symbol: "$" }, KMF: { name: "Comorian Franc", symbol: "CF" }, CDF: { name: "Congolese Franc", symbol: "FC" }, CRC: { name: "Costa Rican ColÃ³n", symbol: "₡" }, HRK: { name: "Croatian Kuna", symbol: "kn" }, CUC: { name: "Cuban Convertible Peso", symbol: "$, CUC" }, CZK: { name: "Czech Republic Koruna", symbol: "Kč" }, DKK: { name: "Danish Krone", symbol: "Kr." }, DJF: { name: "Djiboutian Franc", symbol: "Fdj" }, DOP: { name: "Dominican Peso", symbol: "$" }, XCD: { name: "East Caribbean Dollar", symbol: "$" }, EGP: { name: "Egyptian Pound", symbol: "ج.م" }, ERN: { name: "Eritrean Nakfa", symbol: "Nfk" }, EEK: { name: "Estonian Kroon", symbol: "kr" }, ETB: { name: "Ethiopian Birr", symbol: "Nkf" }, EUR: { name: "Euro", symbol: "€" }, FKP: { name: "Falkland Islands Pound", symbol: "£" }, FJD: { name: "Fijian Dollar", symbol: "FJ$" }, GMD: { name: "Gambian Dalasi", symbol: "D" }, GEL: { name: "Georgian Lari", symbol: "ლ" }, DEM: { name: "German Mark", symbol: "DM" }, GHS: { name: "Ghanaian Cedi", symbol: "GH₵" }, GIP: { name: "Gibraltar Pound", symbol: "£" }, GRD: { name: "Greek Drachma", symbol: "₯, Δρχ, Δρ" }, GTQ: { name: "Guatemalan Quetzal", symbol: "Q" }, GNF: { name: "Guinean Franc", symbol: "FG" }, GYD: { name: "Guyanaese Dollar", symbol: "$" }, HTG: { name: "Haitian Gourde", symbol: "G" }, HNL: { name: "Honduran Lempira", symbol: "L" }, HKD: { name: "Hong Kong Dollar", symbol: "$" }, HUF: { name: "Hungarian Forint", symbol: "Ft" }, ISK: { name: "Icelandic KrÃ³na", symbol: "kr" }, INR: { name: "Indian Rupee", symbol: "₹" }, IDR: { name: "Indonesian Rupiah", symbol: "Rp" }, IRR: { name: "Iranian Rial", symbol: "﷼" }, IQD: { name: "Iraqi Dinar", symbol: "د.ع" }, ILS: { name: "Israeli New Sheqel", symbol: "₪" }, ITL: { name: "Italian Lira", symbol: "L,£" }, JMD: { name: "Jamaican Dollar", symbol: "J$" }, JPY: { name: "Japanese Yen", symbol: "¥" }, JOD: { name: "Jordanian Dinar", symbol: "ا.د" }, KZT: { name: "Kazakhstani Tenge", symbol: "лв" }, KES: { name: "Kenyan Shilling", symbol: "KSh" }, KWD: { name: "Kuwaiti Dinar", symbol: "ك.د" }, KGS: { name: "Kyrgystani Som", symbol: "лв" }, LAK: { name: "Laotian Kip", symbol: "₭" }, LVL: { name: "Latvian Lats", symbol: "Ls" }, LBP: { name: "Lebanese Pound", symbol: "£" }, LSL: { name: "Lesotho Loti", symbol: "L" }, LRD: { name: "Liberian Dollar", symbol: "$" }, LYD: { name: "Libyan Dinar", symbol: "د.ل" }, LTL: { name: "Lithuanian Litas", symbol: "Lt" }, MOP: { name: "Macanese Pataca", symbol: "$" }, MKD: { name: "Macedonian Denar", symbol: "ден" }, MGA: { name: "Malagasy Ariary", symbol: "Ar" }, MWK: { name: "Malawian Kwacha", symbol: "MK" }, MYR: { name: "Malaysian Ringgit", symbol: "RM" }, MVR: { name: "Maldivian Rufiyaa", symbol: "Rf" }, MRO: { name: "Mauritanian Ouguiya", symbol: "MRU" }, MUR: { name: "Mauritian Rupee", symbol: "₨" }, MXN: { name: "Mexican Peso", symbol: "$" }, MDL: { name: "Moldovan Leu", symbol: "L" }, MNT: { name: "Mongolian Tugrik", symbol: "₮" }, MAD: { name: "Moroccan Dirham", symbol: "MAD" }, MZM: { name: "Mozambican Metical", symbol: "MT" }, MMK: { name: "Myanmar Kyat", symbol: "K" }, NAD: { name: "Namibian Dollar", symbol: "$" }, NPR: { name: "Nepalese Rupee", symbol: "₨" }, ANG: { name: "Netherlands Antillean Guilder", symbol: "ƒ" }, TWD: { name: "New Taiwan Dollar", symbol: "$" }, NZD: { name: "New Zealand Dollar", symbol: "$" }, NIO: { name: "Nicaraguan CÃ³rdoba", symbol: "C$" }, NGN: { name: "Nigerian Naira", symbol: "₦" }, KPW: { name: "North Korean Won", symbol: "₩" }, NOK: { name: "Norwegian Krone", symbol: "kr" }, OMR: { name: "Omani Rial", symbol: ".ع.ر" }, PKR: { name: "Pakistani Rupee", symbol: "₨" }, PAB: { name: "Panamanian Balboa", symbol: "B/." }, PGK: { name: "Papua New Guinean Kina", symbol: "K" }, PYG: { name: "Paraguayan Guarani", symbol: "₲" }, PEN: { name: "Peruvian Nuevo Sol", symbol: "S/." }, PHP: { name: "Philippine Peso", symbol: "₱" }, PLN: { name: "Polish Zloty", symbol: "zł" }, QAR: { name: "Qatari Rial", symbol: "ق.ر" }, RON: { name: "Romanian Leu", symbol: "lei" }, RUB: { name: "Russian Ruble", symbol: "₽" }, RWF: { name: "Rwandan Franc", symbol: "FRw" }, SVC: { name: "Salvadoran ColÃ³n", symbol: "₡" }, WST: { name: "Samoan Tala", symbol: "SAT" }, SAR: { name: "Saudi Riyal", symbol: "﷼" }, RSD: { name: "Serbian Dinar", symbol: "din" }, SCR: { name: "Seychellois Rupee", symbol: "SRe" }, SLL: { name: "Sierra Leonean Leone", symbol: "Le" }, SGD: { name: "Singapore Dollar", symbol: "$" }, SKK: { name: "Slovak Koruna", symbol: "Sk" }, SBD: { name: "Solomon Islands Dollar", symbol: "Si$" }, SOS: { name: "Somali Shilling", symbol: "Sh.so." }, ZAR: { name: "South African Rand", symbol: "R" }, KRW: { name: "South Korean Won", symbol: "₩" }, XDR: { name: "Special Drawing Rights", symbol: "SDR" }, LKR: { name: "Sri Lankan Rupee", symbol: "Rs" }, SHP: { name: "St. Helena Pound", symbol: "£" }, SDG: { name: "Sudanese Pound", symbol: ".س.ج" }, SRD: { name: "Surinamese Dollar", symbol: "$" }, SZL: { name: "Swazi Lilangeni", symbol: "E" }, SEK: { name: "Swedish Krona", symbol: "kr" }, CHF: { name: "Swiss Franc", symbol: "CHf" }, SYP: { name: "Syrian Pound", symbol: "LS" }, STD: { name: "São Tomé and Príncipe Dobra", symbol: "Db" }, TJS: { name: "Tajikistani Somoni", symbol: "SM" }, TZS: { name: "Tanzanian Shilling", symbol: "TSh" }, THB: { name: "Thai Baht", symbol: "฿" }, TOP: { name: "Tongan Pa'anga", symbol: "$" }, TTD: { name: "Trinidad & Tobago Dollar", symbol: "$" }, TND: { name: "Tunisian Dinar", symbol: "ت.د" }, TRY: { name: "Turkish Lira", symbol: "₺" }, TMT: { name: "Turkmenistani Manat", symbol: "T" }, UGX: { name: "Ugandan Shilling", symbol: "USh" }, UAH: { name: "Ukrainian Hryvnia", symbol: "₴" }, AED: { name: "United Arab Emirates Dirham", symbol: "إ.د" }, UYU: { name: "Uruguayan Peso", symbol: "$" }, USD: { name: "US Dollar", symbol: "$" }, UZS: { name: "Uzbekistan Som", symbol: "лв" }, VUV: { name: "Vanuatu Vatu", symbol: "VT" }, VEF: { name: "Venezuelan BolÃvar", symbol: "Bs" }, VND: { name: "Vietnamese Dong", symbol: "₫" }, YER: { name: "Yemeni Rial", symbol: "﷼" }, ZMK: { name: "Zambian Kwacha", symbol: "ZK" } }, optionList = document.querySelector("#country_table"); for (const a in currencyList) if (Object.hasOwnProperty.call(currencyList, a)) { let n = document.createElement("tr"), e = document.createElement("td"), m = document.createElement("td"), l = document.createElement("td"); e.className += "border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-neutral-300 dark:text-slate-400", m.className += "border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-neutral-300 dark:text-slate-400", l.className += "border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-neutral-300 dark:text-slate-400"; let o = document.createTextNode(`${currencyList[a].name}`), s = document.createTextNode(`${a}`), i = document.createTextNode(`currencynet-init-${a.toLowerCase()}`); e.appendChild(o), m.appendChild(s), l.appendChild(i), n.appendChild(e), n.appendChild(m), n.appendChild(l), optionList.appendChild(n) }