function getRandomNumberInRange(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumberInList(lst)
{
	return lst[Math.floor(Math.random() * lst.length)];
}

function showStaff(clef_type, notes)
{
	// Create a new staff
	var myStaff = new Staff({
		id: "myStaff",
		at: "staffDiv",
		clef: clef_type,
		accidental: "sharp",
		color: "#000000"
	});
	// Set notes (C major chord)
	myStaff.setNotes(notes);
}

function getRandomNote()
{
	$("#staffDiv").html(""); // Clear old staff

	var clef_type = "treble";
	var accidental = false;

	if (clef_type == "treble")
	{
		if (accidental == false)
		{
			var notes = [getRandomNumberInList([64, 65, 67, 69, 71, 72, 74, 76, 77])];
		}
		else
		{
			var notes = [getRandomNumberInRange(64, 78)];
		}
	}
	else if (clef_type == "bass")
	{
		if (accidental == false)
		{
			var notes = [getRandomNumberInList([43, 45, 47, 48, 50, 52, 53, 55, 57])];
		}
		else
		{
			var notes = [getRandomNumberInRange(43, 58)];
		}
	}

	showStaff(clef_type, notes);
}

// Main
$(document).ready(function() {
	getRandomNote();
	setInterval(getRandomNote, 1000);
});
