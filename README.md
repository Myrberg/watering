# watering
Monitorering och bevattning av en odling

Med detta system kan du monitorera din odling i realtid samt få ut statistik
för tidigare mätningar.
Till systemet ingår även en logi för att automatiskt kunna bevatta din odling.



Projektet består av 3 delar:

/Arduino-code:
  Här ligger den kod som ska användas för arduino-enheten
  
/Data-upload
  Här ligger den kod som tar emot information från arduino-enheten
  samt skickar upp all data till Apigee.
  Här sker även den lokala lagringen av data
  
/Web-application
  Här ligger all kod för själva Webb-applikationen
  Webbsidan bygger på AngularJS där alla data kommer från
  Apigee-API:et
