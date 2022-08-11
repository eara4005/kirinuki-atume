import React, {useState} from 'react';
import ListVideos from "./ListVideos";
import axios from 'axios';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

// YoutubeAPI-Key
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

// 検索フォームとhttp通信を行う関数をまとめた関数コンポーネント
const GetVideos = () => {

    // 取得したvideoを保持する配列 useStateフックで管理
    const [yt_videos, setYtVideos] = useState([]);
    const [nc_videos, setNcVideos] = useState([]);
    // 検索キーワードを管理する状態変数 初期値:""
    const [keyword, setWords] = useState("");
    //　検索時に所属事務所を管理する状態関数 初期値 : にじさんじ
    const [hako,setHako] = useState('にじさんじ');
    // 検索時の動画順を管理する状態変数 初期値:relevance
    const [param, setParam] = useState('relevance');
    // selectの開閉を管理する状態変数 
    const [open, setOpen] = useState(true);

    // トグルの関数を宣言
    const toggle = () => setOpen(!open)


    // パラメータでYoutube上の動画を検索→取得
    // 関数名:onSearchYoutube
    // keyword : 検索ワード
    // hako : vtuberの所属事務所の指定
    // param : 取得する動画の更新順を指定する
    const onSearchYotube = (keyword, hako, param) => {
        // youtubeのエンドポイント
        const yt_url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${hako}+${keyword}+切り抜き&order=${param}&maxResults=10&key=${YOUTUBE_API_KEY}`;

        // niconicoのエンドポイント
        const nc_url = `/api/v2/snapshot/video/contents/search?q=${hako}+${keyword}+切り抜き&targets=title,description,tags&fields=contentId,title,userId,thumbnailUrl&filters[tags][0]=${hako}&filters[tags][1]=切り抜き&_sort=-viewCounter&_context=kirinuki-atsume`;


        // axiosでYotubeAPIにリクエスト送信
        // youtube
        axios
            .get(nc_url)
            .then(res => {
                // setStateフックでvideo配列に取得したitemsを入れる
                setNcVideos(res.data.data);
                return axios.get(yt_url); 
            })
            .then(res => {
                setYtVideos(res.data.items);
            })
            // 通信失敗時の処理
            .catch(() =>{
                alert("通信に失敗しました");
            });
        
        
    }

    // 検索ボタンを押した時の処理
    const onSubmit = (e) => {
        e.preventDefault();
        onSearchYotube(keyword,hako,param);
    }

    // dom生成
    return(
        <>
            <form onSubmit={onSubmit}>  
                {/* ハコ選択プルダウンを生成 */}
                <inputLabel style={{paddingRight: 30}}>ハコ　</inputLabel>
                <Select
                    style={{
                        minWidth: 160,
                        textAlign: 'left',
                    }}
                    onClose={toggle}
                    onOpen={toggle}
                    onChange={(e) => setHako(e.target.value)}
                    value={hako}
                >
                    <MenuItem value={"にじさんじ"}>にじさんじ</MenuItem>
                    <MenuItem value={"ホロライブ"}>ホロライブ</MenuItem>
                    <MenuItem value={"774Inc"}>774 Inc.</MenuItem>
                    <MenuItem value={".LIVE"}>.LIVE</MenuItem>
                    <MenuItem value={"のりプロ"}>のりプロ</MenuItem>
                    <MenuItem value={"ぷいすぽ"}>ぶいすぽっ！</MenuItem>
                </Select>

                <br/>

                {/* 表示順の選択プルダウンを生成 */}
                <inputLabel style={{paddingRight: 30}}>表示順</inputLabel>
                <Select
                    style={{
                        minWidth: 160,
                        textAlign: 'left',
                    }}
                    onClose={toggle}
                    onOpen={toggle}
                    onChange={(e) => setParam(e.target.value)}
                    value={param}
                >
                    <MenuItem value={"relevance"}>関連度順</MenuItem>
                    <MenuItem value={"date"}>アップロード順</MenuItem>
                    <MenuItem value={"viewCount"}>再生回数が多い順</MenuItem>
                </Select>

                <br/>

                {/* 検索ワード入力欄 */}
                <input
                    style={{height: '40px',fontSize: '16px',marginTop: 10}}
                    placeholder='見たい切り抜きは?'
                    onChange={(e) => setWords(e.target.value)}
                    value={keyword}
                />

                {/* 検索実行ボタンを表示 */}
                <IconButton 
                    type = {'submit'}
                    // 空白を許容しない
                    disabled = {keyword === ""}
                >
                    <SearchIcon/>
                </IconButton>
            </form>

            {/* ListVideosコンポーネント propsとして取得した動画要素の配列を渡す */}
            <ListVideos youtube={yt_videos} ncnc={nc_videos} />
        </>
    );


};  
export default GetVideos; 