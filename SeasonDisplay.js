import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    winter : {
        iconName : 'snowflake',
        text: 'Brr it is cold outside.'
    },
    summer : {
        iconName : 'sun',
        text : 'Let us hit the beach'
    }
}

const getSeason = (lat, month) =>{
    if(month >2 && month < 9){
       return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props)=>{
   const season = getSeason(props.lat, new Date().getMonth());
    //tenary to determine what the result is.
    const {text, iconName} = seasonConfig[season] //return our obj with text and icon.
    console.log(seasonConfig[season])
    return (//this is when it switches to jsx
     
    <div className={`season-display ${season}`}>
        <i className={ `icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
    </div>  
    );
}


export default SeasonDisplay;