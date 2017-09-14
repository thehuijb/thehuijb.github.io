# Eenvoudige uitleg van de eisen

In dit document vind je een eenvoudige uitleg van de toegankelijkheidseisen. De informatie is bedoeld voor bezoekers zonder technische achtergrond. Webredacteuren, ontwerpers, projectleiders, managers en bestuurders kunnen hier lezen waar de toegankelijkheidseisen over gaan.

[TOC]


## Afbeeldingen

Met afbeeldingen kun je de aandacht trekken, een tekst illustreren of complexe gegevens inzichtelijk maken. Afbeeldingen zijn een nuttig en veelgebruikt middel om informatie over te dragen of te verrijken. Juist daarom is het essentieel om ze voor iedereen toegankelijk te maken.

### De kern: een tekstueel alternatief
Elementen die niet uit tekst bestaan, zoals afbeeldingen, kun je toegankelijk maken door ze te voorzien van een tekstueel alternatief. Digitale tekst is de meest toegankelijke vorm van informatie. Met hulptechnologie kan tekst namelijk omgezet worden in alternatieve vormen van weergave. Voorleessoftware kan tekst bijvoorbeeld omzetten in synthetische spraak. Tekst kan ook vergroot worden of omgezet in braille.

Door afbeeldingen te voorzien van een tekstueel alternatief maak je ze dus toegankelijk voor bezoekers die de afbeeldingen niet kunnen zien. Ook zoekmachines zoals Google maken gebruik van tekstalternatieven bij het indexeren van websites.

### De juiste techniek
Door op de juiste wijze een tekstueel alternatief toe te voegen aan afbeeldingen zorg je dat de hulptechnologie van bezoekers de tekst kan vinden en er goed mee om kan gaan. Meestal is het toevoegen van een tekstuele beschrijving mogelijk in het CMS. Sommige soorten afbeeldingen vragen om een andere aanpak, zoals diagrammen en CAPTCHA’s. De basis blijft: tekstueel beschrijven wat je ziet.

### De juiste beschrijving
Een tekstueel alternatief werkt alleen als de beschrijving adequaat is. In veel gevallen gaat het om ‘vertellen wat je ziet’. Soms gaat het juist om ‘vertellen wat dit doet’, bijvoorbeeld bij een button in een formulier. En als een afbeelding geen informatie toevoegt, is het beter ook geen tekstalternatief te geven. Denk dus goed na over de tekstuele beschrijving. Iemand die alleen de tekstalternatieven ziet zou de informatie nog steeds moeten kunnen begrijpen en de website nog steeds moeten kunnen gebruiken.

