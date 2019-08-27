# Team Collab

Opgavens formål er at få afprøvet udvikling af en express baseret hjemmeside, via team arbejde.

Konceptet er at klassen opdeles i mindre teams på 3-4 elever, og hvert team skal finde ud af hvordan de vil løse opgaven ved at opstille delmål og fordele dem på en fornuftig måde.
Og for at bryde lidt op med de klassiske grupperinger i klassen, får man ikke selv lov at vælge sit team! Det er også et forsøg på at klassen lærer hindanden lidt bedre at kende, som vi talte om før ferien.

En fra teamet har det primære github repository, som de andre i teamet `forker` og arbejder på deres del af løsningen i det `forkede` repo.
Når et mål er opnået, skal der oprettes en `pull request` til det oprindelige repo, hvor ændringerne inspiceres og hvis alt er i orden, så `merges` ændringerne til det primære repo.

De andre `forkede` repos kan så lave en `upstream sync` og modtage de opdaterede `commits` og derved arbejde videre med de andre team-medlemmers koder.

Vi afslutter på fredag d. 23, hvor hver gruppe kort præsenterer deres produkt og en kort reflektion over hvordan det gik med at arbejde sammen.

## Selve Projektet der skal produceres.

Opgaven er med vilje ret åben, der er meget få krav som skal opfyldes, samt designet er helt op til teamet at finde på.

* Siden skal køre via en express server med ejs views og mysql database som lager.
* Der skal være 2-3 clientside sider der let kan navigeres rundt imellem via browseren.
* Der skal være mindst 1 side hvor data der udskrives, er et udtræk der kommer fra databasen.
* Der skal være en kontakt formular med clientside og serverside validering. beskederne der modtages fra formularen indsættes i en database.
* Der skal være et ensartet design på alle clientside siderne.
* En gang hver dag, vil en fra teamet holde et kort produktionsmøde med læreren, og giver en kort melding om hvordan projektet skrider frem.

Hjemmesidens tema er helt åbent. Det kunne f.eks. være en side i stil med HIFI klub opgaven, eller en simplere version af "the awesome newspage". Måske en fan-side for et band eller en film franchise osv... *det er **ikke** så meget et fancy smart design der lægges vægt på, det er flowet i opgavens løsning og sammenarbejdet.* 

Men når det er lykkedes at vælte de ovenstående mål, så er der fri leg til at udvide siden med masser af funktionalitet, det vigtige her er at teamet findet ud af det i fællesskab. 

## tips

Der udvælges en fra teamet som har hoved repository, og alle andre forker/pull-requester. 

Brug et par timers tid på at brainstorme opgavens tema og omfang.

Brug tid på at dele opgaven op i overkommelige bidder. 

Brug tid på at tale om navngivning, så der er enighed om f.eks. database felt navne.

Arbejd med dummydata indtil der er en database der kan trækkes data ud fra.

Afsæt god tid til at håndtere `pull requests`, `merges` og `upstream syncs` den del kan drille ret meget!

Sørg for at etablere en klar kommunikations strategi, eventuelt benyt slack eller lign til gruppe beskeder og informationer.

Her er en enkel video der går igennem at synkronisere en fork: https://youtu.be/-zvHQXnBO6c

Vi holder oplæg omkring github og de koncepter der er behov for, efterhånden som vi kommer til dem.