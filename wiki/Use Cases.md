git # Use Cases
Habit erstellen
- Auf den Hinzufügeknopf drücken, um ein das Modul für die Habit-Erstellung zu öffnen
	- Vorher: Startseite mit Hinzufügebutton
	- Nachher: Habit-Erstellungsmodul wird geöffnet
- Auf den Erstellen-Knopf drücken, um ein Habit zu tracken/anzuzeigen
	- Vorher: Modul für die Habit-Erstellung ist geöffnet
	- Nachher:
		- Gültig:
			- Modul wird geschlossen
			- Startseite zeigt neues Habit an
		- Ungültig (Wenn Habit mit dem Namen bereits existiert):
			- Fehlermeldung wird angezeigt (Entweder Namen ändern oder auf das Kreuz drücken, um aus dem Modul zu gelangen)
	- Akzeptanzkriterien:
		- Habit wird in der Datenbank angelegt
		- Name als Feld ist Pflicht, Farbe ist optional und wird ohne Eingabe mit Grau belegt
Habit anclicken
- Auf ein Container eines Habits klicken, um eine detaillierte Ansicht des Habits zu haben
	- Vorher: Startseite geöffnet
	- Nachher: Habit-Modal geöffnet, dass das Habit im Detail anzeigt
	- Akzeptanzkriterien:
		- Angezeigt wird: Habitname, Heatmap-Calendar (erstmal Platzhalter), Löschbutton
Habit löschen
- Auf den Löschbutton klicken, um ein Habit zu entfernen.
	- Vorher: Habit-Modal geöffnet
	- Nachher: Startseite geöffnet, die alle verbleibenden Habits anzeigt
	- Akzeptanzkriterien:
		- Abfrage, ob man sich sicher ist
Habit pausieren
- Habit für eine bestimme Anzahl von Tagen oder bis zu einem Datum pausieren, damit diese fehlende Tage nicht zählen
	- Vorher: Habit-Modal geöffnet
	- Nachher: Startseite geöffnet mit den pausierten Habits ausgegraut
	- Akzeptanzkriterien:
		- Man kann kein Habit tracken/abhaken
		- Man kann weiterhin auf das Habit klicken, um das pausieren aufzuheben
Habit für einen Tag abhaken
- Habit abhaken, sodass ein Habit für den laufenden Tag abgeschlossen ist
	- Vorher: Startseite geöffnet, noch nicht abgehakt
	- Nachher: Startseite geöffnet, abgehakt
	- Akzeptanzkriterien:
		- Ein zweites mal draufklicken, setzt das abhaken zurück

# Modale
- Habit-Erstellung: Ein Modal, das zur Erstellung eines neuen Habits dient. Man konfiguriert den Namen, die Frequenz und die Farbe
- Habit-Details: Ein Modal, das eine detaillierte Ansicht des Habits anzeigt. Neben den bearbeitbaren Konfigurationen des Habit-Erstellungsmodal gibt es weitere Informationen:
	- Löschbutton
	- Pausierbutton
	- Streak
	- Prozentuale Erfolgsrate der letzten 10 Male
	- Prozentuale Erfolgsrate insgesamt
	- Heatmap
