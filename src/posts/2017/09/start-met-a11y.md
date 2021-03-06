---
title: Easy A11y checks - Een eerste stap richting Web Toegankelijkheid
date: 2017-09-14
tags:
- a11y
---

Dit document is een hulpmiddel voor de eerste stappen richting het toegankelijk maken van een webpagina. Met deze controles kun je een idee krijgen van de status van toegankelijkheid van een webpagina.
<!-- excerpt -->

### Scope
Deze 10 controles behandelen slechts een paar aandachtspunten mbt toegankelijkheid en zijn bedoeld om een snel beeld te krijgen van een webpagina en niet een uitgebreid beeld. Het zou zo kunnen zijn dat een webpagina deze checks doorstaat maar nog steeds grote toegankelijkheidsissues bevat, om die allemaal boven water te krijgen zijn uitgebreidere tests nodig.

<nav class="toc" role="navigation">
	<ul>
		<li><a href="#controles">Controles</a>
			<ol>
				<li><a href="#basistaal-en-taalwisselingen">Basistaal (en taalwisselingen)</a></li>
				<li><a href="#paginatitel">Paginatitel</a></li>
				<li><a href="#koppen">Koppen</a></li>
				<li><a href="#afbeeldingen">Afbeeldingen</a></li>
				<li><a href="#toetsenbord-toegankelijk">Toetsenbord toegankelijk</a></li>
				<li><a href="#formulieren">Formulieren</a></li>
				<li><a href="#video">Video</a></li>
				<li><a href="#kleurgebruik-en-contrast">Kleurgebruik en contrast</a></li>
				<li><a href="#contextwijzigingen">Contextwijzigingen</a></li>
				<li><a href="#code">Code</a></li>
			</ol>
		</li>
	</ul>
</nav>

### Controles
#### Basistaal (en taalwisselingen) 
##### richtlijn 
Ten behoeve van ondersteunende technologie moet de html tag voorzien zijn van een taal attribuut(lang attribute). Hiermee kan bijvoorbeeld een screenreader bepalen in welke taal de inhoud moet worden voorgelezen, maar ook kan google de pagina beter indexeren. 

##### check 
inspecteer de paginabron en controleer of de html tag voorzien is van een lang attribuut
```html
<html lang="nl-NL">

```
  
#### Paginatitel
##### richtlijn 
De paginatitel moet de inhoud van de pagina kort samenvatten en uniek zijn binnen de website.

##### check 
Controleer dat de title tag uniek is en duidelijk weergeeft waar de pagina over gaat. 
```html
<head><title>duidelijk en uniek</title></head>

```

#### Koppen
##### richtlijn 
Webpagina's zijn vaak opgedeeld in verschillende onderdelen die zijn voorzien van koppen of titels. Deze koppen of titels moeten voorzien zijn van de juiste html-tags waarbij er geen kopniveaus worden overgeslagen

##### check 
Controleer dat de pagina minstens en maximaal 1 `<h1>` kop heeft en dat de overige koppen binnen een duidelijke hiërarchie vallen, dus controleer dat er geen ontbrekende `<h#>` tags zijn. 
```html 
correct:
  <h1>kop niveau 1</h1>
    <h2>kop niveau 2</h2>
      <h3>kop niveau 3</h3>
      <h3>kop niveau 3</h3>
      <h3>kop niveau 3</h3>
    <h2>kop niveau 2</h2>
      <h3>kop niveau 3</h3>
      <h3>kop niveau 3</h3>
fout:
  <h1>kop niveau 1</h1>
      <h3>kop niveau 3</h3> -- level 2 overgeslagen
    <h2>kop niveau 2</h2>
      <h3>kop niveau 3</h3>
      <h3>kop niveau 3</h3>
  <h1>kop niveau 1</h1> -- tweede level 1 kop
    <h2>kop niveau 2</h2>
      <h3>kop niveau 3</h3>

```

#### Afbeeldingen
##### richtlijn 
Voor functionele afbeeldingen geldt dat ze altijd moeten zijn voorzien van een duidelijk beschrijvend tekstueel alternatief (alt tekst), decoratieve afbeeldingen hebben een leeg alt `alt=""` attribuut of zijn via CSS geplaatst.

##### check 
Controleer dat de img tag voorzien is van een alt attribuut. 
```html
<img src="pad/naar/afbeelding" alt="duidelijk beschrijvend tekstueel alternatief">

```

