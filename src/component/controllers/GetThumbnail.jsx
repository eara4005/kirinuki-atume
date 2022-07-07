import React from "react";
import Youtube from './Youtube';
import SearchForm from './SearchForm'
import axios from 'axios';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default class GetThumbnail extends React.Component {
    state = {
        videos: [],
    }

    onSearchYoutube = (keyword,hako,param) =>{
        const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${hako}+${keyword}+切り抜き&order=${param}&maxResults=10&key=${YOUTUBE_API_KEY}`;

        axios
            .get(url)
            .then(response => {
                this.setState({
                    videos: response.data.items,
                });
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }

    render() {
        return (
            <div>
                <SearchForm onSearchYoutube={this.onSearchYoutube}/>
                <Youtube videos={this.state.videos}/>
            </div>
        )   
    }
}
