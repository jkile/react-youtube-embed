import React from 'react'
import { render } from 'react-dom'
import YouTube from '../src/index'

const containerEl = document.createElement('div')
document.body.appendChild(containerEl)

render(
	<YouTube
		id='https://www.youtube.com/watch?v=A71aqufiNtQ&t=1s'
	/>,
	containerEl
)