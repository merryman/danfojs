import { assert } from "chai"
import { to_date_time } from '../../src/core/timeseries'

describe("TimeSeries", function () {

    it("Check date formatting", function () {

        let data = ["02Sep2019", "03Sep2019", "04Sep2019"]

        let times = to_date_time({ "data": data, "format": "%d%b%Y%" })

        let new_data = [new Date("02-Sep-2019"), new Date("03-Sep-2019"), new Date("04-Sep-2019")]

        assert.deepEqual(times.date_list, new_data);

    });

    it("Check Invalid date Formatting", function () {

        let data = ["30-06-02019", "29-06-2019", "28-06-2019"]

        assert.throws(function () { to_date_time({ "data": data }) }, Error, "Invalid date, the date format not recognise");;

    });

    it("check month generated", function () {

        let data = ["02Sep2019", "03Dec2019", "04Jan2019"]

        let times = to_date_time({ "data": data, "format": "%d%b%Y%" })

        let new_data = [8, 11, 0]

        assert.deepEqual(times.month().values, new_data);
    });

    it("check month Name generated", function () {

        let data = ["06-30-02019", "07-29-2019", "08-28-2019"]

        let times = to_date_time({ "data": data })

        let new_data = ["Jun", "Jul", "Aug"]

        assert.deepEqual(times.month_name().values, new_data);
    });

    it("check days of the weeks generated", function () {

        let data = ["06-30-02019", "07-29-2019", "08-28-2019"]

        let times = to_date_time({ "data": data })

        let new_data = ["Sun", "Mon", "Wed"]

        assert.deepEqual(times.weekdays().values, new_data);
    });

    it("check day of the month generated", function () {

        let data = ["06-30-02019", "07-29-2019", "08-28-2019"]

        let times = to_date_time({ "data": data })

        let new_data = [30, 29, 28]

        assert.deepEqual(times.monthday().values, new_data);
    });

});