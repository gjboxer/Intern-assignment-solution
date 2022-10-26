//test-1
//default test case
var dict = { "2020-01-01": 4, "2020-01-02": 4, "2020-01-03": 6, "2020-01-04": 8, "2020-01-05": 2, "2020-01-06": -6, "2020-01-07": 2, "2020-01-08": -2 }
//test-2
//uncomment this to run testcase-2
//var dict = { "2020-01-01": 6, "2020-01-04": 12, "2020-01-05": 14, "2020-01-06": 2, "2020-01-07": 4, }

function solution(dict) {

    //variable to store the output
    var res = { "Mon": 0, "Tue": 0, "Wed": 0, "Thu": 0, "Fri": 0, "Sat": 0, "Sun": 0 }
    //function to give the day of the week of the input date
    function returnday(date) {
        var myDate = date;
        myDate = myDate.split("-");
        var newDate = myDate[0] + "-" + myDate[1] + "-" + myDate[2];
        var currentDate = new Date(newDate);
        var day_name = currentDate.getDay() - 1;
        if (day_name < 0) {
            day_name += 7
        }
        var days = new Array("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun");
        return days[day_name];
    }

    //loop to calculate the result and store it in res
    for (var date in dict) {
        var day = returnday(date)
        var value = dict[date]
        //console.log(day,value)

        if (!(day in res)) {
            res[day] = value
        }
        //if day already exist in res then update the value
        else {
            res[day] += value;
        }
    }
    //loop to check for empty values and to fill it using the average of the adjoining two values
    var keys = Object.keys(res);
    for (var i = 0; i < keys.length; i++) {
        //console.log(res[keys[i]])
        if (res[keys[i]] == 0) {
            var value1 = res[keys[i - 1]]
            var value2 = res[keys[i + 1]]
            var value3 = res[keys[i - 2]]
            //condition if two consecutive empty values are encountered
            if (value2 == 0) {
                res[keys[i]] = 2 * value1 - value3
            }
            else { res[keys[i]] = (value1 + value2) / 2 }

        }
    }
    return res
}
console.log(solution(dict))