### Meer weten?
Ontwikkelaars kunnen in de technische norm meer lezen over afbeeldingen bij de volgende toegankelijkheidseisen:

 - [Succescriterium 1.1.1 - Niet-tekstuele content](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)
 - [Succescriterium 1.3.1 - Info en relaties](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html) 
 - [Succescriterium 2.4.4 - Linkdoel (in context)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

## Animatie & verandering

Met bewegende plaatjes en knipperende onderdelen kun je de aandacht trekken of een ingewikkeld onderwerp begrijpelijk maken. Daarnaast kun je delen van een pagina of een hele pagina automatisch laten veranderen, bijvoorbeeld om informatie te verversen. Zorg bij al deze vormen van beweging en verandering voor een toegankelijke aanpak.

### Pauzeren of uitzetten
Niet alle bezoekers zijn blij met een bewegend onderdeel op de website. Sommige bezoekers worden er door afgeleid, raken in de war of kunnen niet meer goed met de website werken. Het moet daarom altijd mogelijk zijn om animaties en veranderingen te pauzeren of uitzetten.

### Flitsen
Als een element op een website snel achter elkaar flitst kunnen bezoekers met bepaalde aandoeningen een toeval krijgen. Er zijn specifieke richtlijnen die je moet volgen om dit te voorkomen. Deze toegankelijkheidseis heeft een speciale status: geen enkel onderdeel van de website mag ervan afwijken, zelfs niet als je een toegankelijk alternatief ervoor biedt. Wijk je wel af, dan zorgt dat onderdeel er namelijk voor dat sommige bezoekers de hele website, ook de toegankelijke onderdelen, niet meer kunnen gebruiken.

### Tijdslimiet
Als tekst of beeld op een website na een bepaalde tijd automatisch verandert moeten bezoekers die tijdslimiet uit kunnen zetten. Sommige bezoekers zijn misschien niet in staat om de tekst of het beeld binnen de gestelde tijdslimiet te lezen, bekijken of begrijpen. Een voorbeeld van zo’n situatie is een slideshow of caroussel waarbij verschillende beelden en/of teksten elkaar automatisch afwisselen. Om aan de toegankelijkheidseisen te voldoen moeten bezoekers zo’n slideshow kunnen pauzeren.

### Meer weten?
Ontwikkelaars kunnen in de technische norm meer lezen over animatie en verandering bij de volgende toegankelijkheidseisen:

* [Succescriterium 2.2.1 - Timing aanpasbaar](http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
* [Succescriterium 2.2.2 - Pauzeren, stoppen, verbergen](http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)
* [Succescriterium 2.3.1 - Drie flitsen of beneden drempelwaarde](http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)


## Audio & video
Vaak kun je informatie met een geluidsfragment of filmpje op een snelle, eenvoudige manier overbrengen. Zo is een instructievideo voor veel bezoekers gemakkelijker te volgen dan een lange tekstuele handleiding. Voeg altijd alternatieven toe voor bezoekers die de beelden en geluiden niet kunnen zien of horen.

### Soorten audio en video
In de toegankelijkheidseisen wordt onderscheid gemaakt tussen verschillende vormen van audio en video:

 1. Geluid (zonder beeld) 
 2. Bewegend beeld (zonder geluid) 
 3. Filmpjes (een combinatie van beeld, geluid en eventueel interactieve elementen
    zoals een knop waar je op kunt klikken)

### Eerder opgenomen audio en video
Alle audio en video die niet rechtstreeks wordt uitgezonden is niet live en dus eerder opgenomen. De audio of video kan dan toegankelijk worden gemaakt voordat deze online komt. Daarom zijn er meer vereisten aan eerder opgenomen audio en video dan aan live uitzendingen. Deze vereisten gelden voor audio en video die gepubliceerd is na 23 september 2020.

### Verplichtingen voor toegankelijke audio en video (niet live)
| Type	|	Tekstalternatief	|	Ondertiteling	|	Audiobeschrijving	|	Transcript	|
|:
|	Niet-live geluid	|	ja	|	nee	|	nee	|	ja | 
|	Niet-live bewegend beeld	|	ja	|	nee	|	ja, als er geen transcript is	|	ja, als er geen audiobeschrijving is|
|Niet-live filmpjes  (beeld, geluid en/of interactie)|	ja |	ja |	ja, tenzij alle visuele informatie ook te horen is |	nee, tenzij het filmpje interactieve elementen bevat

### Live audio en video
Live audio en video wordt opgenomen en direct doorgestuurd naar de ontvanger. De enige vertraging die er mogelijk wel is heet 'uitzendvertraging'. Het gaat dan om een korte vertraging die bijvoorbeeld gebruikt wordt om de uitzender de tijd te geven om de audio- of videodata om te zetten voor verzending of om te censureren. Deze vertraging is te kort om de audio of video te bewerken of toegankelijk te maken.

### Uitzondering live audio en video
Voor live audio en video geldt een uitzondering: deze bestanden hoeven niet toegankelijk te zijn. Als een live uitgezonden audio- of videofragment na de live uitzending online blijft staan of opnieuw beschikbaar wordt gesteld, gaan de eisen voor eerder opgenomen audio en video gelden. Lees meer over de uitzondering voor live audio en video.

### De onderdelen van toegankelijke audio en video
#### Tekstalternatief
Alle vormen van audio en video moeten een kort tekstalternatief krijgen. Dit is vergelijkbaar met de alt-tekst van afbeeldingen. Door deze korte tekst weten bezoekers die hulptechnologie gebruiken, ook als de audio of video zelf niet toegankelijk zou zijn, in ieder geval waar ze mee te maken hebben. Hoe je dit alternatief plaatst hangt af van de techniek die gebruikt is om het multimediabestand op de webpagina te plaatsen. 

#### Ondertiteling
Het gaat hier om een speciale vorm van ondertiteling bedoeld voor doven en slechthorenden. Deze ondertitels bevatten niet alleen de gesproken tekst, maar beschrijven ook andere dingen die te horen zijn. Bijvoorbeeld geluidseffecten (een ontploffing, een deurbel), muziek, gelach, locatie en identificatie van de spreker (als je aan de stem kunt horen wie iets zegt, maar deze persoon niet te zien is).

#### Audiobeschrijving
In een audiobeschrijving vertelt een stem belangrijke visuele details die je niet kunt afleiden uit dat wat te horen is. Dat kan bijvoorbeeld gaan om handelingen, personages en sceneveranderingen, maar ook om tekst die op het scherm te zien is. De audiobeschrijving is dus een aanvulling op wat al te horen is. De stem van de audiobeschrijving vertelt op de momenten dat er pauzes zijn in het filmpje. Als alle belangrijke visuele details ook af te leiden zijn uit het geluid is een audiobeschrijving niet verplicht.

#### Transcript
Een transcript is een uitgeschreven tekst. In het transcript vertel je zo compleet mogelijk het verhaal van het filmpje. Je vertelt wat er gebeurt, dus wat er te zien en te horen is, en wat er gezegd wordt, door wie. Eventuele interactieve elementen neem je ook op in het transcript. Kun je in het filmpje bijvoorbeeld op een knop drukken, dan neem je in het transcript een link op naar de pagina waar je die actie kunt uitvoeren.

### Beeld of geluid dat automatisch start
Gebruik je bewegend beeld of geluid op een webpagina en start dit automatisch, dan moet het voor bezoekers mogelijk zijn om er wat aan te doen. Ze moeten het bijvoorbeeld kunnen pauzeren of stoppen. Dit geldt niet als het geluid minder dan 3 seconden speelt of het bewegend beeld minder dan 5 seconden beweegt.

### Media-alternatief voor tekst
In sommige gevallen gebruik je audio of video als een niet-tekstueel alternatief voor de tekst op een pagina. Denk aan een filmpje waarin een complex begrip eenvoudig wordt uitgelegd, of een vertaling van de tekst in gebarentaal. Als alle informatie ook in de tekst staat, is dat multimediabestand een media-alternatief voor tekst. Voor dit bestand gelden dan minder eisen.

### Meer weten?
Ontwikkelaars kunnen in de technische norm meer lezen over audio en video bij de volgende toegankelijkheidseisen:

* [Succescriterium 1.1.1 - Niet-tekstuele content](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)
* [Succescriterium 1.2.1 - Louter-geluid en louter-videobeeld (vooraf opgenomen)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
* [Succescriterium 1.2.2 - Ondertiteling voor doven en slechthorenden (vooraf opgenomen)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)
* [Succescriterium 1.2.3 - Audiodescriptie of media-alternatief (vooraf opgenomen)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html)
* [Succescriterium 1.2.4 - Ondertitels voor doven en slechthorenden (live)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html)
* [Succescriterium 1.2.5 - Audiodescriptie (vooraf opgenomen)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html)

## Formulieren

Een formulier nodigt uit tot interactie. Zorg er daarom voor dat alle bezoekers van je website daadwerkelijk in staat zijn het formulier te gebruiken. Dat bereik je door een combinatie van techniek, vormgeving en tekst.

### Structuur

Een formulier toegankelijk maken begint bij degelijke code: de onderliggende structuur van het formulier. In deze structuur moeten labels (instructies) en invoervelden aan elkaar gekoppeld zijn. Zo kunnen ook bezoekers die bijvoorbeeld voorleessoftware gebruiken het formulier invullen.

### Validatie en feedback

Als je van bezoekers een bepaalde invoer verwacht, geef dat dan duidelijk aan in de instructie bij het betreffende veld. Maakt de bezoeker een fout? Geef dan aan wat de fout is en hoe het beter zou kunnen. Markeer fouten niet alleen met kleur (bijvoorbeeld een rood kader) of vorm (bijvoorbeeld vetgedrukt) maar noem ze ook in tekst. Bezoekers die de kleur of vorm niet kunnen zien weten anders niet waar de fout zit.

### Toetsenbordbediening

Niet iedereen gebruikt een muis bij het bezoeken van een website. Formulieren moeten daarom met het toetsenbord te gebruiken zijn. Dat betekent dat je met de tabtoets door de invoervelden kunt tabben, dat je via het toetsenbord keuzerondjes kunt selecteren, selectievakjes kunt aankruisen, enzovoorts. Het hele formulier moet ingevuld en verzonden kunnen worden met alleen het toetsenbord.

### Tijdslimiet

Soms moeten formulieren binnen een bepaalde tijd worden ingevuld. Doe je er te lang over, dan ben je de ingevulde gegevens weer kwijt. Maar sommige bezoekers hebben meer tijd dan gemiddeld nodig om een formulier in te vullen. Bijvoorbeeld omdat zij voorleessoftware gebruiken of dyslectisch zijn. Deze bezoekers moeten de tijdslimiet op kunnen heffen of verlengen.

### Meer weten?

Ontwikkelaars kunnen in de technische norm meer lezen over formulieren bij de volgende toegankelijkheidseisen:

* [Succescriterium 1.1.1 - Niet-tekstuele content](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)
* [Succescriterium 1.3.3 - Zintuiglijke eigenschappen](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html)
* [Succescriterium 1.4.1 - Gebruik van kleur](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)
* [Succescriterium 2.2.1 - Timing aanpasbaar](http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
* [Succescriterium 2.4.6 - Koppen en labels](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
* [Succescriterium 2.4.7 - Focus zichtbaar](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html)
* [Succescriterium 3.2.1 - Bij focus](http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html)
* [Succescriterium 3.2.2 - Bij input](http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html)
* [Succescriterium 3.3.1 - Fout identificatie](http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html)
* [Succescriterium 3.3.2 - Labels of instructies](http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)
* [Succescriterium 3.3.3 - Foutsuggestie](http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html)
* [Succescriterium 3.3.4 - Foutpreventie (wettelijk, financieel, gegevens)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html)

## Navigatie
De mogelijkheid om te navigeren maakt het internet wat het is: een web aan informatie die via links met elkaar verbonden is. De navigatie is dan ook een zeer belangrijk onderdeel van een website. Als je die toegankelijk maakt zet je de deur open naar alle andere informatie die je te bieden hebt.

### Duidelijke verwijzingen

Niemand klikt graag op een link waarvan de bestemming niet duidelijk is. Schrijf daarom linkteksten waaruit duidelijk blijkt waar de link heen zal leiden, ook als je de omliggende tekst niet leest. Sommige bezoekers gebruiken hulptechnologie die de links los van de lopende tekst op kan lezen. Een linktekst als ‘klik hier’ is dan niet duidelijk. Beter zou bijvoorbeeld zijn: ‘lees meer over toegankelijkheid’. Hiermee help je niet alleen bezoekers, maar ook zoekmachines. Die gebruiken de linktekst om de pagina waarnaar verwezen wordt beter te begrijpen.

### Meerdere ingangen

Elke pagina in een website moet op meer dan één manier te vinden zijn, want niet elke bezoeker navigeert op dezelfde wijze. Zo wil de ene bezoeker het navigatiemenu gebruiken en typt de andere bezoeker liever direct een zoekterm in het zoekveld.

### Wees consequent

Op de meeste websites komt een aantal navigatie-items telkens terug, bijvoorbeeld in het hoofdmenu. Zorg dat de volgorde van menu-items op elke pagina hetzelfde is. Zo weten ook bezoekers die geen visueel overzicht over de hele pagina hebben waar ze aan toe zijn.

### Afbeeldingen en links

Soms is een afbeelding tegelijkertijd een link. Ook dan moet er een duidelijke linktekst zijn, zodat een bezoeker die de afbeelding niet ziet toch weet waar de link naar toe zal leiden. Als de link alleen uit een afbeelding bestaat dan doet de alt-tekst van die afbeelding dienst als linktekst. Daar gelden dan dezelfde regels voor als voor ‘gewone’ linkteksten.

Gebruik je zowel een afbeelding als een tekst om te linken? Combineer deze dan tot één link. Voor sommige bezoekers is het storend als dezelfde link twee keer direct na elkaar voorkomt.

### Links om delen van de pagina over te slaan

Bezoekers die voorleessoftware gebruiken of met het toetsenbord navigeren kunnen niet zomaar ergens klikken om verder te gaan. Ze moeten op een vaste volgorde door de inhoud van een pagina navigeren. Geef deze bezoekers de mogelijkheid om met een zogenaamde ‘skiplink’ blokken op de pagina over te slaan, zoals het navigatiemenu.

### Meer weten?

Ontwikkelaars kunnen in de technische norm meer lezen over navigatie bij de volgende toegankelijkheidseisen:

* [Succescriterium 1.1.1 - Niet-tekstuele content](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)
* [Succescriterium 2.4.1 - Blokken omzeilen](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
* [Succescriterium 2.4.4 - Linkdoel (in context)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)
* [Succescriterium 2.4.5 - Meerdere manieren](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html)
* [Succescriterium 3.2.3 - Consistente navigatie](http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html)

## PDF-bestanden
Alle eisen die voor webpagina’s gelden zijn ook op pdf-bestanden van toepassing. De manier waarop je ze toepast wijkt wel af. Voor pdf-bestanden gebruik je vaak heel andere technieken dan voor ‘gewone’ webpagina’s.

**Let op**: er bestaat een uitzondering voor pdf-bestanden (en andere kantoorbestandsformaten) die vóór 23 september 2018 zijn gepubliceerd. Deze hoeven niet in alle gevallen toegankelijk te zijn.

### Pdf of webpagina?

Het is niet altijd nodig om informatie in een pdf-bestand te zetten. Vaak kun je dezelfde informatie op een gewone webpagina in het CMS plaatsen. Als er geen belangrijke reden is om pdf te gebruiken is dat vaak een betere keuze. Waarom? Webpagina’s worden vaak beter weergegeven op kleine schermen. Bezoekers hoeven niet om te schakelen naar een andere omgeving (van de website naar het pdf-bestand) en webpagina’s laden meestal sneller dan pdf-bestanden. Voor formulieren geldt hetzelfde: meestal zijn deze gebruiksvriendelijker en eenvoudiger te maken als ze geplaatst worden op een webpagina dan in een pdf-bestand.

### Afbeeldingen en contrast

Afbeeldingen in pdf-bestanden die informatie overdragen (dus niet alleen maar decoratief zijn) moeten voorzien zijn van een alternatieve tekst. Die kun je in de meeste programma’s waarmee je de bronbestanden van pdf’s maakt al toevoegen (zoals Microsoft Word en Open Office Writer). Je kunt het eventueel ook achteraf doen als nabewerking van de pdf, in een programma zoals Adobe Acrobat Pro. Decoratieve afbeeldingen moet je in pdf-bestanden zo plaatsen dat ze door hulptechnologie genegeerd kunnen worden.

Voor pdf-bestanden gelden dezelfde contrasteisen als voor webpagina's. Dat betekent dat het contrast tussen voor- en achtergrondkleuren voldoende moet zijn.

### Structuur van de tekst

Als een tekst gestructureerd is, dus bestaat uit bijvoorbeeld koppen, paragrafen, opsommingen en dergelijke, dan moet je die structuur vastleggen in het pdf-bestand. Dat kun je doen in programma’s zoals Microsoft Word en Open Office Writer of achteraf met een programma zoals Adobe Acrobat Pro. Heb je te maken met een gescand document? Dan is het automatisch omzetten van de scan naar echte tekst met optische tekenherkenning (OCR) de eerste stap.

Heb je de scan omgezet naar tekst, of werk je in een bronbestand dat al uit tekst bestaat, gebruik dan de juiste opmaakprofielen om koppen, lijsten en paragrafen te markeren. Ook tabellen moet je op een bepaalde manier in het bronbestand plaatsen, of achteraf aanpassen. Alleen dan zijn de tabellen bruikbaar voor bezoekers die hulptechnologie gebruiken.

### Links

In pdf-bestanden kunnen links voorkomen. De lezer van de pdf kan de link echt volgen, als deze er op de juiste manier in is gezet. Links in pdf-bestanden moeten voldoen aan alle toegankelijkheidseisen voor links, en daarnaast ook met de juiste technieken in het pdf-bestand worden geplaatst.

### Formulieren

Het is mogelijk om een formulier in een pdf-bestand te plaatsen. Pdf-formulieren moeten aan alle toegankelijkheidseisen voor formulieren voldoen. Het is bijvoorbeeld ook in pdf-bestanden verplicht om duidelijke instructies bij invoervelden te geven. De techniek die je gebruikt om aan de eisen te voldoen is vaak wel anders dan voor HTML-formulieren.

De instructies (labels) en alle andere formulier-elementen moeten met de juiste technieken in het pdf-document worden geplaatst. Als een bezoeker een veld verkeerd invult moet dit op een toegankelijke wijze aan de bezoeker worden meegedeeld. Dit kun je niet doen in een tekstbewerkingsprogramma zoals Microsoft Word of Open Office Writer. Je hebt hiervoor Adobe Acrobat Pro of een ander geavanceerd pdf-bewerkingsprogramma voor nodig.

### Navigatie en leesvolgorde

Voor bezoekers met hulptechnologie is het niet altijd duidelijk waar ze zijn als zij een pdf-bestand bezoeken. Daarom moet elk pdf-bestand een duidelijke titel hebben. Bij langere documenten is het belangrijk om bladwijzers aan te maken. Met bladwijzers kun je gedeelten van een document markeren, bijvoorbeeld hoofdstukken. De bezoeker kan via de bladwijzers eenvoudig naar een ander gedeelte springen.

Je moet ook letten op de tab- en leesvolgorde. Zeker bij pdf-bestanden met wat meer opmaak, zoals een tekst die over meerdere kolommen loopt, is dit belangrijk. Als de leesvolgorde dan niet klopt, leest voorleessoftware niet per kolom, maar regel per regel. Alle eerste, tweede en volgende regels van de kolommen worden dan aan elkaar geplakt.

### Taal

De toegankelijkheidseisen die gaan over de taal van een tekst gelden ook voor pdf-bestanden. Geef voor het hele bestand aan wat de taal is van de tekst. Dat kan in een tekstbewerkingsprogramma zoals Microsoft Word of Open Office Writer, of met Adobe Acrobat Pro. Als er woorden en zinnen in de tekst voorkomen die in een andere taal zijn geschreven moet je dat ook markeren.

### Meer weten?

Alle toegankelijkheidseisen uit de norm WCAG 2.0 zijn van toepassing op pdf-bestanden. Specifieke[ technieken om pdf-bestanden toegankelijk te maken](https://www.w3.org/TR/WCAG20-TECHS/pdf.html) zijn door het W3C verzameld.

## Tabellen

Met een tabel kun je de verbanden tussen verschillende gegevens inzichtelijk maken. Voor wie de tabel kan zien zijn die relaties vaak snel duidelijk. Maar om ze ook voor bezoekers die hulptechnologie gebruiken waarneembaar te maken moet je de juiste HTML-code toepassen.

### Juiste code

Tabellen bestaan uit rijen (horizontaal) en kolommen (verticaal). Gegevens in de tabel hebben zowel horizontaal als verticaal een relatie met elkaar. Met de juiste HTML-code kun je die relaties expliciet maken. Je geeft dan aan welke cellen koppen zijn en welke cellen gegevens bevatten. Bij complexe tabellen geef je ook nog eens aan welke kop precies bij welke cellen hoort.

Bezoekers die hulptechnologie gebruiken hebben hier profijt van. Doordat de relaties in de code staan kan de hulptechnologie de informatie uit de tabel op een overzichtelijke en logische manier presenteren.

### Bijschriften en samenvattingen

Tabellen kun je voorzien van een bijschrift en een samenvatting. Dat is nuttig voor bezoekers die de tabel niet in één keer kunnen overzien, maar cel voor cel moeten lezen of laten voorlezen. Zij weten dan al vooraf of de informatie in de tabel de moeite waard is om door te nemen. Om het bijschrift of de samenvatting te verbinden aan de tabel moet je de juiste code gebruiken.

### Complexe tabellen

Sommige tabellen zitten heel ingewikkeld in elkaar, met meerdere niveaus en koppen. Het kan dan nodig zijn om code toe te voegen aan de tabel om de verbanden duidelijk te maken, zoals het scope-attribuut en id- en headers-attributen. Stel jezelf echter de vraag of de tabel niet kan worden vereenvoudigd of gesplitst in meerdere tabellen. Soms is dat voor álle bezoekers toegankelijker.

### Meer weten?

Bouwers kunnen in de technische norm meer lezen over tabellen bij de volgende toegankelijkheidseis:

* [Succescriterium 1.3.1 - Info en relaties](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Techniek
Veel van de toegankelijkheidseisen hebben te maken met techniek en code. Als een website ‘onder water’ goed in elkaar zit, dan is de basis voor toegankelijkheid gelegd.

### Informatie, structuur en presentatie

Informatie, structuur en presentatie zijn belangrijke begrippen voor wie toegankelijk wil bouwen. Door de structuur van een pagina met de juiste HTML-elementen op te bouwen zorg je dat de betekenis van pagina-onderdelen behouden blijft, ongeacht de presentatie ervan. Je geeft bijvoorbeeld aan welke tekst een kop is, en welke tekst een paragraaf. Dat is dan vastgelegd in de HTML-code. Normaal gesproken zal een kop groter en vetter zijn dan een paragraaf. Maar ook als deze vormgeving wegvalt is de betekenis van de tekstdelen nog steeds aanwezig.

Door die gestructureerde informatie te scheiden van de presentatie (vormgeving) maak je het voor bezoekers mogelijk om de informatie op verschillende manieren tot zich te nemen. De standaard vormgeving van de website is er één van. Maar hulptechnologie kan de informatie ook omzetten naar spraak of braille, de tekst vergroten of de achtergrondkleur aanpassen.

### Juiste technieken

Websites kunnen op verschillende manieren worden gebouwd. Op het eerste gezicht zie je geen verschil. Toch kan de ene website toegankelijk zijn en de andere helemaal niet. Verkeerde technieken kunnen ervoor zorgen dat informatie ontoegankelijk is voor grote groepen bezoekers. Door met de juiste technieken te werken zorg je voor een toegankelijke basis.

### Volg de regels

Voor het bouwen van websites zijn internationale standaarden ontwikkeld. Standaarden zijn documenten met afspraken en vereisten voor een bepaald onderwerp. Bijvoorbeeld voor de taal waarin de meeste websites zijn geschreven: HTML. Door de regels te volgen gebruik je de code op de manier waarop deze bedoeld is. Hulptechnologieën sluiten aan bij deze standaarden. Websites die volgens de webstandaarden zijn gebouwd zijn daarom goed te gebruiken met hulptechnologie.

### Meer weten?

Veel van de toegankelijkheidseisen hebben zowel een redactionele als een technische kant. De redacteur moet bijvoorbeeld een beschrijvende paginatitel invoeren, maar de bouwer moet zorgen dat die titel op de juiste manier in de code komt te staan. Ontwikkelaars kunnen in de technische norm (WCAG 2.0) meer lezen over technieken die gebruikt kunnen worden om aan de toegankelijkheidseisen te voldoen.

## Tekst

Op zichzelf is tekst al heel toegankelijk. Digitale tekst kan met hulptechnologie omgezet worden in spraak of braille. Ook zoekmachines begrijpen digitale tekst zonder problemen. Maar wil je alle mogelijkheden van tekst benutten, dan geef je de structuur van die tekst in code aan en zorg je voor duidelijke koppen en titels.

### De structuur van een tekst aangeven

De meeste teksten zijn niet ‘plat’: ze hebben een structuur. Ze bestaan uit koppen en paragrafen, opsommingen of citaten. Vaak is de structuur van een tekst goed zichtbaar in de vormgeving. Kopjes zijn vetgedrukt, net als belangrijke woorden. Paragrafen zijn gescheiden door witregels. Opsommingen en genummerde lijsten herken je ook direct: elk item staat op een nieuwe regel, voorafgegaan door een opsommingsteken of cijfer.

Al deze informatie over de structuur van een tekst kun je vastleggen in de HTML-code van die tekst. Dat gaat automatisch als je de juiste knoppen van de editor in het CMS gebruikt. Door de structuur op die manier aan te geven maak je de tekst en de structuur daarvan toegankelijk voor alle bezoekers.

### Andere taal of tekstrichting

Gebruik je een woord of een zin in een andere taal? Ook dit moet je aangeven met de knoppen van de editor in het CMS. Dat geldt ook voor de tekstrichting, als die voor een deel van de tekst anders is. Alleen dán leest voorleessoftware de tekst in de juiste taal en volgorde voor.

### Duidelijke koppen en titels

De toegankelijkheid van teksten zit hem niet alleen in de structuur. Een toegankelijke tekst is ook begrijpelijk. Die begrijpelijkheid kun je vergroten door duidelijke titels en koppen te gebruiken. Daarom moet de titel van een pagina duidelijk beschrijven waar de pagina over gaat. En (tussen-)koppen moeten het onderwerp of het doel van de paragrafen die erbij horen beschrijven. 

### Meer weten?

Ontwikkelaars kunnen in de technische norm meer lezen over tekst bij de volgende toegankelijkheidseisen:

* [Succescriterium 1.3.1 - Info en relaties](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
* [Succescriterium 1.3.2 - Betekenisvolle volgorde](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)
* [Succescriterium 1.4.5 - Afbeeldingen van tekst](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-text-presentation.html)
* [Succescriterium 2.4.2 - Paginatitel](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html)
* [Succescriterium 2.4.6 - Koppen en labels](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
* [Succescriterium 3.1.2 - Taal van onderdelen](http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html)

## Vormgeving

Kleur, vorm en plaatsing van elementen op een webpagina bepalen niet alleen de uitstraling van die pagina. Met de juiste vormgeving kun je je boodschap beter overdragen. Door op een paar punten te letten zorg je dat de vormgeving toegankelijkheid niet in de weg staat.

### Wees niet afhankelijk van vorm of kleur

Niet alle bezoekers kunnen de vormgeving van een webpagina zien. Sommige bezoekers zijn kleurenblind of slechtziend, andere bezoekers laten de tekst voorlezen of omzetten in braille. Het is daarom belangrijk om alle informatie die je met kleur of vorm overbrengt ook met tekst over te brengen. Een rode knop voor ‘stoppen’ en een groene knop voor ‘doorgaan’ kan dus alleen als op die knoppen ook een tekst staat.

### Contrast

Zorg dat het contrast tussen voor- en achtergrondkleuren voldoende is. Bezoekers die kleurenblind of slechtziend zijn kunnen kleuren vaak niet goed waarnemen. Ook bezoekers die een webpagina in grijstinten afdrukken of die in de volle zon een website proberen te gebruiken hebben baat bij een goed kleurcontrast.

### Wees consequent

Bij het vormgeven van navigatieblokken is het belangrijk consequent te zijn. Zorg dat de volgorde van menu-items op elke pagina hetzelfde is. Zo weten ook bezoekers die geen visueel overzicht over de hele pagina hebben waar ze aan toe zijn.

### Meer weten?

Ontwikkelaars kunnen in de technische norm meer lezen over vormgeving bij de volgende toegankelijkheidseisen:

* [Succescriterium 1.3.1 - Info en relaties](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
* [Succescriterium 1.3.3 - Zintuiglijke eigenschappen](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html)
* [Succescriterium 1.4.1 - Gebruik van kleur](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)
* [Succescriterium 1.4.3 - Contrast (minimum)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)
* [Succescriterium 3.2.3 - Consistente navigatie](http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html)