import React from 'react';
import Day from './Day';

function Forecast(props) {
    return (
        <div className={props.show_forecast}>
            <Day day={props.dayOneDay} month={props.dayOneMonth} date={props.dayOneDate} icon={props.dayOneIcon} temp={props.dayOneTemp}/>
            <Day day={props.dayTwoDay} month={props.dayTwoMonth} date={props.dayTwoDate} icon={props.dayTwoIcon} temp={props.dayTwoTemp}/>
            <Day day={props.dayThreeDay} month={props.dayThreeMonth} date={props.dayThreeDate} icon={props.dayThreeIcon} temp={props.dayThreeTemp}/>
            <Day day={props.dayFourDay} month={props.dayFourMonth} date={props.dayFourDate} icon={props.dayFourIcon} temp={props.dayFourTemp}/>
            <Day day={props.dayFiveDay} month={props.dayFiveMonth} date={props.dayFiveDate} icon={props.dayFiveIcon} temp={props.dayFiveTemp}/>
        </div>
    )
}

export default Forecast;