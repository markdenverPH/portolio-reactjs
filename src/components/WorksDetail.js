import React from 'react'
import { useParams } from "react-router-dom";

export default function WorksDetail() {
	return (
		<div>
			Works:
			<br />
			This is {useParams().workItem}
		</div>
	)
}