#### Toetsenbord toegankelijk
##### richtlijn 
Alle functionaliteit op de webpagina moet kunnen worden bediend met het toetsenbord, hierbij moet je ook zorgen voor een logische tabvolgorde en zorgen dat de focus zichtbaar is.

##### check 
Controleer dat je alle interactieve elementen en links kunt bereiken met het toetsenbord en dat je ook ziet waar je bent.

#### Formulieren
##### richtlijn
Zorg dat alle invoervelden voorzien zijn van goed beschrijvende `<label>` elementen en plaats belangrijke instructie binnen dit label. om radiobuttons of checkboxen te groeperen moeten de `<fieldset>` en `<legend>` elementen worden gebruikt. fout-indicaties moeten de gemaakte fout duidelijk weergeven evenals in welk invoerveld de fout zit 

##### check
Controleer dat input velden voorzien zijn van een label
```html
<label>beschrijvende tekst
  <input type="..">
</label>

``` 
of 
```html
<label for="inputid">beschrijvende tekst</label>
<input type=".." id="inputid">

```
Controleer dat gegroepeerde radiobuttons en checkboxen voorzien zijn van fieldset en legend
```html
<fieldset>
  <legend>beschrijvende tekst</legend>
  <input type="checkbox/radiobutton">
  <input type="checkbox/radiobutton">
</fieldset>

``` 
Controleer dat foutmeldingen duidelijk aangeven wat er fout is en welk invoerveld fout is

#### Video
##### richtlijn
Video moet voorzien zijn van een audiodescriptie en ondertiteling, moet te pauzeren en te stoppen zijn

##### check
Controleer video op al deze mogelijkheden.

#### Kleurgebruik en contrast
##### richtlijn 
Om een goede ondersteuning te bieden voor mensen met een visuele beperking zoals bijvoorbeeld kleurenblindheid moet er op gelet worden dat kleur niet als enige middel wordt gebruikt om informatie over te brengen,  tot een reactie op te roepen. Let ook op het contrast, dit moet voldoen aan 4,5:1 bij normale tekst en 3:1 bij grote tekst (18pt of 14pt dikgedrukt)

##### check 
Controleer dat bijvoorbeeld foutmeldingen ook zonder kleur duidelijkheid verschaffen en of de contrast ratio voldoende is.
Gebruik hiervoor applicaties, plugins of browser extensies. Bijvoorbeeld de chrome extensie "WCAG Luminosity Contrast Ratio Analyzer". hiermee kun je contrast ratio controleren en ook de pagina bekijken als een kleurenblinde.

#### Contextwijzigingen
##### richtlijn
Grote gebeurtenissen, zoals het verzenden van formulieren en het openen van nieuwe vensters, worden contextwijzigingen genoemd. Ook het automatisch geven van focus aan een ander element in een formulier of op de website is een contextwijziging. Ook als een bezoeker een veld in een formulier invult, een selectievakje of keuzerondje aanklikt of een waarde kiest uit een keuzelijst mag er geen contextwijziging plaatsvinden, tenzij de bezoeker daarover is geïnformeerd. Informeren betekent dat in een tekst die vóór het betreffende veld staat is aangegeven wat er zal gebeuren als de bezoeker het veld invult of een optie selecteert. Zorg dat de context alleen door toedoen van de bezoeker kan wijzigen.

##### check
Controleer bij formulieren dat het invullen of selecteren van velden niet een onverwachte contextwijziging optreed. Denk hierbij bijvoorbeeld aan een datumveld opgebouwd uit drie invoervelden waarbij de focus verspringt tijdens het invoeren, maar ook het verschijnen van extra invoervelden op basis van een gemaakte selectie, of juist het verdwijnen hiervan. 

#### Code
##### richtlijn
Een webpagina is opgebouwd uit Html, gebruik semantisch correcte elementen die duidelijk weergeven wat voor type content er wordt getoond en gebruik geen afgekeurde elementen en attributen. Als elementen een id attribuut hebben zorg er dan voor dat dit id uniek is binnen de pagina.
JavaScript is toegestaan, mits geen toegankelijkheidsproblemen worden veroorzaakt. Houd JavaScript gescheiden van de HTML-code (geen inline javascript).
Gebruik CSS voor de opmaak, los van de HTML-code (geen inline styling)

##### check
Controleer de code van de pagina met dev-tools en kijk of er semantische elementen zijn gebruikt en of de javascript en css gescheiden zijn van de html 