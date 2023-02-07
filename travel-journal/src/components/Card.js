import React from "react";

export default function Main(props) {
  return (
    <div className="card">
      <div className="card--img--container">
        <img className="card--img" src={props.item.imageUrl} />
      </div>
      <div className="card--body">
        <img src="images/location.png" className="location-logo" />
        <h3 className="card--location">{props.item.location}</h3>
        <a
          className="card--maps"
          href={props.item.googleMapsUrl}
          target="_blank"
        >
          View on Google Maps
        </a>
        <h1 className="card--title">{props.item.title}</h1>
        <h5 className="card--date">
          {props.item.startDate} - {props.item.endDate}
        </h5>
        <p className="card--desc">{props.item.description}</p>
      </div>
    </div>
  );
}
