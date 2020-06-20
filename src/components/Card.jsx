import React from "react";

function Card() {
    <div>
			<h1 className="heading">My Contacts</h1>
			<div className="card">
				<div className="top">
					<h2>{props.name}</h2>
					<img
						className="circle-img"
						src={props.image}
						alt="avatar_img"
					/>
				</div>
				<div className="bottom">
					<p>{props.phone}</p>
					<p>{props.email}</p>
				</div>
			</div>
		</div>
}

export default Card;