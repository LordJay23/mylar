function restartQA(e, message, title) {
	var self = this;
	
	bootbox.confirm("Are you sure you want to restart AllianceKeeper?", function(result) {
		if (result) {
			self.restart(message, title);
		}
	});

}

function restart(message, title) {
    window.location.href = "restart";
}

function shutdownQA(e) {
    var self = this;

	bootbox.confirm("Are you sure you want to shutdown AllianceKeeper?", function(result) {
		if (result) {
			self.shutdown();
		}
	});
}

function shutdown() {
    window.location.href= "shutdown";
}


function baseIndexQA(e, playerid, hqlevel) {
    var self = this;
    choices = [];
    for (step = hqlevel; step < 16; step++) {
        stepstring = step.toString();
        selected = "";
        if (hqlevel==step) {
            selected = "selected";
        }
        choices.push({
            text: stepstring,
            value: step,
            selected: selected,
            });
        console.log(choices);
    }
    bootbox.prompt({
    title: 'Select HQ Level',
    inputType: 'select',
    value: hqlevel,
    inputOptions: choices,
    callback: function (result) {
        if (result) {
            baseIndex(playerid, result);
        }
    }
    });
}

function baseIndex(playerid, level) {
                window.location.href = "editBaseIndex?PlayerID=" + playerid + "&HQ=" + level
}