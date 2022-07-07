import React from 'react';
import _ from 'lodash';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default class SearchForm extends React.Component {
    state = {
        keyword: "",
        param: "relevance",
        hako:"にじさんじ",
        setOpen: false,
    };
    
    // --selectコンポーネントの開閉判定を設定
    // 開ける
    handleOpen = () => {
        this.setState({true: this.state.setOpen});
    };
    // 閉める
    handleClose = () => {
        this.setState({false: this.state.setOpen});
    };

    // keywordステートをinputの値に置き換え
    handleChangeInput = (e) => {
        this.setState({keyword: e.target.value});
    };

    // paramステートをselectで指定した値に置き換え 
    handleChangeParam = (e) => {
        this.setState({param: e.target.value});
    };

    // hakoステートをselecetで指定した値に置き換え
    handleChangehako = (e) => {
        this.setState({hako: e.target.value});
    };

    // 検索ボタン押したときの処理
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchYoutube(this.state.keyword,this.state.hako,this.state.param);
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>  
                <inputLabel style={{paddingRight: 30}}>ハコ　</inputLabel>
                <Select
                    style={{
                        minWidth: 160,
                        textAlign: 'left',
                    }}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    onChange={this.handleChangehako}
                    value={this.state.hako}
                >
                    <MenuItem value={"にじさんじ"}>にじさんじ</MenuItem>
                    <MenuItem value={"ホロライブ"}>ホロライブ</MenuItem>
                </Select>
                    
                <br/>

                <inputLabel style={{paddingRight: 30}}>表示順</inputLabel>
                <Select
                    style={{
                        minWidth: 160,
                        textAlign: 'left',
                    }}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    onChange={this.handleChangeParam}
                    value={this.state.param}
                >
                    <MenuItem value={"relevance"}>関連度順</MenuItem>
                    <MenuItem value={"date"}>アップロード順</MenuItem>
                    <MenuItem value={"viewCount"}>再生回数が多い順</MenuItem>
                </Select>

                <br/>

                <input
                    style={{height: '40px',fontSize: '16px',marginTop: 10}}
                    placeholder='見たいVtuberは？'
                    onChange={this.handleChangeInput}
                    value={this.state.keyword}
                />

                <IconButton 
                    type={'submit'}
                    disabled={this.state.keyword === "" && /^\s+$/}
                >
                    <SearchIcon/>
                </IconButton>
            </form>
        )
    }
}