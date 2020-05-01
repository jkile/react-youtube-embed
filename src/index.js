import React from 'react'

function getPadding(option){
	if(option.indexOf(`%`) > -1){
		return option
	}
	if(option === `widescreen`){
		return `56.25%`
	}
	if(option === `standard`){
		return `75%`
	}
	if(option.indexOf(`:`) > -1){
		option = option.split(`:`)
		option = option[1] / option[0]
		option = option * 100
		return `${option}%`
	}
	return option
}

function getId(str){
	str = str.split(`/`)
	str = str.pop()
	if (str.indexOf(`?v=`) > -1){
		str = str.split(`?v=`)[1]
	}
	str = str.split(`?`)[0]
	str = str.split(`&`)[0]
	return str
}

class YouTubeEmbed extends React.Component {
	render(){
		const { appendSrc, aspectRatio, id, prependSrc, width, ...props} = this.props;
		const embedLink = prependSrc + getId(id) + appendSrc
		return (
			<div 
				style={{
					position: `relative`,
					paddingBottom: getPadding(aspectRatio),
					width: `100%`,
					height: 0,
				}}
				{...props}
			>
				<iframe
					width={width}
					height={width}
					src={embedLink}
					srcdoc= {`<style>*{padding:0;margin:0;overflow:hidden}
					html,body{height:100%}
					img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
					span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
					</style><a href=https://www.youtube.com/embed/${embedLink}>
					<img src=https://i.ytimg.com/vi/${embedLink}/maxresdefault.jpg alt="" /><span>▶</span></a>`}
					frameBorder='0'
					allow='autoplay; encrypted-media'
					allowFullScreen
					style={{
						position: `absolute`,
						top: 0,
						left: 0,
						width: `100%`,
						height: `100%`,
					}}
					/>
			</div>
		)
	}
}

YouTubeEmbed.defaultProps = {
	aspectRatio: `56.25%`,
	prependSrc: ``,
	appendSrc: ``,
}

export default YouTubeEmbed