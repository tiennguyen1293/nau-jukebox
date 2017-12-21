/* © 2017 NauStud.io
 * @author Eric
 */

import React, { Component } from 'react';
import { Container } from 'flux/utils';
import { closePopUp } from '../events/AppActions';
import AppStore from '../events/AppStore';

class PopUpLyric extends Component {
	static getStores() {
		return [AppStore];
	}

	static calculateState() {
		return {
			openPopUp: AppStore.getState()['openPopup'],
			songName: AppStore.getState()['songName'],
			songLyric: AppStore.getState()['songLyric']
		};
	}

	componentDidUpdate() {
		const lyric = document.getElementById('divLyric');
		const lyricBody = document.querySelector('.popup-lyric__body');
		if (lyric) {
			lyric.style.maxHeight = '70vh';
		}

		if (lyricBody) {
			lyricBody.scrollTop = 0;
		}
	}

	closePopUp = () => {
		closePopUp();
	};

	render() {
		return (
			<section onClick={this.closePopUp} className={`popup-lyric ${this.state.openPopUp ? 'popup-lyric--active' : ''}`}>
				<div className="popup-lyric__wrap">
					<header className="popup-lyric__header">
						<h4 className="popup-lyric__title">Lyric</h4>
						<span className="popup-lyric__close" onClick={this.closePopUp}>
							X
						</span>
					</header>
					<article className="popup-lyric__body">
						<h6 className="popup-lyric__name">{this.state.songName}</h6>
						<p
							className="popup-lyric__full"
							dangerouslySetInnerHTML={{
								__html: this.state.songLyric
							}}
						/>
					</article>
				</div>
			</section>
		);
	}
}

export default Container.create(PopUpLyric);
