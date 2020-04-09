function tune(g_strings) {
    const freqs = [329.63, 246.94, 196, 
                   146.83, 110, 82.41];
    let res = [];
    for (var i = 0; i < freqs.length; ++i) {
        res[i] = tune_string(g_strings[i], freqs[i])
    }
    return res;
}

function tune_string(actual_freq, to_tune_freq) {
    const msgs = {missing: "-", low: ">•", waylow:">>•",
                ok:"OK", high: "•<", wayhigh: "•<<" 
    };

    if (actual_freq === 0) {return msgs.missing}

    let err = 100 * (to_tune_freq - actual_freq)/to_tune_freq;

    if ( actual_freq === to_tune_freq) {
        return msgs.ok;
    }
    else if (err < 0) {
        if (Math.abs(err) < 3 ) {return msgs.high}
        else {return msgs.wayhigh}
    }
    else {
        if (Math.abs(err) < 3 ) {return msgs.low}
        else {return msgs.waylow}
    }
}


